/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

/**
 * Message implementation for StreamRequest
 */
export class StreamRequest implements GrpcMessage {
  static id = 'StreamRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamRequest();
    StreamRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamRequest) {
    _instance.id = _instance.id || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    StreamRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
  }

  private _id: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StreamRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    StreamRequest.refineValues(this);
  }
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamRequest.AsObject {
    return {
      id: this.id
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): StreamRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module StreamRequest {
  /**
   * Standard JavaScript object representation for StreamRequest
   */
  export interface AsObject {
    id: number;
  }

  /**
   * Protobuf JSON representation for StreamRequest
   */
  export interface AsProtobufJSON {
    id: number;
  }
}

/**
 * Message implementation for StreamResponse
 */
export class StreamResponse implements GrpcMessage {
  static id = 'StreamResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamResponse();
    StreamResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamResponse) {
    _instance.name = _instance.name || '';
    _instance.address = _instance.address || '';
    _instance.age = _instance.age || 0;
    _instance.course = _instance.course || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.address = _reader.readString();
          break;
        case 3:
          _instance.age = _reader.readInt32();
          break;
        case 4:
          (_instance.course = _instance.course || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StreamResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.address) {
      _writer.writeString(2, _instance.address);
    }
    if (_instance.age) {
      _writer.writeInt32(3, _instance.age);
    }
    if (_instance.course && _instance.course.length) {
      _writer.writeRepeatedString(4, _instance.course);
    }
  }

  private _name: string;
  private _address: string;
  private _age: number;
  private _course: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StreamResponse.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.address = _value.address;
    this.age = _value.age;
    this.course = (_value.course || []).slice();
    StreamResponse.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get address(): string {
    return this._address;
  }
  set address(value: string) {
    this._address = value;
  }
  get age(): number {
    return this._age;
  }
  set age(value: number) {
    this._age = value;
  }
  get course(): string[] {
    return this._course;
  }
  set course(value: string[]) {
    this._course = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamResponse.AsObject {
    return {
      name: this.name,
      address: this.address,
      age: this.age,
      course: (this.course || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): StreamResponse.AsProtobufJSON {
    return {
      name: this.name,
      address: this.address,
      age: this.age,
      course: (this.course || []).slice()
    };
  }
}
export module StreamResponse {
  /**
   * Standard JavaScript object representation for StreamResponse
   */
  export interface AsObject {
    name: string;
    address: string;
    age: number;
    course: string[];
  }

  /**
   * Protobuf JSON representation for StreamResponse
   */
  export interface AsProtobufJSON {
    name: string;
    address: string;
    age: number;
    course: string[];
  }
}
