import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GRPC_INTERCEPTORS } from '@ngx-grpc/core';
import { AuthInterceptor } from './interceptors';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: GRPC_INTERCEPTORS,
      useClass: AuthInterceptor
    }
  ]
})
export class CoreModule {}
