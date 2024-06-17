import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuscaComponent } from './form-busca.component';
import { CardComponent } from '../card/card.component';


describe('FormBuscaComponent', () => {
  let component: FormBuscaComponent;
  let fixture: ComponentFixture<FormBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormBuscaComponent,
        CardComponent
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
