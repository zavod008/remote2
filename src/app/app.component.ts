import {TuiDialogService, TuiRoot} from "@taiga-ui/core";
import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'remote2';
  private readonly dialogs = inject(TuiDialogService);

  ngOnInit() {
    this.dialogs.open('Hello!').subscribe();
  }
}
