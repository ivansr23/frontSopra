import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-meme',
  templateUrl: './cmp-meme.component.html',
  styleUrls: ['./cmp-meme.component.css']
})
export class CmpMemeComponent implements OnInit {
  @Input() textoArriba = '';
  @Input() textoAbajo = '';
  @Input() imagenUrl = 'https://i.ytimg.com/vi/M2k3eL77rqk/hqdefault.jpg';
  @Input() color = '#000000';
  @Input() isFav = false;

  constructor() { }

  ngOnInit() {
  }

}
