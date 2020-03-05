import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddtarefasPage } from './addtarefas.page';

describe('AddtarefasPage', () => {
  let component: AddtarefasPage;
  let fixture: ComponentFixture<AddtarefasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtarefasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddtarefasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
