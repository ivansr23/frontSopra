import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview-cv',
  templateUrl: './preview-cv.component.html',
  styleUrls: ['./preview-cv.component.css']
})
export class PreviewCvComponent implements OnInit {
  @Input() nombre = '';
  @Input() apellidos = '';
  @Input() url = '';
  @Input() email = '';
  @Input() skill: string[] = [];
  constructor() { }

  ngOnInit() {
  }
  cambiarNombre(event) {
    this.nombre = event;
  }
}
