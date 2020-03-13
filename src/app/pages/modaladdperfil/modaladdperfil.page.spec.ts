import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModaladdperfilPage } from './modaladdperfil.page';

describe('ModaladdperfilPage', () => {
  let component: ModaladdperfilPage;
  let fixture: ComponentFixture<ModaladdperfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaladdperfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModaladdperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
