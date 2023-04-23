import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'ctimer-countdown-timer',
  template: `<div id="timer">
  <div>{{ time.days }} <span>Days</span></div>
  <div>{{ time.hours }} <span>Hours</span></div>
  <div>{{ time.minutes }} <span>Minutes</span></div>
  <div>{{ time.seconds }} <span>Seconds</span></div>
  </div>`,
  styles: [`#timer {
    font-size: 3em;
    font-weight: 100;
    color: white;
    padding: 20px;
    width: 700px;
    color: white;
  }
  
  #timer div {
    display: inline-block;
    padding: 15px;
    background: black; 
    border-radius: 10px;
    border: 2px solid black;
    margin: 15px;


    
  }
  #timer div span {
    color: #ffffff;
    display: block;
    margin-top: 15px;
    font-size: .35em;
    font-weight: 400;
  }
  
  
  
  `],
})
export class CountdownTimerComponent implements OnInit {
  time!: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  @Input() finishDateString: string = '';
  finishDate: Date = new Date();
  

  ngOnInit(): void {
    // Inicializamos el momento que falta hasta llegaral tiempo objetivo con valores en 0
    this.time = {
      days: 0, hours: 0, minutes: 0, seconds: 0
    };
    // Creamos la fecha a partir de la fecha en formato string AAAA-MM-dd HH:mm:ss
    this.finishDate = new Date(this.finishDateString); 

    this.start().subscribe(_ => console.log("tik"));
  }

  updateTime() {
    
    const now = new Date();
    const diff = this.finishDate.getTime() - now.getTime();
    console.log(diff)

    // Cálculos para sacar lo que resta hasta ese tiempo objetivo / final
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);
    
    // const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    // const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    // const mins = Math.floor((diff / 1000 / 60) % 60);
    // const secs = Math.floor((diff / 1000) % 60);
    // // 
    // La diferencia que se asignará para mostrarlo en la pantalla
    this.time.days = days;
    this.time.hours = hours - days * 24;
    this.time.minutes = mins - hours * 60;
    this.time.seconds = secs - mins * 60;
  }
  
  // Ejecutamos la acción cada segundo, para obtener la diferencia entre el momento actual y el objetivo
  start() {
    return interval(1000).pipe(
      map((x: number) => {
        this.updateTime();
        return x;
      })
    );
  }
}