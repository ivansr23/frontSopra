import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})
export class CmpDataBindingComponent implements OnInit {
  nombre: string = 'Ivan';
  editando: boolean = true;
 
  constructor() { }

  ngOnInit() {
  }
  toggleEditando() {
    if (this.editando === true){
      this.editando = false;
    } else {
      this.editando = true;
    }
  }
  resetNombre(){
    this.nombre = '';
  }
  cambiarNombre(event){
    this.nombre = event.target.value;
  }
  mostrar(ref){
    console.log(ref);
    console.dir(ref);
  }
}
