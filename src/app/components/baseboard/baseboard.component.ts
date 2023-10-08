import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-baseboard',
  templateUrl: './baseboard.component.html',
  styleUrls: ['./baseboard.component.css']
})
export class BaseboardComponent implements OnInit {
  
  @Input()
  boardContent:string =""

  constructor() { }

  ngOnInit(): void {
  }

}
