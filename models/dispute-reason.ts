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
 * @enum {string}
 */
export enum DisputeReason {
    AMOUNTDIFFERS = 'AMOUNT_DIFFERS',
    CANCELLED = 'CANCELLED',
    DUPLICATE = 'DUPLICATE',
    NOKNOWLEDGE = 'NO_KNOWLEDGE',
    NOTASDESCRIBED = 'NOT_AS_DESCRIBED',
    NOTRECEIVED = 'NOT_RECEIVED',
    PAIDBYOTHERMEANS = 'PAID_BY_OTHER_MEANS',
    CUSTOMERREQUESTSCREDIT = 'CUSTOMER_REQUESTS_CREDIT',
    EMVLIABILITYSHIFT = 'EMV_LIABILITY_SHIFT'
}

