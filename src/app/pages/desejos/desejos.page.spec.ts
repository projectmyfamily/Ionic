import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesejosPage } from './desejos.page';

describe('DesejosPage', () => {
  let component: DesejosPage;
  let fixture: ComponentFixture<DesejosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesejosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesejosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
