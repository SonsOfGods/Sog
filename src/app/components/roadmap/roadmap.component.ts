import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss'],
  animations: [
    trigger('enterState', [
      transition('* => *', [
        animate('.5s ease-in-out')
      ])
    ])
  ]
})
export class RoadmapComponent implements OnInit {

  selectedLang = localStorage.getItem('lang') || 'en';
  constructor() { }
  ngOnInit(): void {
    this.selectedLang = localStorage.getItem('lang') || 'en';
  }

}
