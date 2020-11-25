import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChildTreePage } from './child-tree.page';

describe('ChildTreePage', () => {
  let component: ChildTreePage;
  let fixture: ComponentFixture<ChildTreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChildTreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
