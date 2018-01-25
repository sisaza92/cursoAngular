import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ServiciocarpetaService } from './services/serviciocarpeta.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mundo';
  nombre = 'Cristian';
  variable = true;

  // declaración de formularios
  personForm: FormGroup;
  formService: FormGroup;

  // Declaración del objeto user para almacenar los datos del servicio
  user: any = {
    name: 'Alberto',
    last: 'Plazas',
    age: 23
  }
  // Arreglo usado para el ejemplo del ngFor
  miArreglo: any[] = [
    {name: "juan", last: "juarez"},
    {name: "pedro", last: "perez"},
    {name: "maria", last: "martinez"}
  ];
  miArreglo2: any[] = [
    "juan","maria","pedro"
  ];

  // inyección de dependencias en el constructor e inicialización de formularios
  constructor(private fb: FormBuilder, private serv: ServiciocarpetaService) {
    this.initForms();
  }

  // Método que inicializa los formularios y les asigna los validadores a cada campo
  initForms(): void {
    this.personForm = this.fb.group({
        name: ['', Validators.required],
        last: ['', Validators.required],
        age: ['', [Validators.required,Validators.max(100)]]
      });

    this.formService = this.fb.group({
        userId: ['', Validators.required],
        id: ['', Validators.required],
        title: ['', [Validators.required,Validators.max(100)]]
      });
  } 

  // método que ejecuta el submit del formulario personForm
  onSubmit() {
    console.log(this.personForm.value);
  }

  // método que ejecuta el submit del formulario formsService, 
  // llama al servicio y decide que hacer 
  // si la respuesta es ok o error
  onSubmitPost() {
    this.serv.sendPost(this.formService.value).subscribe(
      (response) => {
        console.log("Satisfactorio");
      },
      (error) => {
        console.log("Error");
      },
      () => {
        console.log("Completó");
        console.log(this.formService.value);
      }
    )
  }

  // método que carga datos en el formulario personForm
  fillForm(){
    this.personForm.get('name').setValue(this.user.name);
    this.personForm.get('last').setValue(this.user.last);
    this.personForm.get('age').setValue(this.user.age);
  }

  changeVariable() {
    this.variable = !this.variable;
  }

}
