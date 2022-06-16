import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-formupdateusers',
  templateUrl: './formupdateusers.component.html'
  // styles: [
  // ]
})
export class FormupdateusersComponent implements OnInit {

  constructor(public servicio:ServiceService) { }

  ngOnInit(): void {
  }
  actualizaruser(datos:NgForm){
    this.servicio.actualizarusers(datos.value).subscribe({
      next:(res)=>{console.log(res)},
      error:(err)=>{console.log(err)}
    })
  }

}