import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { EerPage } from './eer.page';

describe('EerPage', () => {
  let component: EerPage;
  let fixture: ComponentFixture<EerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EerPage ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        FormsModule,
        IonicModule,
        RouterTestingModule,
        TranslateModule.forRoot()
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});