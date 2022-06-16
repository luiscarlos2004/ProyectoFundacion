import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css','../../../../../fontAwesome/css/all.min.css','../../../../styles.css']
})
export class DashbordComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cerrar(){
    this.router.navigate(['auth/login']);
  }

}