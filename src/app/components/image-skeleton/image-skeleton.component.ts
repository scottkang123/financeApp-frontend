import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-skeleton',
  templateUrl: './image-skeleton.component.html',
  styleUrl: './image-skeleton.component.css'
})
export class ImageSkeletonComponent {
  @Input()
  height: number = 100;
  @Input()
  width: number = 100;
}
