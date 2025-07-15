import { TestBed } from '@angular/core/testing';

import { NgGenUiComponentsService } from './ng-gen-ui-components.service';

describe('NgGenUiComponentsService', () => {
  let service: NgGenUiComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgGenUiComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
