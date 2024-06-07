import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {

  readonly faqList = [
    { question: "How do I change my password?", instructionLink: "" },
    { question: "If FinanceApp's free, how do you make money?", instructionLink: "" },
    { question: "Is FinanceApp private and secure?", instructionLink: "" },
    { question: "Where can I see the customer reviews of the app?", instructionLink: "" },
    { question: "How do I delete my account from FinanceApp?", instructionLink: "" },
    { question: "Who is JYP and where can I get his number? 😚", instructionLink: "" },
    { question: "Why is Scott so cute? 😻", instructionLink: "" },
  ]
  supportQuery: string = "";
  
  onSupportSearch() {

  }

  getFaqlist() {
    return this.faqList;
  }
}
