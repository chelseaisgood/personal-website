import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { SKILLS } from '../mock-skills';

@Injectable()
export class SkillsService {

  constructor() { }

  getSkills(): Skill[] {
    return SKILLS;
  }
}
