import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmortalComponent } from './inmortal.component';

describe('InmortalComponent', () => {
  let component: InmortalComponent;
  let fixture: ComponentFixture<InmortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InmortalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
