import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricianListComponent } from './electrician-list.component';

describe('ElectricianListComponent', () => {
  let component: ElectricianListComponent;
  let fixture: ComponentFixture<ElectricianListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectricianListComponent]
    });
    fixture = TestBed.createComponent(ElectricianListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
