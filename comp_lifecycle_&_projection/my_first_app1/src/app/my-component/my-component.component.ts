import {
  Component,
  OnChanges,
  Input,
  OnInit,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Student } from '../../model/student';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponentComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit
{
  @Input() myValue: number = 0;
  @Input() student?: Student;

  ngOnInit() {
    console.log('ngOnInit', this.myValue);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', this.myValue);
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  @ViewChild('myDiv') myDiv!: ElementRef;

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.myDiv.nativeElement.innerHTML);
  }
}
