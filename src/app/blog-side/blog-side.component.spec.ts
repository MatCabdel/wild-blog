import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSideComponent } from './blog-side.component';

describe('BlogSideComponent', () => {
  let component: BlogSideComponent;
  let fixture: ComponentFixture<BlogSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
