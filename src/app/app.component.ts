import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica03';
  mensaje : string = "";

  valor1 : number = 0;
  valor2 : number = 0;
  valor3 : number = 0;
  resultado : string = "";

  numAleatorios(){
    return Math.trunc(Math.random() * 6)+1;
  }

  constructor(){
    this.valor1=this.numAleatorios();
    this.valor2=this.numAleatorios();
    this.valor3=this.numAleatorios();
  }

  tirar(){
    this.valor1=this.numAleatorios();
    this.valor2=this.numAleatorios();
    this.valor3=this.numAleatorios();

    this.resultado = this.valor1==this.valor2 && this.valor2==this.valor3 ? "Ganó" : "Perdió";
  }

  actualizar(tiempo : number){
    this.mensaje=tiempo+"(se actualiza cada 10 segundos)";
  }

}
