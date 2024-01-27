import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  @Input() projects = [
    {
      name: "Join",
      img: "",
      techStack: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      github: "",
      descripption: `Task manager inspired by the Kanban System. Create and organize tasks
        using drag and drop functions, assign users and categories.`
    },
    {
      name: "El Pollo Loco",
      img: "",
      techStack: ['HTML', 'CSS'],
      github: "",
      descripption: ""
    }
  ];
}
