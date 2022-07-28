import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceGeneralService {
  // URL to web api
  public apiURL = environment.apiURL;
  // URL api server
  private url: string = environment.apiURL;
  private headers = new HttpHeaders();

  constructor(private http: HttpClient, private route: Router) {
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append(
      'Access-Control-Allow-Methods',
      'POST, GET, OPTIONS, PUT'
    );
    this.headers.append('Accept', 'application/json');
    this.headers.append('content-type', 'application/json');
  }
  getAPI() {
    return this.apiURL;
  }
  getURL() {
    return this.url;
  }
  serviceGeneralPostWithUrl(url, parametros): Observable<any> {
    return this.http.post(this.apiURL + url, parametros, {
      headers: this.headers,
    });
  }
  public serviceGeneralGet(url): Observable<any> {
    return this.http.get(this.apiURL + url, { headers: this.headers });
  }
  public serviceGeneralPut(url, parametros): Observable<any> {
    return this.http.put(this.apiURL + url, parametros, {
      headers: this.headers,
    });
  }
  public serviceGeneralDelete(url: string): Observable<any> {
    return this.http.delete(this.apiURL + url, { headers: this.headers });
  }
  public getCatalogueFrom(catalogo_selected, params: string = ''): any {
    const query = this.http.get(this.apiURL + 'Catalogue/' + catalogo_selected + params, { headers: this.headers }),
      query_on = new Promise((resolve) => {
        query.subscribe((response) => {
          resolve(response);
          //console.log(resolve(response));
        }, (error) => {
          resolve(error);
        });
      });
    return query_on.then((result: any) => {
      if (result.success) return result.result;
      else return 'Error al pedir el catalogo.';
    });
  }

}