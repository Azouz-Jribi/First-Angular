import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Azouz App';
  version: string = 'V0.0.1'

  handelAzouzEvent(e)
  {
    console.log(e);
  }
}
