import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionStepPageRoutingModule } from './question-step-routing.module';

import { QuestionStepPage } from './question-step.page';
import { CardQuestionsComponent } from "../components/card-questions/card-questions.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionStepPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [QuestionStepPage, CardQuestionsComponent]
})
export class QuestionStepPageModule {}
