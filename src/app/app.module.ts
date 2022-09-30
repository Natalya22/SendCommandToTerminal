import { CommandService } from './command.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule }   from '@angular/forms';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    InputNumberModule,
    DropdownModule,
    FormsModule,
    TooltipModule
  ],
  providers: [CommandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
