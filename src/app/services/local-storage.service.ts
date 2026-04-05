import {Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js';
const SECRET_KEY = 'fkdljlkfdjkkkkkkdlflfdjggdde';

@Injectable({ 
   providedIn: 'root' 
  })
export class LocalStorageService {
   set(key: string, value: unknown){
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(value), SECRET_KEY).toString();
    return localStorage.setItem(key, encrypted);
  }

  get(key: string){
    const encrypted = localStorage.getItem(key) || '';
    const decrypted = CryptoJS.AES.decrypt(encrypted, SECRET_KEY).toString(CryptoJS.enc.Utf8);
    return encrypted ? JSON.parse(decrypted) : null;
  }

  remove(key: string){
    return localStorage.removeItem(key);
  }

  clear(){
    return localStorage.clear();
  }
}