import { CommonModule } from '@angular/common';
import { Component, OnInit, Input} from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  imports:[IonicModule,CommonModule],
})
export class ProjectCardComponent  implements OnInit {

  constructor() { }
  ngOnInit() {}

  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() technologies!: string[];
  @Input() repoLink!: string;

}
