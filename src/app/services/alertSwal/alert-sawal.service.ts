import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertSawalService {

  questionOne = ['1', '2', '3'];
  questionTwo = [];
  questionThree = [];

  constructor(private toast: ToastController) { }

  async messageStep(question: number) {
    let message: string;
    let clue = Math.floor(Math.random() * 3);
    if (question == 0) {
      message = this.questionOne[clue];
    }else if(question == 1){
      message = this.questionTwo[clue];
    }else{
      message = this.questionThree[clue];
    }
    const toast = await this.toast.create({
        message: message,
        position: 'middle',
        color: 'info', 
        buttons: [
          {
            text: 'Done',
            role: 'cancel',
          }
        ]

    });
    toast.present();
  }

  async errorMessage(message: string) {
    const toast = await this.toast.create({
        message: message,
        duration: 6000,
        position: 'bottom',
        color: 'danger'
    });
    toast.present();
  }

}



