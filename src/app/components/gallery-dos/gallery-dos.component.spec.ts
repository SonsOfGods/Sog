import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryDosComponent } from './gallery-dos.component';

describe('GalleryDosComponent', () => {
  let component: GalleryDosComponent;
  let fixture: ComponentFixture<GalleryDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
