import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill';

import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skillsets',
  templateUrl: './skillsets.component.html',
  styleUrls: ['./skillsets.component.css']
})
export class SkillsetsComponent implements OnInit {

  skills: Skill[] = [];

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills(): void {
    this.skills = this.skillsService.getSkills();
    console.log(this.skills);
  }
}
