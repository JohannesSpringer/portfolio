import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {
  @Input() skills = [
    ['Angular', 'angular-icon'],
    ['Typescript', 'typescript-icon'],
    ['JavaScript', 'javascript-icon'],
    ['HTML', 'html-icon'],
    ['CSS', 'css-icon'],
    ['Firebase', 'firebase-icon'],
    ['Git', 'git-icon'],
    ['Rest-Api', 'api-icon'],
    ['Scrum', 'scrum-icon'],
    ['Material Design', 'material-design-icon'],
  ];

  ngOnInit() : void {

  }

}
