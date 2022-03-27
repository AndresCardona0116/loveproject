import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionStepPage } from './question-step.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionStepPageRoutingModule {}
