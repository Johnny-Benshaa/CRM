import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  name: string = "avi moshe";
  price: number = 23;
  isLogin: boolean = true;
  data: any = null;
  numbers: number[] = [10, 20, 30];
  nums: Array<number> = [10, 20, 30];

  names: string[] = ["avi", "moshe", "nati"];
  Names: Array<string> = ["johnny", "rot", "yosef"];

  anyArr: any[] = ["name", 30, true, null];
  //tuple
  myProp: [number, number, string, boolean] = [10, 20, "string", true];
  user = {
    name: "obj name",
    age: 30,
    price: 0
  };


  constructor() { }

  ngOnInit(): void {
  }
  get_name() {
    return " moshe cohen";
  }
}
