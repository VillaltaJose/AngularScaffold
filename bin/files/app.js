const html = `<div class="w-screen h-screen overflow-auto">
<router-outlet></router-outlet>
</div>
`;

const appmodule = `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroCommonModule } from './shared/modules/ng-zorro-common/ng-zorro-common.module';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';

registerLocaleData(es);

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		NgZorroCommonModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
	],
	providers: [
		NzDrawerService,
		NzMessageService,
		{ provide: NZ_I18N, useValue: es_ES },
		// { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorsService, multi: true },
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
`;

const route = `import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // Example route
	// { path: '', loadChildren: () => import('./layout/admin-panel/admin-panel.module').then(m => m.AdminPanelModule) },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
`;

module.exports = {
    html,
    appmodule,
    route,
}