import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent {

  clientes: Cliente[];
  public Cliente: Cliente = new Cliente();
  public ClienteCapture: Cliente = new Cliente();
  @ViewChild('closebutton') closebutton;

  constructor(private ClienteService: ClienteService, private router: Router) {
  }

  captureData = (id) => {
    this.ClienteService.getClientId(id)
      .subscribe(ClienteCapture => {
        this.ClienteCapture = ClienteCapture;
      })
  }

  update = () => {
    this.ClienteService.updateClient(this.ClienteCapture).subscribe(
      response => {
        Swal.fire('Cliente Actualizado', `Cliente ${response.name} actualizado`, 'success')
        this.ngOnInit();
        this.onSave();
      }
    );
  }


  deleteUSer = (data) => {
    Swal.fire({
      title: '¿Deseas Eliminar el Cliente?',
      text: `Eliminar el cliente ${data.name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        this.ClienteService.deleteClient(data.id).subscribe(
          response => {
            this.clientes = this.clientes.filter(cli => cli !== data)
            Swal.fire(
              `Cliente ${data.name}`,
              'Cliente eliminado.',
              'success'
            );
          }
        );
      }
    })
  }

  public onSave() {
    this.closebutton.nativeElement.click();
  }

  ngOnInit() {
    this.ClienteService.getClients().subscribe(
      (clientes) => this.clientes = clientes);
  }

}
