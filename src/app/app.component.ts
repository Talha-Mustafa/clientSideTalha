import { Component,ViewChild, OnInit } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OLX';
  public modalRef: BsModalRef; // {1}
  constructor(private modalService: BsModalService){}
  ngOnInit(){}

    public openModal(template: HTMLInputElement) {
    this.modalRef = this.modalService.show(template); // {3}
  }
}
