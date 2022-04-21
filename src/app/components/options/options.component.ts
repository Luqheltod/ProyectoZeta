import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarRestComponent } from 'src/app/shared/snack-bar-rest/snack-bar-rest.component';


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {


  restMsg : string = "Mensaje"

  constructor(private readonly snackBar: MatSnackBar,) { }

  ngOnInit(): void {
  }


  rest(){
  this.snackBar.openFromComponent(SnackBarRestComponent,
    {
      data: {
        html: this.restMsg
      },
      politeness: 'polite',
      panelClass: 'snack-bar-rest',
      duration: 24000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    }
  );
}
}


