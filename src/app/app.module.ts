import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServerService } from './server.service';
import { HttpModule } from '../../node_modules/@angular/http';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { MenuComponent } from './menu/menu.component';
// import { ServerService } from './server.service';

// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegulScoreComponent } from './regul-score/regul-score.component';
import { ScoreComponent } from './score/score.component';
import { ScoreListComponent } from './score-list/score-list.component';
import { ScoreListService } from './services/score-list.service';
import { DaylyComponent } from './dayly/dayly.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';

const appRoutes: Routes = [
  { path: 'server', component: ServerComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'regul-score', component: RegulScoreComponent },
  { path: 'score', component: ScoreComponent },
  { path: 'score-list', component: ScoreListComponent },
  { path: 'user-list', component: UserListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    MenuComponent,
    RegulScoreComponent,
    ScoreComponent,
    ScoreListComponent,
    DaylyComponent,
    UserComponent,
    UserListComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ScoreListService,ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
