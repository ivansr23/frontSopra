import { Component, OnInit } from '@angular/core';
import { Meme } from '../meme';
import { MemeServiceService } from '../meme-service.service';

@Component({
  selector: 'app-cmp-listameme',
  templateUrl: './cmp-listameme.component.html',
  styleUrls: ['./cmp-listameme.component.css']
})
export class CmpListamemeComponent implements OnInit {
  memes: Meme[] = [];
  constructor(private servicioMeme: MemeServiceService) { }

  ngOnInit() {
    this.memes = this.servicioMeme.getMemes();
  }
  borrarMeme(id){
    console.log('eee');
    this.servicioMeme.deleteMeme(id);
  }
}
