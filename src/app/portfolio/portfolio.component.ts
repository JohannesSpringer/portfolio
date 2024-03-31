import { Component, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [

  ]
})
export class PortfolioComponent {
  @Input() projects = [
    {
      name: "Join",
      img: "./assets/img/projects/join.png",
      techStack: 'Angular | TypeScript | HTML | CSS | Firebase',
      github: "https://github.com/JohannesSpringer/join",
      prjLink: "https://johannes-springer.de/join/",
      descripption: `Task manager inspired by the Kanban System. Create and organize tasks
        using drag and drop functions, assign users and categories.`,
      hovered: false
    },
    {
      name: "El Pollo Loco",
      img: "./assets/img/projects/el-pollo-loco.png",
      techStack: 'JavaScript | HTML | CSS',
      github: "https://github.com/JohannesSpringer/ElPolloLoco",
      prjLink: "https://johannes-springer.de/elpolloloco/",
      descripption: "A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and tabasco bottles to fight against the killer chicken.",
      hovered: false
    }
  ];

  constructor(private sharedService: SharedService) {}

  openLink(link: string) {
    this.sharedService.openLink(link);
  }
}
