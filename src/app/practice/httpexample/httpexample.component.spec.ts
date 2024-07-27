import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpexampleComponent } from './httpexample.component';

describe('HttpexampleComponent', () => {
  let component: HttpexampleComponent;
  let fixture: ComponentFixture<HttpexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HttpexampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
