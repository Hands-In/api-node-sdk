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
import { BankAccountPaymentDetails } from './bank-account-payment-details';
import { CardPaymentDetails } from './card-payment-details';
import { CashPaymentDetails } from './cash-payment-details';
import { ExternalPaymentDetails } from './external-payment-details';
import { Money } from './money';
import { PaymentMethod } from './payment-method';
import { PaymentStatus } from './payment-status';
import { ProcessingFee } from './processing-fee';
import { RiskEvaluation } from './risk-evaluation';
import { Url } from './url';
/**
 * 
 * @export
 * @interface PaymentRecord
 */
export interface PaymentRecord {
    /**
     * 
     * @type {string}
     * @memberof PaymentRecord
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentRecord
     */
    customerId?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentRecord
     */
    orderId?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentRecord
     */
    groupPaymentId?: string;
    /**
     * 
     * @type {Money}
     * @memberof PaymentRecord
     */
    totalMoney: Money;
    /**
     * 
     * @type {Money}
     * @memberof PaymentRecord
     */
    amountMoney: Money;
    /**
     * 
     * @type {Money}
     * @memberof PaymentRecord
     */
    tipMoney?: Money;
    /**
     * 
     * @type {Money}
     * @memberof PaymentRecord
     */
    approvedMoney?: Money;
    /**
     * 
     * @type {Money}
     * @memberof PaymentRecord
     */
    refundedMoney?: Money;
    /**
     * 
     * @type {Money}
     * @memberof PaymentRecord
     */
    appFee?: Money;
    /**
     * 
     * @type {Array<ProcessingFee>}
     * @memberof PaymentRecord
     */
    processingFees?: Array<ProcessingFee>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PaymentRecord
     */
    refundIds?: Array<string>;
    /**
     * 
     * @type {PaymentStatus}
     * @memberof PaymentRecord
     */
    status: PaymentStatus;
    /**
     * 
     * @type {Date}
     * @memberof PaymentRecord
     */
    expirationDate?: Date;
    /**
     * 
     * @type {PaymentMethod}
     * @memberof PaymentRecord
     */
    paymentMethod: PaymentMethod;
    /**
     * 
     * @type {CardPaymentDetails}
     * @memberof PaymentRecord
     */
    cardDetails?: CardPaymentDetails;
    /**
     * 
     * @type {BankAccountPaymentDetails}
     * @memberof PaymentRecord
     */
    bankAccountDetails?: BankAccountPaymentDetails;
    /**
     * 
     * @type {CashPaymentDetails}
     * @memberof PaymentRecord
     */
    cashDetails?: CashPaymentDetails;
    /**
     * 
     * @type {ExternalPaymentDetails}
     * @memberof PaymentRecord
     */
    externalDetails?: ExternalPaymentDetails;
    /**
     * 
     * @type {string}
     * @memberof PaymentRecord
     */
    locationId?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentRecord
     */
    referenceId?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentRecord
     */
    employeeId?: string;
    /**
     * 
     * @type {RiskEvaluation}
     * @memberof PaymentRecord
     */
    riskEvaluation?: RiskEvaluation;
    /**
     * 
     * @type {string}
     * @memberof PaymentRecord
     */
    buyerEmailAddress?: string;
    /**
     * 
     * @type {Address}
     * @memberof PaymentRecord
     */
    billingAddress?: Address;
    /**
     * 
     * @type {Address}
     * @memberof PaymentRecord
     */
    shippingAddress?: Address;
    /**
     * 
     * @type {Array<string>}
     * @memberof PaymentRecord
     */
    capabilities?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof PaymentRecord
     */
    receiptNumber?: string;
    /**
     * 
     * @type {Url}
     * @memberof PaymentRecord
     */
    receiptUrl?: Url;
    /**
     * 
     * @type {string}
     * @memberof PaymentRecord
     */
    versionToken?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentRecord
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentRecord
     */
    statementDescriptionIdentifier?: string;
    /**
     * 
     * @type {Date}
     * @memberof PaymentRecord
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof PaymentRecord
     */
    updatedAt: Date;
    /**
     * 
     * @type {number}
     * @memberof PaymentRecord
     */
    version: number;
}
