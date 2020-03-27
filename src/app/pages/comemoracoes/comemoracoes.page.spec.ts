import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComemoracoesPage } from './comemoracoes.page';

describe('ComemoracoesPage', () => {
  let component: ComemoracoesPage;
  let fixture: ComponentFixture<ComemoracoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComemoracoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComemoracoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
