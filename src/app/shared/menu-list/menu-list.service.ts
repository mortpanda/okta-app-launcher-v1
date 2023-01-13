import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimeIcons } from 'primeng/api';
import { OktaSDKAuthService } from '../okta/okta-auth.service';
import { OktaConfigService } from '../okta/okta-config.service';
@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  constructor(
    private OktaSDKAuthService: OktaSDKAuthService,
    private OktaConfigService: OktaConfigService,
  ) { }

  mainAppMenu = [
    {
      label: "Daily Apps",
      strUri: '/dailysites',
    },
    {
      label: "Admin Dashboard",
      strUri: '/admin'
    },
    {
      label: "User Dashboard",
      strUri: '/user'
    },
    {
      label: "Okta Sites",
      strUri: '/oktasites'
    },
    {
      label: "OIE Projects",
      strUri: '/myoieapps'
    },
    {
      label: "Personal Projects",
      tooltipPosition: "top",
      strUri: '/personalapps'
    },
    {
      label: "Bookmarks",
      strUri: '/bookmarks'
    },
    {
      label: "World Time",
      strUri: '/worldtime'
    },
    {
      label: "Configuration",
      strUri: '/config'
    },

  ]

  dockMenu = [
    {
      tooltipOptions: {
        tooltipLabel: "Home",
        tooltipPosition: "top",
      },
      icon: "pi pi-home",
      command: () => {
        this.GoHome();
      }
    },
    {
      tooltipOptions: {
        tooltipLabel: "Main Menu",
        tooltipPosition: "top",
      },
      icon: "pi pi-bars",
      routerLink: '/menu',
    },
    {
      tooltipOptions: {
        tooltipLabel: "Logout",
        tooltipPosition: "top",
      },
      icon: "pi pi-power-off",
      command: () => {
        this.Logout();
      }
    },
  ]

  mainDockItems = [
    {
      tooltipOptions: {
        tooltipLabel: "Main Menu",
        tooltipPosition: "right",
      },
      icon: "pi pi-bars",
      style: 'font-size: 2rem;',
      routerLink: '/start',
    },

    {
      tooltipOptions: {
        tooltipLabel: "Home",
        tooltipPosition: "right",
      },
      icon: "pi pi-home",
      style: 'font-size: 2rem;',
      command: () => {
        this.GoHome();
      }
    },

    {
      tooltipOptions: {
        tooltipLabel: "Logout",
        tooltipPosition: "right",
      },
      icon: "pi pi-power-off",
      style: 'font-size: 2rem;',
      command: () => {
        this.Logout();
      }
    },
  ]

  configMenu = [
    {
      label: "Add Website",
      modalOpen: 'addWebsite',
    },
    {
      label: "Clear Cache",
      modalOpen: 'clearCache',
    },
  ]


  async Goto(url) {
    await window.open(url, '_blank');
  }

  async Logout() {
    this.OktaSDKAuthService.OktaSDKAuthClient.signOut();
  }

  async GoHome() {
    window.location.replace(this.OktaConfigService.strPostLogoutURL);
  }

  addWebsiteMenu = [
    {
      name: "Daily Websites"
    },
    {
      name: "Admin Dashboards"
    },
    {
      name: "User Dashboards"
    },
    {
      name: "Okta Websites"
    },
    {
      name: "My OIE Project Apps"
    },
    {
      name: "My Personal Apps"
    },
    {
      name: "Wiki"
    },
    {
      name: "Dev"
    },
    {
      name: "Work_others"
    },
    {
      name: "Others"
    },
  ]

}
