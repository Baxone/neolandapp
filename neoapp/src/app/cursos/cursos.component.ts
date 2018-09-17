import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
<<<<<<< HEAD
  ciudad: any
  parametros: any
   constructor(private activateRoute: ActivatedRoute, private utilsService: UtilsService) {
  
  
     this.parametros = this.activateRoute.params.subscribe(params =>{
  
       this.ciudad = params.ciudad
  
     })
  
  
    this.utilsService.getCiudades(this.ciudad).then((res)=>{
      console.log(res.json())
    })
  
  
    }
  
   ngOnInit() {
=======
ciudad: string
  constructor(private activateRoute: ActivatedRoute, private utilsService: UtilsService) {
   
   this.ciudad = this.activateRoute.params.value.ciudad

   
   this.utilsService.getCiudades(this.ciudad).then((res)=>{
     console.log(res.json())
   })
  
    
>>>>>>> a8e61ecb94c7fded5e8477e45e836e53696fd21c
   }
  
  }