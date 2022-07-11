import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sip',
  templateUrl: './sip.component.html',
  styleUrls: ['./sip.component.scss'],
})
export class SipComponent implements OnInit {

  wealthGained:any;
  investedAmount:any;
  finalAmount:any;


  constructor() { }

  sipCalcForm = new FormGroup({
    period: new FormControl('Monthly'),
    investment: new FormControl(''),
    annualReturn: new FormControl(''),
    years: new FormControl('')
  });

  ngOnInit() {}

  sipCalc(){

    let period = this.sipCalcForm.value.period;
    //period in months
    let period_in_year:number;

    switch(period){
      case "Annually":
        period_in_year = 1;
        break;
      case "Semi-Annually":
        period_in_year = 2;
        break;
      case "Quarterly":
        period_in_year = 4;
        break;
      case "Monthly":
        period_in_year= 12;
        break;
    }

    //Amount invested through SIP.
    let p = parseInt(this.sipCalcForm.value.investment);
    
    let annualReturn  = this.sipCalcForm.value.annualReturn;
    //Compounded rate of return.
    let i = parseInt(annualReturn)/(100*period_in_year);

    let years  = this.sipCalcForm.value.years;
    //Investment duration in months.
    let n = parseInt(years) * 12;

    console.log("p="+p);
    console.log("i="+i);
    console.log("n="+ n);
    let finalAmount = p * (Math.pow((1+i),n) - 1) * ((1+i)/i);
    
    this.investedAmount = (p * period_in_year * parseInt(years)).toFixed(0); 

    this.finalAmount = finalAmount.toFixed(0);

    this.wealthGained = (this.finalAmount - this.investedAmount).toFixed(0);
    
  }

}
