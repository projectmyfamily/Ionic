import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelecperfilPage } from './selecperfil.page';

describe('SelecperfilPage', () => {
  let component: SelecperfilPage;
  let fixture: ComponentFixture<SelecperfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecperfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelecperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
