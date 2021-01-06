import {TestBed, ComponentFixture} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {ToPositiveNumberDirective} from './to-positive-number.directive';
import {By} from '@angular/platform-browser';


@Component({
  template: `
    <input appToPositiveNumber type='number' />
  `
})
class TestComponentWithToPositiveNumberDirective {}

describe('ToPositiveNumberDirective', () => {
  let component: TestComponentWithToPositiveNumberDirective;
  let fixture: ComponentFixture<TestComponentWithToPositiveNumberDirective>;
  let inputEl: DebugElement;
  let elInput: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToPositiveNumberDirective,
        TestComponentWithToPositiveNumberDirective
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(
      TestComponentWithToPositiveNumberDirective
    );
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
    elInput = inputEl.nativeElement;
    elInput.value = '';
    fixture.detectChanges();
  });

  it('Input value accept just numbers', () => {
    elInput.value += 'm';
    expect(elInput.value).toBe('');
    elInput.value += '7';
    expect(elInput.value).toBe('7');
    elInput.value += '2';
    expect(elInput.value).toBe('72');
  });
});
