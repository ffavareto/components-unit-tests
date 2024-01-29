import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleComponentComponent } from './simple-component.component';

describe('SimpleComponentComponent', () => {
  let component: SimpleComponentComponent;
  let fixture: ComponentFixture<SimpleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('the title property should be the correct value', () => {
    fixture.detectChanges();

    expect(component.title)
      .withContext('title should be equal to "Simple Component"') // isso é só pra dar um contexto em caso de quebra 
      .toEqual('Simple Component');

    const nativeElementText = fixture.nativeElement.querySelector('[data-testid=title]')?.textContent;
    expect(nativeElementText).toEqual('Simple Component');
  });
});
