import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSideComponent } from './profil-side.component';

describe('ProfilSideComponent', () => {
  let component: ProfilSideComponent;
  let fixture: ComponentFixture<ProfilSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilSideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
