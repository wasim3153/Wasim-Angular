import { Component, OnInit } from '@angular/core';
import{MatDialogRef} from '@angular/material/dialog'
import { CreateProjectComponent } from '../create-project/create-project.component';

@Component({
  selector: 'app-addmemberdialog',
  templateUrl: './addmemberdialog.component.html',
  styleUrls: ['./addmemberdialog.component.css']
})
export class AddmemberdialogComponent implements OnInit {
roles=["Developer","Senior Software Engineer","Team Lead"];
SelectedOptions:string;
 
  constructor(public dialogRef: MatDialogRef<CreateProjectComponent>) {}
    
    closeDialog(){
      this.dialogRef.close(); 
    }
    AddMember(name,eid){
      alert("member added" + this.SelectedOptions);
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
