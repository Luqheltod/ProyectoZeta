import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-instadeath-dialog',
  templateUrl: './instadeath-dialog.component.html',
  styleUrls: ['./instadeath-dialog.component.css']
})
export class InstadeathDialogComponent implements OnInit {


  message : string ; 
  constructor( 
    private dialogRef: MatDialogRef<InstadeathDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    
      this.message = data.message;
      
  }
     

  ngOnInit(): void {
  }


  close() {
   
    this.dialogRef.close();
}

submit(): void {
  //Servicio graba datos en bbdd
 
  this.dialogRef.close();
}
}
