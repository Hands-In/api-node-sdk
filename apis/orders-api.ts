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
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ModelInteger } from '../models';
import { Order } from '../models';
import { OrderCreationParams } from '../models';
import { PartialOrderCreationParams_ } from '../models';
/**
 * OrdersApi - axios parameter creator
 * @export
 */
export const OrdersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create an order
         * @param {OrderCreationParams} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOrder: async (body: OrderCreationParams, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createOrder.');
            }
            const localVarPath = `/orders`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication merchant-api-key required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("x-api-key")
                    : await configuration.apiKey;
                localVarHeaderParameter["x-api-key"] = localVarApiKeyValue;
            }

            // authentication merchant-jwt required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieve an order
         * @param {string} orderId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOrder: async (orderId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orderId' is not null or undefined
            if (orderId === null || orderId === undefined) {
                throw new RequiredError('orderId','Required parameter orderId was null or undefined when calling getOrder.');
            }
            const localVarPath = `/orders/{orderId}`
                .replace(`{${"orderId"}}`, encodeURIComponent(String(orderId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication merchant-api-key required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("x-api-key")
                    : await configuration.apiKey;
                localVarHeaderParameter["x-api-key"] = localVarApiKeyValue;
            }

            // authentication merchant-jwt required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List all Orders
         * @param {ModelInteger} [pageNum] 
         * @param {ModelInteger} [pageSize] 
         * @param {ModelInteger} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listOrders: async (pageNum?: ModelInteger, pageSize?: ModelInteger, limit?: ModelInteger, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/orders`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication merchant-api-key required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("x-api-key")
                    : await configuration.apiKey;
                localVarHeaderParameter["x-api-key"] = localVarApiKeyValue;
            }

            // authentication merchant-jwt required

            if (pageNum !== undefined) {
                localVarQueryParameter['pageNum'] = pageNum;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update an order
         * @param {PartialOrderCreationParams_} body 
         * @param {string} orderId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOrder: async (body: PartialOrderCreationParams_, orderId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updateOrder.');
            }
            // verify required parameter 'orderId' is not null or undefined
            if (orderId === null || orderId === undefined) {
                throw new RequiredError('orderId','Required parameter orderId was null or undefined when calling updateOrder.');
            }
            const localVarPath = `/orders/{orderId}`
                .replace(`{${"orderId"}}`, encodeURIComponent(String(orderId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication merchant-api-key required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("x-api-key")
                    : await configuration.apiKey;
                localVarHeaderParameter["x-api-key"] = localVarApiKeyValue;
            }

            // authentication merchant-jwt required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OrdersApi - functional programming interface
 * @export
 */
export const OrdersApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create an order
         * @param {OrderCreationParams} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOrder(body: OrderCreationParams, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Order>>> {
            const localVarAxiosArgs = await OrdersApiAxiosParamCreator(configuration).createOrder(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Retrieve an order
         * @param {string} orderId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOrder(orderId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Order>>> {
            const localVarAxiosArgs = await OrdersApiAxiosParamCreator(configuration).getOrder(orderId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary List all Orders
         * @param {ModelInteger} [pageNum] 
         * @param {ModelInteger} [pageSize] 
         * @param {ModelInteger} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listOrders(pageNum?: ModelInteger, pageSize?: ModelInteger, limit?: ModelInteger, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<Order>>>> {
            const localVarAxiosArgs = await OrdersApiAxiosParamCreator(configuration).listOrders(pageNum, pageSize, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update an order
         * @param {PartialOrderCreationParams_} body 
         * @param {string} orderId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOrder(body: PartialOrderCreationParams_, orderId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Order>>> {
            const localVarAxiosArgs = await OrdersApiAxiosParamCreator(configuration).updateOrder(body, orderId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * OrdersApi - factory interface
 * @export
 */
export const OrdersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Create an order
         * @param {OrderCreationParams} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOrder(body: OrderCreationParams, options?: AxiosRequestConfig): Promise<AxiosResponse<Order>> {
            return OrdersApiFp(configuration).createOrder(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve an order
         * @param {string} orderId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOrder(orderId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Order>> {
            return OrdersApiFp(configuration).getOrder(orderId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List all Orders
         * @param {ModelInteger} [pageNum] 
         * @param {ModelInteger} [pageSize] 
         * @param {ModelInteger} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listOrders(pageNum?: ModelInteger, pageSize?: ModelInteger, limit?: ModelInteger, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Order>>> {
            return OrdersApiFp(configuration).listOrders(pageNum, pageSize, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update an order
         * @param {PartialOrderCreationParams_} body 
         * @param {string} orderId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOrder(body: PartialOrderCreationParams_, orderId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Order>> {
            return OrdersApiFp(configuration).updateOrder(body, orderId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OrdersApi - object-oriented interface
 * @export
 * @class OrdersApi
 * @extends {BaseAPI}
 */
export class OrdersApi extends BaseAPI {
    /**
     * 
     * @summary Create an order
     * @param {OrderCreationParams} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrdersApi
     */
    public async createOrder(body: OrderCreationParams, options?: AxiosRequestConfig) : Promise<AxiosResponse<Order>> {
        return OrdersApiFp(this.configuration).createOrder(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Retrieve an order
     * @param {string} orderId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrdersApi
     */
    public async getOrder(orderId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Order>> {
        return OrdersApiFp(this.configuration).getOrder(orderId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary List all Orders
     * @param {ModelInteger} [pageNum] 
     * @param {ModelInteger} [pageSize] 
     * @param {ModelInteger} [limit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrdersApi
     */
    public async listOrders(pageNum?: ModelInteger, pageSize?: ModelInteger, limit?: ModelInteger, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<Order>>> {
        return OrdersApiFp(this.configuration).listOrders(pageNum, pageSize, limit, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Update an order
     * @param {PartialOrderCreationParams_} body 
     * @param {string} orderId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrdersApi
     */
    public async updateOrder(body: PartialOrderCreationParams_, orderId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Order>> {
        return OrdersApiFp(this.configuration).updateOrder(body, orderId, options).then((request) => request(this.axios, this.basePath));
    }
}
