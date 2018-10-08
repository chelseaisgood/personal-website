import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillAreaSelectorComponent } from './skill-area-selector.component';

describe('SkillAreaSelectorComponent', () => {
  let component: SkillAreaSelectorComponent;
  let fixture: ComponentFixture<SkillAreaSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillAreaSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillAreaSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
