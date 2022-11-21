import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioscuboComponent } from './comentarioscubo.component';

describe('ComentarioscuboComponent', () => {
  let component: ComentarioscuboComponent;
  let fixture: ComponentFixture<ComentarioscuboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioscuboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentarioscuboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
