import { resolve } from 'node:path';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, of, from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'angular-observables';

  @ViewChild('createbtn')
  createBtn: ElementRef;

  createBtnObs;

  buttonClicked() {
    let count = 0;
    // will be returned as observable
    // using fromEvent we created observable from the 'click event'
    this.createBtnObs = fromEvent(
      this.createBtn.nativeElement,
      'click'
    ).subscribe((data) => {
      console.log(data);
      this.showItem(++count);
    });
  }

  ngAfterViewInit() {
    this.buttonClicked();
  }

  showItem(val) {
    let div = document.createElement('div');
    div.innerText = 'Item' + val;
    div.className = 'data-list';
    document.getElementById('container').appendChild(div);
  }
}
