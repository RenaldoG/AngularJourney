import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-step-indicator',
  templateUrl: './step-indicator.component.html',
  styleUrls: ['./step-indicator.component.css']
})
export class StepIndicatorComponent implements OnInit {
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
  }
}