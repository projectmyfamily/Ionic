import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoricotarefasPage } from './historicotarefas.page';

describe('HistoricotarefasPage', () => {
  let component: HistoricotarefasPage;
  let fixture: ComponentFixture<HistoricotarefasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricotarefasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoricotarefasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
