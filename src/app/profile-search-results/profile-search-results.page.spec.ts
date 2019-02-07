import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSearchResultsPage } from './profile-search-results.page';

describe('ProfileSearchResultsPage', () => {
  let component: ProfileSearchResultsPage;
  let fixture: ComponentFixture<ProfileSearchResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSearchResultsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSearchResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
