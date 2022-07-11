import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lc',
  templateUrl: './lc.component.html',
  styleUrls: ['./lc.component.scss'],
})
export class LcComponent implements OnInit {

  matureAmount:any;
  investedAmount:any;
  wealthGained:any;
  absReturn:any;

  lcCalcForm = new FormGroup({
    amount: new FormControl(''),
    rate: new FormControl(''),
    tenure: new FormControl('')
  });

  constructor() { }

  ngOnInit() {}

  lcCalc(){
    let p = parseInt(this.lcCalcForm.value.amount);
    let r = parseInt(this.lcCalcForm.value.rate);
    let t = parseInt(this.lcCalcForm.value.tenure);

    this.matureAmount = ( p * Math.pow(( 1 + r/100), t)).toFixed(0);
    this.investedAmount = p;
    this.wealthGained = this.matureAmount - p;
    this.absReturn = (this.wealthGained * 100 / this.investedAmount).toFixed(0);
  }

}
