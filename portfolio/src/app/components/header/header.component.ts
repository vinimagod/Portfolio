import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon],
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
