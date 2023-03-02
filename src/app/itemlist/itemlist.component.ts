import { Component, OnInit, Input } from '@angular/core';
import {Annonce} from "../services/data.service";

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss'],
})
export class ItemlistComponent implements OnInit {

  @Input() annonce?: Annonce;

  constructor() { }

  ngOnInit() {}

}
