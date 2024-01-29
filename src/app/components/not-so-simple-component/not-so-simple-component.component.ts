import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-not-so-simple-component',
  standalone: true,
  imports: [],
  templateUrl: './not-so-simple-component.component.html',
  styleUrl: './not-so-simple-component.component.scss'
})
export class NotSoSimpleComponentComponent {
  @Input({ required: true }) label: string = '';
  @Output('myEvent') myEventEmitter = new EventEmitter();

  onClick() {
    this.myEventEmitter.emit();
  }
}
