import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CagrComponent } from './cagr/cagr.component';
import { HomePage } from './home.page';
import { LcComponent } from './lc/lc.component';
import { SipComponent } from './sip/sip.component';
import { SplComponent } from './spl/spl.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'sip',
    component: SipComponent,
  },
  {
    path: 'spl',
    component: SplComponent,
  },
  {
    path: 'lc',
    component: LcComponent,
  },
  {
    path: 'cagr',
    component: CagrComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
