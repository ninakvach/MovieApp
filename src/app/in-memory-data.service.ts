import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
createDb(){

  const movies =[
    {id:1, name:"movie 1",description:"Comedy",imageUrl:"1.jpg"},
    {id:2, name:"movie 2",description:"Horror",imageUrl:"2.jpg"},
    {id:3, name:"movie 3",description:"Musical",imageUrl:"3.jpg"},
    {id:4, name:"movie 4",description:"Cartoon",imageUrl:"4.jpg"},


];
return {movies};
}
  constructor() { }
}
