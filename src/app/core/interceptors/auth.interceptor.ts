import { Injectable } from '@angular/core';
import { GrpcMessage, GrpcRequest, GrpcEvent } from '@ngx-grpc/common';
import { GrpcInterceptor, GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements GrpcInterceptor {
  intercept<Q extends GrpcMessage, S extends GrpcMessage>(
    request: GrpcRequest<Q, S>,
    next: GrpcHandler
  ): Observable<GrpcEvent<S>> {
    // Modify the request metadata here
    request.requestMetadata.set('custom-header', 'value');

    // Log the request and metadata for debugging purposes
    console.log('gRPC request:', request);
    console.log('gRPC metadata:', request.requestMetadata);

    // Forward the request to the next handler in the chain
    return next.handle(request);
  }
}
