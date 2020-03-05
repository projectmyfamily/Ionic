import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddmembroPage } from './addmembro.page';

describe('AddmembroPage', () => {
  let component: AddmembroPage;
  let fixture: ComponentFixture<AddmembroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmembroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddmembroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
