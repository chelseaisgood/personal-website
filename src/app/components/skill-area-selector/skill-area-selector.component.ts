import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-skill-area-selector',
  templateUrl: './skill-area-selector.component.html',
  styleUrls: ['./skill-area-selector.component.css']
})
export class SkillAreaSelectorComponent implements OnInit {

  @Output() changeSelectedArea = new EventEmitter<Set<string>>();

  checkboxLabels: Object[] = [
    {
      index: 0,
      name: 'Programming Language',
      checked: true,
    },
    {
      index: 1,
      name: 'Front-end',
      checked: true,
    },
    {
      index: 2,
      name: 'Back-end',
      checked: true,
    },
    {
      index: 3,
      name: 'Mobile',
      checked: true,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onChangeCheckboxState(index: number, prevState: boolean): void {
    this.checkboxLabels.forEach((eachLabel) => {
      if (eachLabel['index'] === index) {
        eachLabel['checked'] = !eachLabel['checked'];
      }
    });
    this.changeSelectedAreaHandler();
  }

  changeSelectedAreaHandler(): void {
    const currentSelectedAreaSet: Set<string> = new Set();
    this.checkboxLabels.forEach((eachLabel) => {
      if (eachLabel['checked']) {
        currentSelectedAreaSet.add(eachLabel['name']);
      }
    });
    this.changeSelectedArea.emit(currentSelectedAreaSet);
  }
}
