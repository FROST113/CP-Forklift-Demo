import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-forklifts',
  templateUrl: './new-forklifts.component.html',
  styleUrls: ['./new-forklifts.component.scss']
})
export class NewForkliftsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  openPdf() {
    window.open('../../../assets/images/offerImg/newForklifts/20_25_30_35DL-7SA18.07Rev.3_web_2.pdf', '_blank');
  }

  openPdfElectric() {
    window.open('../../../assets/images/offerImg/newForklifts/25_30_35B-7A20.01Rev.2_eng_web.pdf', '_blank');
  }
}
