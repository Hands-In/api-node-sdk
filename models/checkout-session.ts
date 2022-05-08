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
import { CheckoutPageOptions } from './checkout-page-options';
import { CheckoutStatus } from './checkout-status';
import { MetaData } from './meta-data';
import { Url } from './url';
/**
 * 
 * @export
 * @interface CheckoutSession
 */
export interface CheckoutSession {
    /**
     * 
     * @type {string}
     * @memberof CheckoutSession
     */
    id: string;
    /**
     * 
     * @type {CheckoutStatus}
     * @memberof CheckoutSession
     */
    status: CheckoutStatus;
    /**
     * 
     * @type {Date}
     * @memberof CheckoutSession
     */
    expirationDate: Date;
    /**
     * User will populate data in checkout session if provided
     * @type {string}
     * @memberof CheckoutSession
     */
    customerId?: string;
    /**
     * The order associated with the checkout session
     * @type {string}
     * @memberof CheckoutSession
     */
    orderId: string;
    /**
     * The payment associated with the checkout session Could be either single payment or group payment
     * @type {string}
     * @memberof CheckoutSession
     */
    paymentId?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckoutSession
     */
    groupPaymentId?: string;
    /**
     * 
     * @type {CheckoutPageOptions}
     * @memberof CheckoutSession
     */
    checkoutOptions: CheckoutPageOptions;
    /**
     * 
     * @type {Url}
     * @memberof CheckoutSession
     */
    url: Url;
    /**
     * 
     * @type {Date}
     * @memberof CheckoutSession
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CheckoutSession
     */
    updatedAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof CheckoutSession
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof CheckoutSession
     */
    referenceId?: string;
    /**
     * 
     * @type {MetaData}
     * @memberof CheckoutSession
     */
    metaData?: MetaData;
}
