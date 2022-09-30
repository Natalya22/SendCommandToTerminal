import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Command } from './cmdModel';

@Injectable()
export class CommandService {
  private url = "http://178.57.218.210:198/";

  constructor(private http: HttpClient) {}

  getToken(login: string, pswd: string): Observable<string> {
    return this.http.get<string>(this.url + `token?login=${login}&password=${pswd}`);
  }

  getCommands(token: string): Observable<any> {
    return this.http.get(this.url + 'commands/types?token=' + token);
  }

  sendCommand(token: string, body: any): Observable<any> {
    return this.http.post(this.url + `terminals/${body['terminalID']}/commands?token=${token}`, body);
  }
}
