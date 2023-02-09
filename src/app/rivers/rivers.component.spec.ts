import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiversComponent } from './rivers.component';

describe('RiversComponent', () => {
  let component: RiversComponent;
  let fixture: ComponentFixture<RiversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
