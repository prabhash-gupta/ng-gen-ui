import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGenUiComponentsComponent } from './ng-gen-ui-components.component';

describe('NgGenUiComponentsComponent', () => {
  let component: NgGenUiComponentsComponent;
  let fixture: ComponentFixture<NgGenUiComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgGenUiComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgGenUiComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
