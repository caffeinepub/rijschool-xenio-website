import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface ContactForm {
  'name' : string,
  'email' : string,
  'message' : string,
  'timestamp' : bigint,
  'phone' : string,
}
export interface TransformationInput {
  'context' : Uint8Array | number[],
  'response' : http_request_result,
}
export interface TransformationOutput {
  'status' : bigint,
  'body' : Uint8Array | number[],
  'headers' : Array<http_header>,
}
export interface http_header { 'value' : string, 'name' : string }
export interface http_request_result {
  'status' : bigint,
  'body' : Uint8Array | number[],
  'headers' : Array<http_header>,
}
export interface _SERVICE {
  'getAllContactForms' : ActorMethod<[], Array<ContactForm>>,
  'submitContactForm' : ActorMethod<[string, string, string, string], boolean>,
  'transform' : ActorMethod<[TransformationInput], TransformationOutput>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
