import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-democomponent',
  templateUrl: './democomponent.component.html',
  styleUrls: ['./democomponent.component.css']
})
export class DemocomponentComponent implements OnInit {
  
  @Input() componentName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
