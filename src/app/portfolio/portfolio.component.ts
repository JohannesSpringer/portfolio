import { Component, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
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
      img: "",
      techStack: 'HTML | CSS',
      github: "",
      prjLink: "",
      descripption: "",
      hovered: false
    }
  ];

  constructor(private sharedService: SharedService) {}

  openLink(link: string) {
    this.sharedService.openLink(link);
  }
}
