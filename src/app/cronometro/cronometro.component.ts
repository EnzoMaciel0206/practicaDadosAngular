import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent {
  segundo : number = 0;
  @Input() inicio : number = 0;

  @Output() multiplo10 = new EventEmitter();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.segundo=this.inicio;
    setInterval(() => {
      this.segundo ++;
      if(this.segundo % 10 == 0)
        this.multiplo10.emit(this.segundo);
    }, 1000);
  }

}
