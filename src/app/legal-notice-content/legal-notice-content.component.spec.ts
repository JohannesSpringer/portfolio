import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNoticeContentComponent } from './legal-notice-content.component';

describe('LegalNoticeContentComponent', () => {
  let component: LegalNoticeContentComponent;
  let fixture: ComponentFixture<LegalNoticeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalNoticeContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalNoticeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});