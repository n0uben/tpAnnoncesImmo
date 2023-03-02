import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Annonce, DataService} from "../services/data.service";

@Component({
  selector: 'app-view-annonce',
  templateUrl: './view-annonce.page.html',
  styleUrls: ['./view-annonce.page.scss'],
})
export class ViewAnnoncePage implements OnInit {

  public annonce!: Annonce;
  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.annonce = this.dataService.getAnnonceById(parseInt(id, 10));
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
