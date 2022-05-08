/* tslint:disable */
/* eslint-disable */
/**
 * Merchant API
 * The Hands In API is the first and only service that enables users to transact within a group. Our API is heavily orientated around being a RESTful service  that has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, ant utilizes standard HTTP response codes
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Address } from './address';
import { CustomerCreationParams } from './customer-creation-params';
import { LineItemCreationParam } from './line-item-creation-param';
import { MetaData } from './meta-data';
/**
 * 
 * @export
 * @interface OrderCreationParams
 */
export interface OrderCreationParams {
    /**
     * 
     * @type {Array<LineItemCreationParam>}
     * @memberof OrderCreationParams
     */
    lineItemParams: Array<LineItemCreationParam>;
    /**
     * 
     * @type {Array<string>}
     * @memberof OrderCreationParams
     */
    discountCodes?: Array<string>;
    /**
     * Customer who is paying for the order
     * @type {string | CustomerCreationParams}
     * @memberof OrderCreationParams
     */
    customer?: string | CustomerCreationParams;
    /**
     * 
     * @type {Address}
     * @memberof OrderCreationParams
     */
    shippingAddress?: Address;
    /**
     * 
     * @type {MetaData}
     * @memberof OrderCreationParams
     */
    metaData?: MetaData;
}
