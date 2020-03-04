import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiscricaotarefasPage } from './discricaotarefas.page';

describe('DiscricaotarefasPage', () => {
  let component: DiscricaotarefasPage;
  let fixture: ComponentFixture<DiscricaotarefasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscricaotarefasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiscricaotarefasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
