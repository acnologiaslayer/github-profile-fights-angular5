import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { GithubService } from './services/github.service'
import { DataService } from './services/data.service'

import { AppComponent } from './app.component';
import { FightComponent } from './components/fight/fight.component';
import { ProfilesComponent } from './components/profiles/profiles.component';

const routes:Routes = [
	{
		path: "",
		component: ProfilesComponent
	},
	{
		path: "fight",
		component: FightComponent
	}
]

@NgModule({
  declarations: [
    AppComponent,
    FightComponent,
    ProfilesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GithubService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
