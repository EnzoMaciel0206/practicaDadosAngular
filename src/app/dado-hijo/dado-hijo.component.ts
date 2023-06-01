import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dado-hijo',
  templateUrl: './dado-hijo.component.html',
  styleUrls: ['./dado-hijo.component.css']
})
export class DadoHijoComponent {
  @Input() valor : string = "";

}
