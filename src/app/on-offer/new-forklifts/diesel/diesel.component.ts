import { Component } from '@angular/core';

@Component({
  selector: 'app-diesel',
  templateUrl: './diesel.component.html',
  styleUrls: ['./diesel.component.scss']
})
export class DieselComponent {
  openPdf() {
    window.open('../../../assets/images/offerImg/newForklifts/20_25_30_35DL-7SA18.07Rev.3_web_2.pdf', '_blank');
  }

  openPdfNew() {
    window.open('../../../assets/images/offerImg/newForklifts/25-30-35DE-LE 7.pdf', '_blank');
  }
}
