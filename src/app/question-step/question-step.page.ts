import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertSawalService } from '../services/alertSwal/alert-sawal.service';

@Component({
  selector: 'app-question-step',
  templateUrl: './question-step.page.html',
  styleUrls: ['./question-step.page.scss'],
})
export class QuestionStepPage implements OnInit {

  title: string = 'Pregunta N°1';
  step: number = 0;
  formSteps: FormGroup; 
  response: object = [
    {
      'input':  "questionOne", 
      'question': '¿Cual fue la primera pelicula que vimos en cine?',
      'response': 'la mujer maravilla'
    }, 
    {
      'input':  "questionTwo", 
      'question': '¿fecha que viniste a mi casa? (MM/DD/AA)',
      'response': '12/31/2021'
    }, 
    {
      'input':  "questionThree", 
      'question': '¿Lugar donde nos dimos nuestro primer beso?',
      'response': 'un pasillo'
    }, 

  ];
  _message: string;
  constructor(
    private formBuilder: FormBuilder,
    private alert: AlertSawalService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(){
    this.formSteps = this.formBuilder.group({
			questionOne: [''],
      questionTwo: [''],
      questionThree: [''],
		})
  }

  validateStep(){
    if (this.formSteps.controls[this.response[this.step].input].value == '') {
      this._message = 'Por favor valide todos los campos requeridos para continuar copn la experiencia.';
      this.alert.errorMessage(this._message); 
      return
    }
    
    if (this.formSteps.controls[this.response[this.step].input].value.toLowerCase() == this.response[this.step].response ) {
      if (this.step < 2) {
        this.step++;
      }else{
        alert('fn');
      }
    }else{
      this.alert.messageStep(this.step);
    }
    

  }

}
