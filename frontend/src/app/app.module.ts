import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateRequestComponent } from './views/create-request/create-request.component';
import { EditRequestComponent } from './views/edit-request/edit-request.component';
import { ListRequestComponent } from './views/list-request/list-request.component';
import { BEncodeDecodeComponent } from './views/b-encode-decode/b-encode-decode.component';
import { AesEncryptDecryptComponent } from './views/aes-encrypt-decrypt/aes-encrypt-decrypt.component';
import { ScheduleRequestComponent } from './views/schedule-request/schedule-request.component';
import { PdfResizerComponent } from './views/pdf-resizer/pdf-resizer.component';
import { PdfTablesComponent } from './views/pdf-tables/pdf-tables.component';
import { PdfImagesComponent } from './views/pdf-images/pdf-images.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './shared/loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateRequestComponent,
    EditRequestComponent,
    ListRequestComponent,
    BEncodeDecodeComponent,
    AesEncryptDecryptComponent,
    ScheduleRequestComponent,
    PdfResizerComponent,
    PdfTablesComponent,
    PdfImagesComponent,
    NavbarComponent,
    HomeComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
