import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotSoSimpleComponentComponent } from './not-so-simple-component.component';
import { By } from '@angular/platform-browser';

describe('NotSoSimpleComponentComponent', () => {
  let fixture: ComponentFixture<NotSoSimpleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotSoSimpleComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotSoSimpleComponentComponent);
    fixture.detectChanges();
  });

  it("button's label should be equal to Label Input", () => {
    fixture.componentInstance.label = 'fake-label'; // @Input
    fixture.detectChanges();
    const buttonText = fixture.nativeElement.querySelector('[data-testid=button]')?.textContent.trim();
    expect(buttonText).toEqual('fake-label');
  });

  it("click event should be emitted when the button is clicked", () => {
    const myEventSpy = jasmine.createSpy('myEvent');
    fixture.componentInstance.myEventEmitter.subscribe(myEventSpy)
    fixture.debugElement.query(By.css('[data-testid=button]')).triggerEventHandler('click');
    expect(myEventSpy).toHaveBeenCalled();
  });
});
