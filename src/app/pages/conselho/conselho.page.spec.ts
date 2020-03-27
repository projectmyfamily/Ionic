import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConselhoPage } from './conselho.page';

describe('ConselhoPage', () => {
  let component: ConselhoPage;
  let fixture: ComponentFixture<ConselhoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConselhoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConselhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
