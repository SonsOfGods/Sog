import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  activedCategory: string = 'Security';

  activedQuestion: string = '';

  isShow: boolean = false;

  activateAnswer(answer: string) {
    //Look if is showing a answer
    if (this.activedQuestion != '') {
      let active = document.getElementById(this.activedQuestion);
      let active2 = document.getElementById(this.activedQuestion + '_answer');
      if (active && active2) {
        active.className = 'container_answer';
        active2.className = 'answer';
      }
    }
    let element = document.getElementById(answer);
    let element2 = document.getElementById(answer + '_answer');
    if (element && element2) {
      if (answer != this.activedQuestion) {
        element.className = 'container_answer show_answer_container';
        element2.className = 'answer show_answer';
        this.activedQuestion = answer;
      } else {
        element.className = 'container_answer';
        element2.className = 'answer';
        this.activedQuestion = '';
      }
    }
  }
}
