import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { MemeServiceService } from '../meme-service.service';
import { Meme } from '../meme';

@Component({
  selector: 'app-cmp-form',
  templateUrl: './cmp-form.component.html',
  styleUrls: ['./cmp-form.component.css']
})
export class CmpFormComponent implements OnInit {
  form: FormGroup;
  memes: Meme[];
  obj = {
    prop: '',
    value: ''
  };
  @Output() enviarObj = new EventEmitter<object>();

  constructor(private servicioMeme: MemeServiceService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.memes = this.servicioMeme.getMemes();
    this.form = this.formBuilder.group({
      // username: new FormControl('angel', [Validators.required, this.esUnStark(['robb', 'arya', 'rickon', 'sansa', 'bran', 'tony'])]),
      textoArriba: this.formBuilder.control('',Validators.required),
      textoAbajo: this.formBuilder.control('', Validators.required),
      imagenUrl: this.formBuilder.control('', Validators.required),
      color: this.formBuilder.control('black', Validators.required),
     
    });
  }
  enviarTodo(event){
    this.obj.prop = event.target.name;
    this.obj.value = event.target.value;
    this.enviarObj.emit(this.obj);
  }
  enviarCheckBox(event){
    this.obj.prop =  event.target.name;
    this.obj.value = event.target.checked;
    this.enviarObj.emit(this.obj);
  }
  guardarMeme(){
    console.log(this.form);
    const meme = new Meme('', this.form.value.textoArriba,
    this.form.value.textoAbajo, this.form.value.imagenUrll, this.form.value.color,  this.form.value.isFav);
    this.servicioMeme.addMeme(meme);
  }

}
