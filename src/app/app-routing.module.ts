import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  { path: "calculator", component: CalculatorComponent }//,
  // { path: "", redirectTo: "/calculator", pathMatch: "full" }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
