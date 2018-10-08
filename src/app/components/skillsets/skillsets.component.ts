import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill';

import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skillsets',
  templateUrl: './skillsets.component.html',
  styleUrls: ['./skillsets.component.css']
})
export class SkillsetsComponent implements OnInit {

  allSkills: Skill[] = [];
  filteredSkills: Skill[] = [];

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.getSkills();
    this.getSkillsSorted();
  }

  getSkills(): void {
    this.filteredSkills = this.allSkills = this.skillsService.getSkills();
  }

  getSkillsSorted(): void {
    if (this.filteredSkills === null || this.filteredSkills.length === 0) {
      return;
    }
    this.filteredSkills.sort((skill1, skill2) => {
      const skill1ProficientLevel = skill1.proficientLevel;
      const skill2ProficientLevel = skill2.proficientLevel;
      if (skill1ProficientLevel !== skill2ProficientLevel) {
        return skill2ProficientLevel - skill1ProficientLevel;
      }

      const skill1Name = skill1.name;
      const skill2Name = skill2.name;
      const nameCompareResult = skill1Name.localeCompare(skill2Name);
      if (nameCompareResult !== 0) {
        return nameCompareResult;
      }
      const skill1Id1 = skill1.id;
      const skill2Id2 = skill2.id;
      return skill1Id1 - skill2Id2;
    });
  }

  onChangeSelectedArea(areas: Set<string>) {
    this.filteredSkills = this.allSkills.filter(
      eachSkill => eachSkill.type.filter(eachType => areas.has(eachType)).length >= 1
    );
  }
}
