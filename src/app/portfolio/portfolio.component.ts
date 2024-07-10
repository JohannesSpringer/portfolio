import { Component, HostListener, Input, inject } from '@angular/core';
import { SharedService } from '../shared.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { LanguageService } from '../language.service';

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
      descriptionDe: `Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, Zuweisung von Benutzer und Kategorien.`,
      descriptionEn: `Task manager inspired by the Kanban System. Create and organize tasks
        using drag and drop functions, assign users and categories.`,
      hovered: false
    },
    {
      name: "El Pollo Loco",
      img: "./assets/img/projects/el-pollo-loco.png",
      techStack: 'JavaScript | HTML | CSS',
      github: "https://github.com/JohannesSpringer/ElPolloLoco",
      prjLink: "https://johannes-springer.de/elpolloloco/",
      descriptionDe: "Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Münzen und Tabascoflaschen zu finden, um gegen das Killerhuhn zu kämpfen.",
      descriptionEn: "A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and tabasco bottles to fight against the killer chicken.",
      hovered: false
    }
  ];

  languageService = inject(LanguageService);

  deviceInfo: any;
  isMobile: boolean = false;

  constructor(private sharedService: SharedService, private deviceService: DeviceDetectorService) {
    this.checkDevice();
  }

  checkDevice() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();   
  }

  /**
   * Creating Listener for scroll event to check elements visibility in viewport
   * @param event 
   */
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {    
    this.checkElementPosition();
  }

  /**
   * Check visibility for all portfolio projects in viewport and show all information of visible project
   */
  checkElementPosition() {
    for (let i = 0; i < this.projects.length; i++) {
      const prj = this.projects[i];
      const element = document.getElementById('portfolio' + i);      
      if (element) {
        prj.hovered = this.elementIsVisible(element);
      }
    }
  }

  elementIsVisible(ele: HTMLElement) {
    return this.sharedService.elementIsVisible(ele);
  }

  openLink(link: string) {
    this.sharedService.openLink(link);
  }
}
