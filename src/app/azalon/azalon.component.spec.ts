import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzalonComponent } from './azalon.component';

describe('AzalonComponent', () => {
  let component: AzalonComponent;
  let fixture: ComponentFixture<AzalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AzalonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});