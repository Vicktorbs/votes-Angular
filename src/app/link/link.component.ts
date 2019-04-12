import { Component, OnInit, Input } from '@angular/core';
import { Link } from './link.model';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  // Recive los datos desde app.component.html del ciclo for
  // Uso de un decorador
  @Input() link: Link;

  constructor() {  }

  ngOnInit() {
  }

}
