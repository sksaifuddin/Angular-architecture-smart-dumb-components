import { ButtonText } from './../../../Modules/all-products/models/all-products.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: ButtonText;
  constructor() { }

  ngOnInit() {
    console.log('button=', this.buttonText);
  }

}
