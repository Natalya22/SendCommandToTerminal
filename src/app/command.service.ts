import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommandService {
  private url = "http://178.57.218.210:198/";

  constructor(private http: HttpClient) {}

  getCommands(token: string): Observable<any> {
    return this.http.get(this.url + 'commands/types?token=' + token);
  }

    // getLicense(id: number) {
    //     return this.http.get(this.url + '/' + id);
    // }

    // createLicense(license: License) {
    //     return this.http.post(this.url, license);
    // }

    // updateLicense(license: License) {

    //     return this.http.put(this.url, license);
    // }

    // deleteLicense(id: number) {
    //     return this.http.delete(this.url + '/' + id);
    // }
}
