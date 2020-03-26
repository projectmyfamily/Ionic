import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalajudaPage } from './modalajuda.page';

describe('ModalajudaPage', () => {
  let component: ModalajudaPage;
  let fixture: ComponentFixture<ModalajudaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalajudaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalajudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
