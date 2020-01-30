import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhotosListPage } from './photos-list.page';

describe('PhotosListPage', () => {
  let component: PhotosListPage;
  let fixture: ComponentFixture<PhotosListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotosListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
