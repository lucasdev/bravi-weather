import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatListModule, MatCardModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatListModule, MatCardModule]
})
export class MaterialModule {}
