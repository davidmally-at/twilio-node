/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the SchemaVersionList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param id - The unique identifier of the schema.
 */
declare function SchemaVersionList(version: V1, id: string): SchemaVersionListInstance;

interface SchemaVersionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SchemaVersionContext;
  /**
   * Streams SchemaVersionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: SchemaVersionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams SchemaVersionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: SchemaVersionListInstanceEachOptions, callback?: (item: SchemaVersionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a schema_version
   *
   * @param resourceVersion - The version of the schema
   */
  get(resourceVersion: string): SchemaVersionContext;
  /**
   * Retrieve a single target page of SchemaVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: SchemaVersionPage) => any): Promise<SchemaVersionPage>;
  /**
   * Retrieve a single target page of SchemaVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SchemaVersionPage) => any): Promise<SchemaVersionPage>;
  /**
   * Lists SchemaVersionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SchemaVersionInstance[]) => any): Promise<SchemaVersionInstance[]>;
  /**
   * Lists SchemaVersionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SchemaVersionListInstanceOptions, callback?: (error: Error | null, items: SchemaVersionInstance[]) => any): Promise<SchemaVersionInstance[]>;
  /**
   * Retrieve a single page of SchemaVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SchemaVersionPage) => any): Promise<SchemaVersionPage>;
  /**
   * Retrieve a single page of SchemaVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SchemaVersionListInstancePageOptions, callback?: (error: Error | null, items: SchemaVersionPage) => any): Promise<SchemaVersionPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface SchemaVersionListInstanceEachOptions {
  callback?: (item: SchemaVersionInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface SchemaVersionListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface SchemaVersionListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface SchemaVersionPayload extends SchemaVersionResource, Page.TwilioResponsePayload {
}

interface SchemaVersionResource {
  date_created: Date;
  id: string;
  raw: string;
  url: string;
  version: number;
}

interface SchemaVersionSolution {
  id?: string;
}


declare class SchemaVersionContext {
  /**
   * Initialize the SchemaVersionContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param id - The unique identifier of the schema.
   * @param resourceVersion - The version of the schema
   */
  constructor(version: V1, id: string, resourceVersion: number);

  /**
   * fetch a SchemaVersionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SchemaVersionInstance) => any): Promise<SchemaVersionInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class SchemaVersionInstance extends SerializableClass {
  /**
   * Initialize the SchemaVersionContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param id - The unique identifier of the schema.
   * @param resourceVersion - The version of the schema
   */
  constructor(version: V1, payload: SchemaVersionPayload, id: string, resourceVersion: number);

  private _proxy: SchemaVersionContext;
  dateCreated: Date;
  /**
   * fetch a SchemaVersionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SchemaVersionInstance) => any): Promise<SchemaVersionInstance>;
  id: string;
  raw: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
  version: number;
}


declare class SchemaVersionPage extends Page<V1, SchemaVersionPayload, SchemaVersionResource, SchemaVersionInstance> {
  /**
   * Initialize the SchemaVersionPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SchemaVersionSolution);

  /**
   * Build an instance of SchemaVersionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SchemaVersionPayload): SchemaVersionInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { SchemaVersionContext, SchemaVersionInstance, SchemaVersionList, SchemaVersionListInstance, SchemaVersionListInstanceEachOptions, SchemaVersionListInstanceOptions, SchemaVersionListInstancePageOptions, SchemaVersionPage, SchemaVersionPayload, SchemaVersionResource, SchemaVersionSolution }
