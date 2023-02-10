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

  public onSave() {
    this.closebutton.nativeElement.click();
  }

  ngOnInit() {
    this.ClienteService.getClients().subscribe(
      (clientes) => this.clientes = clientes);
  }

}
