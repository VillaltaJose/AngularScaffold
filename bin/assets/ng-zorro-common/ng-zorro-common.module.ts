import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule } from '@angular/forms';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTableModule } from 'ng-zorro-antd/table';

const MODULES = [
	CommonModule,
	FormsModule,
	NzSelectModule,
	NzInputModule,
	NzButtonModule,
	NzDropDownModule,
	NzDatePickerModule,
	NzImageModule,
	NzInputNumberModule,
	NzIconModule,
	NzDrawerModule,
	NzMessageModule,
	NzTableModule,
];
@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class NgZorroCommonModule { }
