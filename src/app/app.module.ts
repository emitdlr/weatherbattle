import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {MDCRipple} from '@material/ripple';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule} from '@angular/material';
import { MaterialModule } from './material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from "./app.component";
import { WeatherComponent } from "./weather/weather.component";
import { RouterModule } from "@angular/router";
import { allAppRoutes } from "./routes";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [AppComponent, WeatherComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
