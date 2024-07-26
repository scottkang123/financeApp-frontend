import { Component, OnInit, Inject } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

import { EarningsCalenderControllerService } from '../../services/services';

interface Note {
  id: number;
  title: string;
  date: string; // ISO string format
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarOptions: CalendarOptions | undefined;
  notes: Note[] = [];
  earningsEvents: any[] = [];
  noteForm: FormGroup;
  currentId = 0;
  loading = true;

  constructor(private dialog: MatDialog, private fb: FormBuilder, private earningsCalenderService: EarningsCalenderControllerService) {
    this.noteForm = this.fb.group({
      title: ['']
    });
  }

  ngOnInit(): void {
    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev',
        center: 'title',
        right: 'next'
      },
      dateClick: this.handleDateClick.bind(this),
      events: []
    };

    this.fetchEarningsCalendar();
  }

  fetchEarningsCalendar(): void {
    this.earningsCalenderService.retreiveEarningsCalendar().subscribe((data: any[]) => {
      console.log('Earnings Calendar Data:', data); // Log the data to verify the response

      this.earningsEvents = data.map(event => ({
        id: event.symbol,
        title: `${event.symbol} - ${event.name}`,
        start: event.reportDate,
        color: 'blue' // Add color to differentiate earnings events
      }));
      this.updateCalendarEvents();
      this.loading = false; // Set loading to false after data is fetched

    },
    error => {
      console.error('Error fetching earnings calendar', error);
      this.loading = false; // Set loading to false after data is fetched

    });
  }

  handleDateClick(arg: DateClickArg): void {
    const dialogRef = this.dialog.open(NoteDialogComponent, {
      width: '250px',
      data: { date: arg.dateStr, noteForm: this.noteForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.currentId++;
        const newNote: Note = {
          id: this.currentId,
          title: result.title,
          date: arg.dateStr
        };
        this.notes.push(newNote);
        console.log('Notes after adding new note:', this.notes);
        this.updateCalendarEvents();
      }
    });
  }

  updateCalendarEvents(): void {
    const combinedEvents = [
      ...this.earningsEvents,
      ...this.transformNotesToEvents(this.notes)
    ];
    console.log('Combined Events:', combinedEvents);

    if (this.calendarOptions) {
      this.calendarOptions.events = combinedEvents;
    }
  }

  transformNotesToEvents(notes: Note[]): any[] {
    return notes.map(note => ({
      id: note.id.toString(),
      title: note.title,
      start: note.date,
      color: 'red' // Add color to differentiate notes
    }));
  }
}

@Component({
  selector: 'app-note-dialog',
  template: `
    <h1 mat-dialog-title>Add Note</h1>
    <div mat-dialog-content>
      <form [formGroup]="data.noteForm">
        <mat-form-field>
          <mat-label>Note</mat-label>
          <input matInput formControlName="title">
        </mat-form-field>
      </form>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button (click)="onSaveClick()">Save</button>
    </div>
  `
})
export class NoteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<NoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close({ title: this.data.noteForm.value.title });
  }
}
