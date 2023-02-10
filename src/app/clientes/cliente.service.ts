import { Injectable } from '@angular/core';
// import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';
//import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ClienteService {
  private urlEndpointFindAll: string = "http://localhost:8080/api/clientsFindAll";
  private urlEndpointCreate: string = "http://localhost:8080/api/save";
  private urlEndpointFindById: string = "http://localhost:8080/api/clientsById";
  private urlEndpointUpdate: string = "http://localhost:8080/api/update";

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getClients(): Observable<Cliente[]>{
    // return of(CLIENTES);
    return this.http.get<Cliente[]>(this.urlEndpointFindAll);
  }

  create(cliente: Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndpointCreate, cliente, {headers: this.httpHeaders})
  }

  getClientId(id): Observable<Cliente>{
    var obj = {"id": id};
    return this.http.post<Cliente>(`${this.urlEndpointFindById}`, obj, {headers: this.httpHeaders})
  }

  updateClient(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndpointUpdate}`, cliente, {headers: this.httpHeaders})
  }
}
