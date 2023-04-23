import {
  Component,
  OnInit,
  Inject,
  OnDestroy,
  TRANSLATIONS
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import {NgcCookieConsentService, NgcInitializeEvent, NgcNoCookieLawEvent, NgcStatusChangeEvent} from 'ngx-cookieconsent';
import { Subscription }   from 'rxjs/Subscription';
import { Meta } from '@angular/platform-browser';  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent implements OnInit, OnDestroy{
  title = 'Sons of Gods';

  isShowing = true;

  private popupOpenSubscription: Subscription = new Subscription;
  private popupCloseSubscription: Subscription = new Subscription;
  private initializeSubscription: Subscription = new Subscription;
  private statusChangeSubscription: Subscription = new Subscription;
  private revokeChoiceSubscription: Subscription = new Subscription;
  private noCookieLawSubscription: Subscription = new Subscription;
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private translateService: TranslateService,
    private ccService: NgcCookieConsentService,
    private meta: Meta,
  ) {
    // LOADER SECCION //
    setTimeout(() => {
      let element = document.getElementById('loader_div');
      if (element != null) {
        element.className = 'notShow';
      }
    }, 2000);

    setTimeout(() => {
      let element = document.getElementById('head');
      if (element != null) {
        element.className = 'show';
      }
    }, 2800);

    setTimeout(() => {
      this.isShowing = false;
      let element = document.getElementById('master');
      if (element != null) {
        element.className = 'master_container show';
      }
    }, 3200);

    // END LOADER SECCION //

    translateService.setDefaultLang('en');
    translateService.use(localStorage.getItem('lang') || 'en');
  }

  ngOnInit() {
    this.meta.addTags([
      { property: 'og:description', content: 'NTF collection of 5555 uniques warriors, become a son of gods.' },
      { property: 'og:author', content: 'D&D' },
      { property: 'og:type', content: 'NFTs' },
      { property: 'og:url', content: 'https://sonsofgods.io' },
      { property: 'og:image', content: 'https://sonsofgods.io/assets/logosonofgods.png' },
      { property: 'og:image:width', content: '600' },
      { property: 'og:image:height', content: '600' }
    ]);

    this.translateService.use(localStorage.getItem('lang') || 'en');

    this.translateService//
    .get(['cookie.header', 'cookie.message', 'cookie.dismiss', 'cookie.allow', 'cookie.deny', 'cookie.link', 'cookie.policy'])
    .subscribe(data => {

      this.ccService.getConfig().content = this.ccService.getConfig().content || {} ;
      // Override default messages with the translated ones
      this.ccService.getConfig().content!.header = data['cookie.header'] ;
      this.ccService.getConfig().content!.message = data['cookie.message'];
      this.ccService.getConfig().content!.dismiss = data['cookie.dismiss'];
      this.ccService.getConfig().content!.allow = data['cookie.allow'];
      this.ccService.getConfig().content!.deny = data['cookie.deny'];
      this.ccService.getConfig().content!.link = data['cookie.link'];
      this.ccService.getConfig().content!.policy = data['cookie.policy'];

      this.ccService.destroy();//remove previous cookie bar (with default messages)
      this.ccService.init(this.ccService.getConfig()); // update config with translated messages
    });
    // subscribe to cookieconsent observables to react to main events
    this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...
      });
 
    this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...
      });
 
    this.initializeSubscription = this.ccService.initialize$.subscribe(
      (event: NgcInitializeEvent) => {
        // you can use this.ccService.getConfig() to do stuff...
      });
 
    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
      (event: NgcStatusChangeEvent) => {
        // you can use this.ccService.getConfig() to do stuff...
      });
 
    this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...
      });
 
      this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
      (event: NgcNoCookieLawEvent) => {
        // you can use this.ccService.getConfig() to do stuff...
      });
  }
 
  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
    this.initializeSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
    this.revokeChoiceSubscription.unsubscribe();
    this.noCookieLawSubscription.unsubscribe();
  }
}
