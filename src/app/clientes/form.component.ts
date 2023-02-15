import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  public Cliente: Cliente = new Cliente();

  public titulo: string = "Crear Cliente!";

  constructor(private clienteService: ClienteService, private router: Router) {

  }

  ngOnInit() {
  }

  getClientById(): void {

  }

  public create(): void {
    this.clienteService.create(this.Cliente).
      subscribe(Cliente => {
        this.router.navigate(['/clientes'])
        Swal.fire('Nuevo Cliente', `Cliente ${this.Cliente.name} creado con éxito`, 'success');
        
      }
      );
  }
}
