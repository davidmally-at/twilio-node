/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import { SerializableClass } from '../../../../../interfaces';

type StreamStatus = 'in-progress'|'stopped';

type StreamTrack = 'inbound_track'|'outbound_track'|'both_tracks';

type StreamUpdateStatus = 'stopped';

/**
 * Initialize the StreamList
 *
 * @param version - Version of the resource
 * @param accountSid - The SID of the Account that created this resource
 * @param callSid - The SID of the Call the resource is associated with
 */
declare function StreamList(version: V2010, accountSid: string, callSid: string): StreamListInstance;

/**
 * Options to pass to update
 *
 * @property status - The status. Must have the value `stopped`
 */
interface StreamInstanceUpdateOptions {
  status: StreamUpdateStatus;
}

interface StreamListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): StreamContext;
  /**
   * create a StreamInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback?: (error: Error | null, item: StreamInstance) => any): Promise<StreamInstance>;
  /**
   * create a StreamInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: StreamListInstanceCreateOptions, callback?: (error: Error | null, item: StreamInstance) => any): Promise<StreamInstance>;
  /**
   * Constructs a stream
   *
   * @param sid - The SID of the Stream resource, or the `name`
   */
  get(sid: string): StreamContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property name - The name of this resource
 * @property parameter1.name - Parameter name
 * @property parameter1.value - Parameter value
 * @property parameter10.name - Parameter name
 * @property parameter10.value - Parameter value
 * @property parameter11.name - Parameter name
 * @property parameter11.value - Parameter value
 * @property parameter12.name - Parameter name
 * @property parameter12.value - Parameter value
 * @property parameter13.name - Parameter name
 * @property parameter13.value - Parameter value
 * @property parameter14.name - Parameter name
 * @property parameter14.value - Parameter value
 * @property parameter15.name - Parameter name
 * @property parameter15.value - Parameter value
 * @property parameter16.name - Parameter name
 * @property parameter16.value - Parameter value
 * @property parameter17.name - Parameter name
 * @property parameter17.value - Parameter value
 * @property parameter18.name - Parameter name
 * @property parameter18.value - Parameter value
 * @property parameter19.name - Parameter name
 * @property parameter19.value - Parameter value
 * @property parameter2.name - Parameter name
 * @property parameter2.value - Parameter value
 * @property parameter20.name - Parameter name
 * @property parameter20.value - Parameter value
 * @property parameter21.name - Parameter name
 * @property parameter21.value - Parameter value
 * @property parameter22.name - Parameter name
 * @property parameter22.value - Parameter value
 * @property parameter23.name - Parameter name
 * @property parameter23.value - Parameter value
 * @property parameter24.name - Parameter name
 * @property parameter24.value - Parameter value
 * @property parameter25.name - Parameter name
 * @property parameter25.value - Parameter value
 * @property parameter26.name - Parameter name
 * @property parameter26.value - Parameter value
 * @property parameter27.name - Parameter name
 * @property parameter27.value - Parameter value
 * @property parameter28.name - Parameter name
 * @property parameter28.value - Parameter value
 * @property parameter29.name - Parameter name
 * @property parameter29.value - Parameter value
 * @property parameter3.name - Parameter name
 * @property parameter3.value - Parameter value
 * @property parameter30.name - Parameter name
 * @property parameter30.value - Parameter value
 * @property parameter31.name - Parameter name
 * @property parameter31.value - Parameter value
 * @property parameter32.name - Parameter name
 * @property parameter32.value - Parameter value
 * @property parameter33.name - Parameter name
 * @property parameter33.value - Parameter value
 * @property parameter34.name - Parameter name
 * @property parameter34.value - Parameter value
 * @property parameter35.name - Parameter name
 * @property parameter35.value - Parameter value
 * @property parameter36.name - Parameter name
 * @property parameter36.value - Parameter value
 * @property parameter37.name - Parameter name
 * @property parameter37.value - Parameter value
 * @property parameter38.name - Parameter name
 * @property parameter38.value - Parameter value
 * @property parameter39.name - Parameter name
 * @property parameter39.value - Parameter value
 * @property parameter4.name - Parameter name
 * @property parameter4.value - Parameter value
 * @property parameter40.name - Parameter name
 * @property parameter40.value - Parameter value
 * @property parameter41.name - Parameter name
 * @property parameter41.value - Parameter value
 * @property parameter42.name - Parameter name
 * @property parameter42.value - Parameter value
 * @property parameter43.name - Parameter name
 * @property parameter43.value - Parameter value
 * @property parameter44.name - Parameter name
 * @property parameter44.value - Parameter value
 * @property parameter45.name - Parameter name
 * @property parameter45.value - Parameter value
 * @property parameter46.name - Parameter name
 * @property parameter46.value - Parameter value
 * @property parameter47.name - Parameter name
 * @property parameter47.value - Parameter value
 * @property parameter48.name - Parameter name
 * @property parameter48.value - Parameter value
 * @property parameter49.name - Parameter name
 * @property parameter49.value - Parameter value
 * @property parameter5.name - Parameter name
 * @property parameter5.value - Parameter value
 * @property parameter50.name - Parameter name
 * @property parameter50.value - Parameter value
 * @property parameter51.name - Parameter name
 * @property parameter51.value - Parameter value
 * @property parameter52.name - Parameter name
 * @property parameter52.value - Parameter value
 * @property parameter53.name - Parameter name
 * @property parameter53.value - Parameter value
 * @property parameter54.name - Parameter name
 * @property parameter54.value - Parameter value
 * @property parameter55.name - Parameter name
 * @property parameter55.value - Parameter value
 * @property parameter56.name - Parameter name
 * @property parameter56.value - Parameter value
 * @property parameter57.name - Parameter name
 * @property parameter57.value - Parameter value
 * @property parameter58.name - Parameter name
 * @property parameter58.value - Parameter value
 * @property parameter59.name - Parameter name
 * @property parameter59.value - Parameter value
 * @property parameter6.name - Parameter name
 * @property parameter6.value - Parameter value
 * @property parameter60.name - Parameter name
 * @property parameter60.value - Parameter value
 * @property parameter61.name - Parameter name
 * @property parameter61.value - Parameter value
 * @property parameter62.name - Parameter name
 * @property parameter62.value - Parameter value
 * @property parameter63.name - Parameter name
 * @property parameter63.value - Parameter value
 * @property parameter64.name - Parameter name
 * @property parameter64.value - Parameter value
 * @property parameter65.name - Parameter name
 * @property parameter65.value - Parameter value
 * @property parameter66.name - Parameter name
 * @property parameter66.value - Parameter value
 * @property parameter67.name - Parameter name
 * @property parameter67.value - Parameter value
 * @property parameter68.name - Parameter name
 * @property parameter68.value - Parameter value
 * @property parameter69.name - Parameter name
 * @property parameter69.value - Parameter value
 * @property parameter7.name - Parameter name
 * @property parameter7.value - Parameter value
 * @property parameter70.name - Parameter name
 * @property parameter70.value - Parameter value
 * @property parameter71.name - Parameter name
 * @property parameter71.value - Parameter value
 * @property parameter72.name - Parameter name
 * @property parameter72.value - Parameter value
 * @property parameter73.name - Parameter name
 * @property parameter73.value - Parameter value
 * @property parameter74.name - Parameter name
 * @property parameter74.value - Parameter value
 * @property parameter75.name - Parameter name
 * @property parameter75.value - Parameter value
 * @property parameter76.name - Parameter name
 * @property parameter76.value - Parameter value
 * @property parameter77.name - Parameter name
 * @property parameter77.value - Parameter value
 * @property parameter78.name - Parameter name
 * @property parameter78.value - Parameter value
 * @property parameter79.name - Parameter name
 * @property parameter79.value - Parameter value
 * @property parameter8.name - Parameter name
 * @property parameter8.value - Parameter value
 * @property parameter80.name - Parameter name
 * @property parameter80.value - Parameter value
 * @property parameter81.name - Parameter name
 * @property parameter81.value - Parameter value
 * @property parameter82.name - Parameter name
 * @property parameter82.value - Parameter value
 * @property parameter83.name - Parameter name
 * @property parameter83.value - Parameter value
 * @property parameter84.name - Parameter name
 * @property parameter84.value - Parameter value
 * @property parameter85.name - Parameter name
 * @property parameter85.value - Parameter value
 * @property parameter86.name - Parameter name
 * @property parameter86.value - Parameter value
 * @property parameter87.name - Parameter name
 * @property parameter87.value - Parameter value
 * @property parameter88.name - Parameter name
 * @property parameter88.value - Parameter value
 * @property parameter89.name - Parameter name
 * @property parameter89.value - Parameter value
 * @property parameter9.name - Parameter name
 * @property parameter9.value - Parameter value
 * @property parameter90.name - Parameter name
 * @property parameter90.value - Parameter value
 * @property parameter91.name - Parameter name
 * @property parameter91.value - Parameter value
 * @property parameter92.name - Parameter name
 * @property parameter92.value - Parameter value
 * @property parameter93.name - Parameter name
 * @property parameter93.value - Parameter value
 * @property parameter94.name - Parameter name
 * @property parameter94.value - Parameter value
 * @property parameter95.name - Parameter name
 * @property parameter95.value - Parameter value
 * @property parameter96.name - Parameter name
 * @property parameter96.value - Parameter value
 * @property parameter97.name - Parameter name
 * @property parameter97.value - Parameter value
 * @property parameter98.name - Parameter name
 * @property parameter98.value - Parameter value
 * @property parameter99.name - Parameter name
 * @property parameter99.value - Parameter value
 * @property statusCallback - Absolute URL of the status callback.
 * @property statusCallbackMethod - The http method for the status_callback.
 * @property track - One of `inbound_track`, `outbound_track`, `both_tracks`.
 * @property url - Url where WebSocket connection will be established.
 */
interface StreamListInstanceCreateOptions {
  name?: string;
  parameter1?: {
    name?: string;
    value?: string;
  };
  parameter10?: {
    name?: string;
    value?: string;
  };
  parameter11?: {
    name?: string;
    value?: string;
  };
  parameter12?: {
    name?: string;
    value?: string;
  };
  parameter13?: {
    name?: string;
    value?: string;
  };
  parameter14?: {
    name?: string;
    value?: string;
  };
  parameter15?: {
    name?: string;
    value?: string;
  };
  parameter16?: {
    name?: string;
    value?: string;
  };
  parameter17?: {
    name?: string;
    value?: string;
  };
  parameter18?: {
    name?: string;
    value?: string;
  };
  parameter19?: {
    name?: string;
    value?: string;
  };
  parameter2?: {
    name?: string;
    value?: string;
  };
  parameter20?: {
    name?: string;
    value?: string;
  };
  parameter21?: {
    name?: string;
    value?: string;
  };
  parameter22?: {
    name?: string;
    value?: string;
  };
  parameter23?: {
    name?: string;
    value?: string;
  };
  parameter24?: {
    name?: string;
    value?: string;
  };
  parameter25?: {
    name?: string;
    value?: string;
  };
  parameter26?: {
    name?: string;
    value?: string;
  };
  parameter27?: {
    name?: string;
    value?: string;
  };
  parameter28?: {
    name?: string;
    value?: string;
  };
  parameter29?: {
    name?: string;
    value?: string;
  };
  parameter3?: {
    name?: string;
    value?: string;
  };
  parameter30?: {
    name?: string;
    value?: string;
  };
  parameter31?: {
    name?: string;
    value?: string;
  };
  parameter32?: {
    name?: string;
    value?: string;
  };
  parameter33?: {
    name?: string;
    value?: string;
  };
  parameter34?: {
    name?: string;
    value?: string;
  };
  parameter35?: {
    name?: string;
    value?: string;
  };
  parameter36?: {
    name?: string;
    value?: string;
  };
  parameter37?: {
    name?: string;
    value?: string;
  };
  parameter38?: {
    name?: string;
    value?: string;
  };
  parameter39?: {
    name?: string;
    value?: string;
  };
  parameter4?: {
    name?: string;
    value?: string;
  };
  parameter40?: {
    name?: string;
    value?: string;
  };
  parameter41?: {
    name?: string;
    value?: string;
  };
  parameter42?: {
    name?: string;
    value?: string;
  };
  parameter43?: {
    name?: string;
    value?: string;
  };
  parameter44?: {
    name?: string;
    value?: string;
  };
  parameter45?: {
    name?: string;
    value?: string;
  };
  parameter46?: {
    name?: string;
    value?: string;
  };
  parameter47?: {
    name?: string;
    value?: string;
  };
  parameter48?: {
    name?: string;
    value?: string;
  };
  parameter49?: {
    name?: string;
    value?: string;
  };
  parameter5?: {
    name?: string;
    value?: string;
  };
  parameter50?: {
    name?: string;
    value?: string;
  };
  parameter51?: {
    name?: string;
    value?: string;
  };
  parameter52?: {
    name?: string;
    value?: string;
  };
  parameter53?: {
    name?: string;
    value?: string;
  };
  parameter54?: {
    name?: string;
    value?: string;
  };
  parameter55?: {
    name?: string;
    value?: string;
  };
  parameter56?: {
    name?: string;
    value?: string;
  };
  parameter57?: {
    name?: string;
    value?: string;
  };
  parameter58?: {
    name?: string;
    value?: string;
  };
  parameter59?: {
    name?: string;
    value?: string;
  };
  parameter6?: {
    name?: string;
    value?: string;
  };
  parameter60?: {
    name?: string;
    value?: string;
  };
  parameter61?: {
    name?: string;
    value?: string;
  };
  parameter62?: {
    name?: string;
    value?: string;
  };
  parameter63?: {
    name?: string;
    value?: string;
  };
  parameter64?: {
    name?: string;
    value?: string;
  };
  parameter65?: {
    name?: string;
    value?: string;
  };
  parameter66?: {
    name?: string;
    value?: string;
  };
  parameter67?: {
    name?: string;
    value?: string;
  };
  parameter68?: {
    name?: string;
    value?: string;
  };
  parameter69?: {
    name?: string;
    value?: string;
  };
  parameter7?: {
    name?: string;
    value?: string;
  };
  parameter70?: {
    name?: string;
    value?: string;
  };
  parameter71?: {
    name?: string;
    value?: string;
  };
  parameter72?: {
    name?: string;
    value?: string;
  };
  parameter73?: {
    name?: string;
    value?: string;
  };
  parameter74?: {
    name?: string;
    value?: string;
  };
  parameter75?: {
    name?: string;
    value?: string;
  };
  parameter76?: {
    name?: string;
    value?: string;
  };
  parameter77?: {
    name?: string;
    value?: string;
  };
  parameter78?: {
    name?: string;
    value?: string;
  };
  parameter79?: {
    name?: string;
    value?: string;
  };
  parameter8?: {
    name?: string;
    value?: string;
  };
  parameter80?: {
    name?: string;
    value?: string;
  };
  parameter81?: {
    name?: string;
    value?: string;
  };
  parameter82?: {
    name?: string;
    value?: string;
  };
  parameter83?: {
    name?: string;
    value?: string;
  };
  parameter84?: {
    name?: string;
    value?: string;
  };
  parameter85?: {
    name?: string;
    value?: string;
  };
  parameter86?: {
    name?: string;
    value?: string;
  };
  parameter87?: {
    name?: string;
    value?: string;
  };
  parameter88?: {
    name?: string;
    value?: string;
  };
  parameter89?: {
    name?: string;
    value?: string;
  };
  parameter9?: {
    name?: string;
    value?: string;
  };
  parameter90?: {
    name?: string;
    value?: string;
  };
  parameter91?: {
    name?: string;
    value?: string;
  };
  parameter92?: {
    name?: string;
    value?: string;
  };
  parameter93?: {
    name?: string;
    value?: string;
  };
  parameter94?: {
    name?: string;
    value?: string;
  };
  parameter95?: {
    name?: string;
    value?: string;
  };
  parameter96?: {
    name?: string;
    value?: string;
  };
  parameter97?: {
    name?: string;
    value?: string;
  };
  parameter98?: {
    name?: string;
    value?: string;
  };
  parameter99?: {
    name?: string;
    value?: string;
  };
  statusCallback?: string;
  statusCallbackMethod?: string;
  track?: StreamTrack;
  url?: string;
}

interface StreamPayload extends StreamResource, Page.TwilioResponsePayload {
}

interface StreamResource {
  account_sid: string;
  call_sid: string;
  date_updated: Date;
  name: string;
  sid: string;
  status: StreamStatus;
  uri: string;
}

interface StreamSolution {
  accountSid?: string;
  callSid?: string;
}


declare class StreamContext {
  /**
   * Initialize the StreamContext
   *
   * @param version - Version of the resource
   * @param accountSid - The SID of the Account that created this resource
   * @param callSid - The SID of the Call the resource is associated with
   * @param sid - The SID of the Stream resource, or the `name`
   */
  constructor(version: V2010, accountSid: string, callSid: string, sid: string);

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a StreamInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: StreamInstanceUpdateOptions, callback?: (error: Error | null, items: StreamInstance) => any): Promise<StreamInstance>;
}


declare class StreamInstance extends SerializableClass {
  /**
   * Initialize the StreamContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The SID of the Account that created this resource
   * @param callSid - The SID of the Call the resource is associated with
   * @param sid - The SID of the Stream resource, or the `name`
   */
  constructor(version: V2010, payload: StreamPayload, accountSid: string, callSid: string, sid: string);

  private _proxy: StreamContext;
  accountSid: string;
  callSid: string;
  dateUpdated: Date;
  name: string;
  sid: string;
  status: StreamStatus;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a StreamInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: StreamInstanceUpdateOptions, callback?: (error: Error | null, items: StreamInstance) => any): Promise<StreamInstance>;
  uri: string;
}


declare class StreamPage extends Page<V2010, StreamPayload, StreamResource, StreamInstance> {
  /**
   * Initialize the StreamPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: StreamSolution);

  /**
   * Build an instance of StreamInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: StreamPayload): StreamInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { StreamContext, StreamInstance, StreamInstanceUpdateOptions, StreamList, StreamListInstance, StreamListInstanceCreateOptions, StreamPage, StreamPayload, StreamResource, StreamSolution, StreamStatus, StreamTrack, StreamUpdateStatus }
