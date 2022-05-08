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
/**
 * 
 * @export
 * @interface PaymentError
 */
export interface PaymentError {
    /**
     * 
     * @type {string}
     * @memberof PaymentError
     */
    category: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentError
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentError
     */
    detail?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentError
     */
    field?: string;
}
