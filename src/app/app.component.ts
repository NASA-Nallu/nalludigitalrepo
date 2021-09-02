import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemocomponentComponent } from './democomponent/democomponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  h3{
    color: dodgerblue;
  }
  `]
})
export class AppComponent {
  title = 'This is my first project';

  @ViewChild("myButton", {static: false}) myButton: ElementRef;

  ngAfterViewInit(){
    console.log("Hello", this.myButton.nativeElement);
  }
}
