import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar-rest',
  templateUrl: './snack-bar-rest.component.html',
  styleUrls: ['./snack-bar-rest.component.css']
})
export class SnackBarRestComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
  public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

}
