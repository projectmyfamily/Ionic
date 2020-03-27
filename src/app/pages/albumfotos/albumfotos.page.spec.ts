import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlbumfotosPage } from './albumfotos.page';

describe('AlbumfotosPage', () => {
  let component: AlbumfotosPage;
  let fixture: ComponentFixture<AlbumfotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumfotosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumfotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
