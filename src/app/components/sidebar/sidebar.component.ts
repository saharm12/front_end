import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Exposants',  icon: 'group', class: '' },
    { path: '/table-list', title: 'Participants',  icon:'people', class: '' },
    { path: '/candidats', title: 'Candidats',  icon:'group', class: '' },
    {path: '/jury', title: 'Jurys', icon:'group' , class:''},
    {path: '/speaker', title: 'Speakers', icon:'record_voice_over' , class:''},
   {path: '/laureat', title: 'Lauréats', icon:'grade' , class:''},
   { path: '/programme', title: 'Programme',  icon:'grade', class: '' },
   {path: '/Document', title: 'document',  icon:'grade', class: '' },
   {path: '/enquete', title: 'enquete',  icon:'grade', class: '' },
      {path: '/categorie', title: 'Sponsors et partenaires',  icon:'grade', class: '' },

    //{ path: '/user-profile', title: 'Mon Compte',  icon:'person', class: '' },

   

/*     { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
 */
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
