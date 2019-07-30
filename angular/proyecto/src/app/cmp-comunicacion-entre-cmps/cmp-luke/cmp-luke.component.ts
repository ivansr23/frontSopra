import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cmp-luke',
  templateUrl: './cmp-luke.component.html',
  styleUrls: ['./cmp-luke.component.css']
})
export class CmpLukeComponent implements OnInit {
  @Input() miNombre = '';
  @Input() nombreHermana = '';
  @Output() nombreCambiado = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  cambiarNombre(){
    // this.miNombre = 'Leiaaaaaaaa'
    this.nombreCambiado.emit('Lukeeee');
  }

}
