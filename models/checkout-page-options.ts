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
import { CaptureMethod } from './capture-method';
import { CheckoutStyle } from './checkout-style';
import { ModelBoolean } from './model-boolean';
import { PaymentMethod } from './payment-method';
import { Url } from './url';
/**
 * 
 * @export
 * @interface CheckoutPageOptions
 */
export interface CheckoutPageOptions {
    /**
     * 
     * @type {CaptureMethod}
     * @memberof CheckoutPageOptions
     */
    captureMethod: CaptureMethod;
    /**
     * 
     * @type {Url}
     * @memberof CheckoutPageOptions
     */
    successUrl?: Url;
    /**
     * 
     * @type {Url}
     * @memberof CheckoutPageOptions
     */
    cancelUrl?: Url;
    /**
     * 
     * @type {Url}
     * @memberof CheckoutPageOptions
     */
    expireUrl?: Url;
    /**
     * 
     * @type {ModelBoolean}
     * @memberof CheckoutPageOptions
     */
    enableGroupPayments?: ModelBoolean;
    /**
     * 
     * @type {ModelBoolean}
     * @memberof CheckoutPageOptions
     */
    enableTips?: ModelBoolean;
    /**
     * 
     * @type {ModelBoolean}
     * @memberof CheckoutPageOptions
     */
    enableDiscounts?: ModelBoolean;
    /**
     * Will pre-apply an array of discount codes Discounts have to be enabled first.
     * @type {Array<string>}
     * @memberof CheckoutPageOptions
     */
    discountCodes?: Array<string>;
    /**
     * 
     * @type {Array<PaymentMethod>}
     * @memberof CheckoutPageOptions
     */
    paymentMethods?: Array<PaymentMethod>;
    /**
     * 
     * @type {CheckoutStyle}
     * @memberof CheckoutPageOptions
     */
    style?: CheckoutStyle;
    /**
     * 
     * @type {ModelBoolean}
     * @memberof CheckoutPageOptions
     */
    showEditItemsPage?: ModelBoolean;
}
