import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})

export class LoginModalComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open1() {
    this.modalService.open(LoginModalComponent);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

// export class NgbdModalStacked {
//   constructor(private modalService: NgbModal) { }

//   open() {
//     this.modalService.open(LoginModalComponent);
//   }
// }

// export class NgbdModal1Content {
//   constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

//   open() {
//     this.modalService.open(NgbdModal2Content, {
//       size: 'lg'
//     });
//   }
// }
// export class NgbdModal2Content {
//   constructor(public activeModal: NgbActiveModal) { }
// }
