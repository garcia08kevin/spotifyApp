import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenResponse } from '../library/interface/token';

@Injectable({ providedIn: 'root' })
export class SharedService {
  constructor(private httpClient: HttpClient) {
    this.loadLocalStorage();
  }

  getToken(): string {
    this.loadLocalStorage();
    const token = localStorage.getItem('token')!;
    return JSON.parse(token);
  }

  private saveLocalStorage({ access_token }: TokenResponse): void {
    const date = new Date();
    localStorage.setItem('token', JSON.stringify(access_token));
    localStorage.setItem('expirateTime', JSON.stringify(date.setHours(date.getHours() + 1)));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('token')) return this.generateToken();
    if (this.tokenExpired(localStorage.getItem('expirateTime')!)) return this.generateToken();
  }

  private tokenExpired(date: string) {
    const dateNumber = +date;
    return (Math.floor((new Date).getTime() / 1000)) == dateNumber;
  }

  generateToken(): void {
    const url = 'https://accounts.spotify.com/api/token';
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    const body =
      'grant_type=' + 'client_credentials'
      + '&client_id=' + '0dc1392c31994c7f965bb09b876e5c2f'
      + '&client_secret=' + '5c39a827ce944903b7305d01ffc24f02'
    this.httpClient.post<TokenResponse>(url, body, { headers: headers })
      .subscribe(resp => {
        this.saveLocalStorage(resp);
      });

  }

}
