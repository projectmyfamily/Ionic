import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViajemPage } from './viajem.page';

describe('ViajemPage', () => {
  let component: ViajemPage;
  let fixture: ComponentFixture<ViajemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViajemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
