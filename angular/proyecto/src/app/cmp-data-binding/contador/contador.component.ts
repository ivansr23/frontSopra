import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  contador: number  = 0;
  restarContador(){
    this.contador--;
  }
  sumarContador(){
    this.contador++;
  }
  constructor() { }

  ngOnInit() {
  }

}
