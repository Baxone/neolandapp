import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
<<<<<<< HEAD
import { ActivatedRoute} from '../../../node_modules/@angular/router';
=======
import { ActivatedRoute } from '../../../node_modules/@angular/router';
>>>>>>> a8e61ecb94c7fded5e8477e45e836e53696fd21c

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

<<<<<<< HEAD
  curso: string
parametros: any
constructor(private ususarioService: UsuarioService, private activatedRoute: ActivatedRoute) {
=======
	curso: string
  parametros: any
  constructor(private ususarioService: UsuarioService, private activatedRoute: ActivatedRoute) {
  
    this.parametros = this.activatedRoute.params.subscribe(params =>{

      this.curso = params.curso


    })



    this.ususarioService.getAlumnos(this.curso).then((res)=>{

    	console.log(res.json())

    })
   }
>>>>>>> a8e61ecb94c7fded5e8477e45e836e53696fd21c

 this.parametros = this.activatedRoute.params.subscribe(params =>{

   this.curso = params.curso


 })



 this.ususarioService.getAlumnos(this.curso).then((res)=>{

     console.log(res.json())

 })
}

ngOnInit() {
}

}