import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "./components/header/header.component";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent],
})
export class AppComponent {
  constructor() {}
}
