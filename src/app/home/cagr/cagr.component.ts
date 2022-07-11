import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cagr',
  templateUrl: './cagr.component.html',
  styleUrls: ['./cagr.component.scss'],
})
export class CagrComponent implements OnInit {

  cagr:any;
  investedAmount:any;
  maturityAmount:any;
  wealthGained:any;
  absReturn:any;

  cagrCalcForm = new FormGroup({
    totalInvestment: new FormControl(''),
    finalValue: new FormControl(''),
    duration: new FormControl('')
  });

  constructor() { }

  ngOnInit() {}

  cagrCalc(){
    let ti = parseInt(this.cagrCalcForm.value.totalInvestment);
    let fv = parseInt(this.cagrCalcForm.value.finalValue);
    let d = parseInt(this.cagrCalcForm.value.duration);

    this.cagr = ( (Math.pow((fv/ti), 1/d) - 1) * 100 ).toFixed(2);
    this.investedAmount = ti;
    this.maturityAmount = fv;

  }

}
