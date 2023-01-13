import { Component, OnInit } from '@angular/core';
import { OktaGetTokenService } from '../shared/okta/okta-get-token.service';
import { ViewEncapsulation } from '@angular/core';
import { OktaSDKAuthService } from '../shared/okta/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js'
import { OktaConfigService } from "../shared/okta/okta-config.service";
import { OktaWidgetService } from '../shared/okta/okta-widget.service';
import { MenuListService } from '../shared/menu-list/menu-list.service';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {
  smallScreen: boolean;
  public authService = new OktaAuth(this.OktaSDKAuthService.config);
  strUserSession;
  strThisUser;
  strFullName;
  mainAppMenu = [];
  selectedMessage: any;
  myAccessToken;
  constructor(
    private OktaGetTokenService: OktaGetTokenService,
    private OktaSDKAuthService: OktaSDKAuthService,
    private OktaConfigService: OktaConfigService,
    private OktaWidgetService: OktaWidgetService,
    private MenuListService: MenuListService,
    private primengConfig: PrimeNGConfig,
  ) { }

   async ngOnInit() {
    // this.strUserSession = await this.authService.isAuthenticated();
    // switch (this.strUserSession == true) {
    //   case false: {
    //     window.location.replace(this.OktaConfigService.strPostLogoutURL);
    //     break;
    //   }
    //   case true: {
    //     this.strThisUser = await this.authService.token.getUserInfo()
    //       .then(function (user) {
    //         return user
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //         window.location.replace(this.OktaConfigService.strPostLogoutURL);
    //       })
    //       this.strFullName = await this.strThisUser.name;
    //       this.myAccessToken = await this.OktaGetTokenService.GetAccessToken()
    //     break;
    //   }
    // }
  }
}
