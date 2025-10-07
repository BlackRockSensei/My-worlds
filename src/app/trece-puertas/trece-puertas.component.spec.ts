import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrecePuertasComponent } from './trece-puertas.component';

describe('TrecePuertasComponent', () => {
  let component: TrecePuertasComponent;
  let fixture: ComponentFixture<TrecePuertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrecePuertasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrecePuertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
