import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-cv',
  templateUrl: './mi-cv.component.html',
  styleUrls: ['./mi-cv.component.css']
})
export class MiCvComponent implements OnInit {
  nombre = '';
  apellidos = '';
  url = '';
  email = '';
  skill: string[] = [];
  constructor() { }

  ngOnInit() {
  }
  cambiarAtributos(event) {
    console.log(event);
    this[event.prop] = event.value;
  }
 
  cambiarSkill(event) {
    console.log(event);
    this.skill.push(event);
  }
}
