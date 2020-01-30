import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewPhotoPage } from './new-photo.page';

describe('NewPhotoPage', () => {
  let component: NewPhotoPage;
  let fixture: ComponentFixture<NewPhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPhotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewPhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
