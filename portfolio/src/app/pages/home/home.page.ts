import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, AnimationController } from '@ionic/angular';
import { FooterComponent } from "src/app/components/footer/footer.component";
import { ProjectCardComponent } from "src/app/components/project-card/project-card.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, FooterComponent, ProjectCardComponent]
})
export class HomePage implements AfterViewInit {

  // Seleciona todos os elementos marcados com #fadeEl no HTML
  @ViewChildren('fadeEl', { read: ElementRef }) fadeElements!: QueryList<ElementRef>;

  constructor(private animationCtrl: AnimationController) { }

  ngAfterViewInit() {
    this.fadeElements.forEach(el => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Fade-in
            this.animationCtrl
              .create()
              .addElement(el.nativeElement)
              .duration(800)
              .easing('ease-out')
              .fromTo('opacity', '0', '1')
              .fromTo('transform', 'translateY(20px)', 'translateY(0)')
              .play();
          } else {
            // Fade-out
            this.animationCtrl
              .create()
              .addElement(el.nativeElement)
              .duration(600)
              .easing('ease-in')
              .fromTo('opacity', '1', '0')
              .fromTo('transform', 'translateY(0)', 'translateY(20px)')
              .play();
          }
        });
      }, { threshold: 0.1 });

      observer.observe(el.nativeElement);
    });
  }

  //* ===== Rotacionar imagem ao rolar a página ===== *//
  onScroll(event: any) {
    const scrollTop = event.detail.scrollTop;
    const maxScroll = 200;
    const rotation = Math.max(0, 10 - (scrollTop / maxScroll) * 10);

    const img = document.getElementById('profile-pic') as HTMLElement;
    if (img) {
      img.style.transform = `rotate(${rotation}deg)`;
    }
  }
  //* ===== Rotacionar imagem ao rolar a página ===== *//

  //* ===== Dados dos cards dos projetos ===== *//
  projects = [
    {
      image: '../../assets/images/project-images/ducklingBot.jpeg',
      title: '🐣Duckling Bot',
      description: 'Um bot para servidores Discord, que mostra os jogos que estão gratuitos na Steam e Epic Games Store.',
      technologies: ['Node.js', 'Discord.js', 'JavaScript'],
      repoLink: 'https://github.com/vinimagod/promoDucklingBot'
    },
    {
      image: 'assets/images/project-images/ducklingBot.jpeg',
      title: 'Duckling Bot',
      description: 'Um bot multifuncional para servidores Discord, oferecendo moderação, jogos, e integração com APIs externas.',
      technologies: ['Node.js', 'Discord.js', 'MongoDB', 'APIs REST'],
      repoLink: 'https://github.com/vinimagod/promoDucklingBot'
    }
  ];
  //* ===== Dados dos cards dos projetos ===== *//
}