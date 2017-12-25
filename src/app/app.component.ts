import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  personData: any[] = [];
  removePerson: boolean = true;
  updatePersonDetails :boolean = false;  
  id = undefined;
  user: object ={
    id: "",
    name: "",
    balance: "",
    age: ""
  }

  addPerson(portal){
    this.personData.push(portal.value);
    if(this.personData.length){
       portal.reset();
    }
  }
  deletePerson(i){
    this.personData.splice(i,1);
    console.log(i);
  }
  editPerson(data){
    this.user = data ;
    this.removePerson = false;
    this.updatePersonDetails = true;
  }
  updatePerson(user){
    this.removePerson = true;
    this.updatePersonDetails = false;
     this.user = {};
  }
}
