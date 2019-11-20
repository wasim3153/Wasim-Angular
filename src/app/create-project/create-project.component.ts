import { Component, OnInit } from '@angular/core';
import { employeesmodel } from './create-project.model.component';
import {MatDialog} from '@angular/material/dialog';
import { AddmemberdialogComponent } from '../addmemberdialog/addmemberdialog.component';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
employees:employeesmodel[];
  constructor(public dialog:MatDialog) {
    this.employees=[new employeesmodel("wasim","E31985","Senior Software Engineer",false),
    new employeesmodel("Sumit","E31986","Senior Tech Lead",true)]
   }

   openDialog(){
     const dialogRef= this.dialog.open(AddmemberdialogComponent,{width:'250px'});
   }

  ngOnInit() {
  }

}
