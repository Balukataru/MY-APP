import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
})
export class TextAreaComponent {
  text: string = '';
  textToNumber: number = 0;
 @Input() max: number = 0;

  onTextChange(event: any) {
    this.textToNumber = this.text.length;
    if (this.textToNumber == this.max) {
      alert('Exceeded maximum limit');
    }
  }
}
