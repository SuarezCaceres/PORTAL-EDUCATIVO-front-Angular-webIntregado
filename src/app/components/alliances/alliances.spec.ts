import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alliances } from './alliances';

describe('Alliances', () => {
  let component: Alliances;
  let fixture: ComponentFixture<Alliances>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alliances]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alliances);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
