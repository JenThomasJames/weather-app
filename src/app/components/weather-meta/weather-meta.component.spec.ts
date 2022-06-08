import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherMetaComponent } from './weather-meta.component';

describe('WeatherMetaComponent', () => {
  let component: WeatherMetaComponent;
  let fixture: ComponentFixture<WeatherMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherMetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
