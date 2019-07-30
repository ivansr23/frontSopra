import { Component, OnInit } from '@angular/core';

export interface Oferta{
  ciudad: string;
  descripcion: string;
  imagUrl: string;
  nombre: string;
  salario: number;
  skill: Array<string>;
}

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  ofertas: Array<Oferta> = [{
    ciudad: 'Madrid',
    descripcion: 'ehehehehehehe',
    imagUrl: 'https://www.todotech20.com/wp-content/uploads/2019/05/El-paro-de-Riot-Games-ocurre-debido-al-arbitraje-y.jpg',
    nombre: 'Esto pa RIOT',
    salario: 1992,
    skill: ['holo', 'cobraspoco']
  }];
  constructor() { }

  ngOnInit() {
  }

}
