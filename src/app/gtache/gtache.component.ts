import { Component, OnInit } from '@angular/core';
import * as Constants from '../config/constants';
import {Http, RequestOptionsArgs} from "@angular/http";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-gtache',
  templateUrl: './gtache.component.html',
  styleUrls: ['./gtache.component.css']
})
export class GtacheComponent implements OnInit {
  
  taskList:any = new Array();
  lastName:string = "";
  firstName:string = "";
  mail:string = "";
  idUser:number;

  messageError:string = "";

  access:number = 0;

  constructor(private http:Http) { }

  ngOnInit() {
  }

   onSubmit(){
  	this.access = 0;
  	return this.http.get(Constants.END_POINT + "/user" + "/" + this.mail)
		    .pipe(map((resp)=>resp.json()))
		    .subscribe((data) => {
  	     	    console.log(data);
  	     	    if(data) {
  	     	    	this.access = 1;
  	     	    	this.idUser = data.idUser
  	     	    	this.taskList = data.taskList;
  	     	    	this.lastName = data.firstName;
  	     	    	this.firstName = data.lastName;
  	     	    } else {
  	     	    	this.messageError = "Le mail que vous avez saisi n'est reconnu par notre système!"
  	     	    }
  	 	        
  	        }) 
    }

    updateTable(i:number){
    	return this.http.put(Constants.END_POINT + "/task", {'taskList':this.taskList, 'idUser':this.idUser})
		    .pipe(map((resp)=>resp.json()))
		    .subscribe((data) => {
  	     	    
  	     	    this.taskList = data;
  	 	        
  	        }) 
    }

    hideButtonUp(position:number) {
    	if(position <= 0) return false;
    	return true;
    }

    hideButtonDown(position:number){
    	if(position >= this.taskList.length - 1) return false;
    	return true;
    }

    deplaceDown(i:number){
    	this.taskList[i].order = i+1;
    	this.taskList[i+1].order = i;
    	var object = this.taskList[i+1];
    	this.taskList[i+1] = this.taskList[i];
    	this.taskList[i] = object;
    	this.updateTable(i);
    }

    deplaceUp(i:number){
    	this.taskList[i].order = i-1;
    	this.taskList[i-1].order = i;
    	var object = this.taskList[i-1];
    	this.taskList[i-1] = this.taskList[i];
    	this.taskList[i] = object;
    	this.updateTable(i);
    }

    

}
