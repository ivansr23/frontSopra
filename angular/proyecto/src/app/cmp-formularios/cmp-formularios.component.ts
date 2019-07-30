import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-cmp-formularios',
  templateUrl: './cmp-formularios.component.html',
  styleUrls: ['./cmp-formularios.component.css']
})
export class CmpFormulariosComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      // username: new FormControl('angel', [Validators.required, this.esUnStark(['robb', 'arya', 'rickon', 'sansa', 'bran', 'tony'])]),
      username: this.formBuilder.control('angel', [Validators.required, this.esUnStark(['robb', 'arya', 'rickon',
       'sansa', 'bran', 'tony'])]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(5)])
    });
  }
  login() {
    console.log(this.form);
  }

  esUnStark(nombresValidos: Array<string>){
    // const nombresValidos = ['robb', 'arya', 'rickon', 'sansa', 'bran', 'tony'];
    return(control: FormControl) => {
    if (nombresValidos.includes(control.value.toLowerCase())) {
      return null;
    }
    return{
      esUnStark: false
    };
  };
}
}
