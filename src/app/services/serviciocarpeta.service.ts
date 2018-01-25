import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServiciocarpetaService {

  //constante con el método a ejecutar en el servicio
  readonly post_uri: string = 'posts';


  // inyección de httpClient
  constructor(private httpClient: HttpClient) { }

  // Método que ejecuta el método post del servicio expuesto en BASE_URL
  sendPost(body: any): Observable<any> {
   return  this.httpClient.post(BASE_URL + this.post_uri, body);
  }
}
