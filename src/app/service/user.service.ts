import { Injectable } from '@angular/core';
import data from '../mock-data/data.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  json!: JSON;

  records: any[];

  users: any[] = [];


  constructor() { 
    this.records = data.usuarios;
  }

  getUsers(startFrom: number, size: number): any[]{

    this.users = new Array();

    var count = 0;
    
    for (let index = 0; index < this.records.length; index++) {

      if(startFrom > index){
        continue;
      }  
      if(count < size){
        const element = this.records[index];
        this.users.push(element);
        count++;
      }else{
        break;
      }
    }
    return this.users;
  }

  deleteUser(id: string){
    this.records = this.records.filter(obj => obj._id !== id);
  }

  getUsersSize(): number{
    return this.records.length;
  }
}
