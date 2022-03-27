import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertSawalService {

  questionOne = [];
  questionTwo = [];
  questionthree = [];

  constructor(private toast: ToastController) { }

  async messageStep(question: number, clue: number) {
    let message = 'hola';
    const toast = await this.toast.create({
        message: message,
        duration: 6000,
        position: 'top',
        color: 'warning'
    });
    toast.present();
  }
}



