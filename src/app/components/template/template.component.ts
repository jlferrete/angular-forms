import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styles: []
})
export class TemplateComponent {
  constructor() {}

  usuario: Object = {
    nombre: "Jose Luis",
    apellido: "Ferrete",
    email: "contacto@jlferrete.com"
  };

  guardar(forma: NgForm) {
    console.log("ngForm", forma);
    console.log("Valor forma", forma.value);

    console.log("Usuario", this.usuario);
  }
}
