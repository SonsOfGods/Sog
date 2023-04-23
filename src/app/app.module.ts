import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoreComponent } from './components/lore/lore.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { BannerComponent } from './components/banner/banner.component';
import { CountdownTimerModule } from './../../projects/countdown-timer/src/lib/countdown-timer.module';
import { TeamComponent } from './components/team/team.component';
import { NgParticlesModule } from 'ng-particles';
import { ParticlesComponent } from './components/particles/particles.component';
import { SwiperModule } from 'swiper/angular';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { FaqComponent } from './components/faq/faq.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { LoaderComponent } from './components/loader/loader.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { GodsComponent } from './components/gods/gods.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GalleryDosComponent } from './components/gallery-dos/gallery-dos.component';
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LazyLoadImageModule } from 'ng-lazyload-image';

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'sonsofgods.io'/*'sonsofgods.io'*/ // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#d7c123'
    }
  },
  theme: 'edgeless',
  type: 'opt-out'
};

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoreComponent,
    BannerComponent,
    TeamComponent,
    ParticlesComponent,
    RoadmapComponent,
    FaqComponent,
    LoaderComponent,
    GodsComponent,
    GalleryDosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    CountdownTimerModule,
    NgParticlesModule,
    MatToolbarModule,
    MatExpansionModule,
    SwiperModule,
    ButtonModule,
    NgxAudioPlayerModule,
    HttpClientModule,
    LazyLoadImageModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FontAwesomeModule,
  ],
  providers: [ HttpClient ],
  bootstrap: [AppComponent],
})
export class AppModule {}
