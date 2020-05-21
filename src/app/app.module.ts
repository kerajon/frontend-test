import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { ItemsComponent } from './items/items.component';
import { ItemsTreeComponent } from './items/items-tree/items-tree.component';
import { ItemsTreeNodeComponent } from './items/items-tree/items-tree-node/items-tree-node.component';
import { ItemComponent } from './item/item.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Environment } from './environment.class';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    ItemsTreeComponent,
    ItemsTreeNodeComponent,
    ItemComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    { provide: Environment, useValue: environment }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
