import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 


const MaterialComponents: any = [
  MatButtonModule,
  MatBadgeModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatMenuModule,
  MatSnackBarModule,
]

@NgModule({
  declarations: [],
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }
