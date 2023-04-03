import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heavy-duty',
  templateUrl: './heavy-duty.component.html',
  styleUrls: ['./heavy-duty.component.scss']
})
export class HeavyDutyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openPdf() {
    window.open('../../../../assets/images/offerImg/heavyDuty/70DF-718.07Rev.6_web.pdf', '_blank');
  }

  openPdfElectric() {
    window.open('../../../../assets/images/offerImg/heavyDuty/110130160D-7E20.05Rev.11_web.pdf', '_blank');
  }

  openPdfA() {
    window.open('../../../../assets/images/offerImg/heavyDuty/110130160D-7E20.05Rev.11_web.pdf', '_blank');
  }

  openPdfB() {
    window.open('../../../../assets/images/offerImg/heavyDuty/180D-7E18.07Rev.8_web (1).pdf', '_blank');
  }

  openPdfD() {
    window.open('../../../../assets/images/offerImg/heavyDuty/250D-7E20.06Rev.9_web.pdf', '_blank');
  }
}
