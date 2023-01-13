import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {MenuListService} from '../menu-list/menu-list.service';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss'],
  encapsulation: ViewEncapsulation.None
  
})
export class DockComponent implements OnInit {
  toolbarItems: MenuItem[];
  constructor(
    private MenuListService:MenuListService,
  ) {

    this.toolbarItems = this.MenuListService.dockMenu;
   }

  ngOnInit(): void {
  }

}
