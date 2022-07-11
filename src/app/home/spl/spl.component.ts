import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-spl',
  templateUrl: './spl.component.html',
  styleUrls: ['./spl.component.scss'],
})
export class SplComponent implements OnInit {

  matureAmount:any;
  investedAmount:any;
  wealthGained:any;
  absReturn:any;

  splCalcForm = new FormGroup({
    purchaePrice: new FormControl(''),
    quantity: new FormControl(''),
    sellPrice: new FormControl('')
  });

  constructor() { }

  ngOnInit() {}

  splCalc(){
    let pp = parseInt(this.splCalcForm.value.purchaePrice);
    let q = parseInt(this.splCalcForm.value.quantity);
    let sp = parseInt(this.splCalcForm.value.sellPrice);

    this.matureAmount = sp * q;
    this.investedAmount = pp * q;
    
    this.wealthGained = this.matureAmount - this.investedAmount;
    
    this.absReturn = this.wealthGained * 100 / this.investedAmount;

  }
}
