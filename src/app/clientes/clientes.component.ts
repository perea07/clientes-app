import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent {
 
  clientes: Cliente[];

  constructor(){

  }

  ngOnInit(){
    this.clientes = CLIENTES;
  }

}
