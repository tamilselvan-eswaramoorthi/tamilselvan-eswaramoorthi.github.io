import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItem } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
  @Output() pageChanged = new EventEmitter<string>();
  
  activeLink: string = 'About';

  navItems: NavItem[] = [
    { name: 'About', active: true },
    { name: 'Resume', active: false },
    { name: 'Portfolio', active: false },
    { name: 'Blog', active: false },
    { name: 'Contact', active: false }
  ];

  setActive(itemName: string) {
    this.activeLink = itemName;
    this.navItems.forEach(item => {
      item.active = item.name === itemName;
    });
    this.pageChanged.emit(itemName);
  }
}