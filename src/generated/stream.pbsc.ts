/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './stream.pb';
import { GRPC_STREAM_SERVICE_CLIENT_SETTINGS } from './stream.pbconf';
/**
 * Service client implementation for stream.StreamService
 */
@Injectable({ providedIn: 'any' })
export class StreamServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Server streaming: /stream.StreamService/FetchResponse
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StreamResponse>>
     */
    fetchResponse: (
      requestData: thisProto.StreamRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StreamResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/stream.StreamService/FetchResponse',
        requestData,
        requestMetadata,
        requestClass: thisProto.StreamRequest,
        responseClass: thisProto.StreamResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_STREAM_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('stream.StreamService', settings);
  }

  /**
   * Server streaming @/stream.StreamService/FetchResponse
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StreamResponse>
   */
  fetchResponse(
    requestData: thisProto.StreamRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StreamResponse> {
    return this.$raw
      .fetchResponse(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
