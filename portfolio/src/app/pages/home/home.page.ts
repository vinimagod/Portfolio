import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from "src/app/components/footer/footer.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, FooterComponent]
})
export class HomePage {

    onScroll(event: any) {
    const scrollTop = event.detail.scrollTop;
    const maxScroll = 200;
    const rotation = Math.max(0, 10 - (scrollTop / maxScroll) * 10);

    const img = document.getElementById('profile-pic') as HTMLElement;
    if (img) {
      img.style.transform = `rotate(${rotation}deg)`;
    }
  }
}
