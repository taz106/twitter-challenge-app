import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStorageService {

  constructor() { }

  setItem(key: string, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  
}
