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
import { Email } from '../models';
import { EmailCreationParams } from '../models';
import { MerchantDTO } from '../models';
import { MerchantIdInviteBody } from '../models';
import { OAuthTokenResponse } from '../models';
import { PickMerchantNameOrContactDetailsOrLogoUrlOrDefaultCurrency_ } from '../models';
/**
 * MerchantApi - axios parameter creator
 * @export
 */
export const MerchantApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Provide a ID token to create a merchant. Receive a JWT access token that gives all scope to account.
         * @summary Create a merchant account
         * @param {PickMerchantNameOrContactDetailsOrLogoUrlOrDefaultCurrency_} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMerchant: async (body: PickMerchantNameOrContactDetailsOrLogoUrlOrDefaultCurrency_, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createMerchant.');
            }
            const localVarPath = `/merchants`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication account-jwt required

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
         * @summary Delete a merchant account
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMerchant: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/merchants`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
         * Supply a merchant JWT token and retrieve merchant data
         * @summary Retrieve merchant data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMerchant: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/merchants`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
         * @summary Invite a merchant account team
         * @param {MerchantIdInviteBody} body 
         * @param {string} merchantId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        inviteMerchant: async (body: MerchantIdInviteBody, merchantId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling inviteMerchant.');
            }
            // verify required parameter 'merchantId' is not null or undefined
            if (merchantId === null || merchantId === undefined) {
                throw new RequiredError('merchantId','Required parameter merchantId was null or undefined when calling inviteMerchant.');
            }
            const localVarPath = `/merchants/{merchantId}/invite`
                .replace(`{${"merchantId"}}`, encodeURIComponent(String(merchantId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
         * Supply both the id token for the account, aswell as the access token, which would have been provided to you, through a link or email.
         * @summary Join a merchant account team
         * @param {string} merchantId 
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        joinMerchant: async (merchantId: string, key: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'merchantId' is not null or undefined
            if (merchantId === null || merchantId === undefined) {
                throw new RequiredError('merchantId','Required parameter merchantId was null or undefined when calling joinMerchant.');
            }
            // verify required parameter 'key' is not null or undefined
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling joinMerchant.');
            }
            const localVarPath = `/merchants/{merchantId}/join`
                .replace(`{${"merchantId"}}`, encodeURIComponent(String(merchantId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication merchant-jwt required

            if (key !== undefined) {
                localVarQueryParameter['key'] = key;
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
         * Exchange an account access token to get a resource token Which gives access to all the merhant scopes you have permission for
         * @summary Login to a merchant account
         * @param {string} merchantId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginMerchant: async (merchantId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'merchantId' is not null or undefined
            if (merchantId === null || merchantId === undefined) {
                throw new RequiredError('merchantId','Required parameter merchantId was null or undefined when calling loginMerchant.');
            }
            const localVarPath = `/merchants/{merchantId}/token`
                .replace(`{${"merchantId"}}`, encodeURIComponent(String(merchantId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication account-jwt required

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
         * Supply a merchant JWT token and email parameters to send an email through the handsin email service
         * @summary Send an email
         * @param {EmailCreationParams} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendEmailMerchant: async (body: EmailCreationParams, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling sendEmailMerchant.');
            }
            const localVarPath = `/merchants/sendEmail`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
 * MerchantApi - functional programming interface
 * @export
 */
export const MerchantApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Provide a ID token to create a merchant. Receive a JWT access token that gives all scope to account.
         * @summary Create a merchant account
         * @param {PickMerchantNameOrContactDetailsOrLogoUrlOrDefaultCurrency_} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createMerchant(body: PickMerchantNameOrContactDetailsOrLogoUrlOrDefaultCurrency_, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<MerchantDTO>>> {
            const localVarAxiosArgs = await MerchantApiAxiosParamCreator(configuration).createMerchant(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Delete a merchant account
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteMerchant(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<MerchantDTO>>> {
            const localVarAxiosArgs = await MerchantApiAxiosParamCreator(configuration).deleteMerchant(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Supply a merchant JWT token and retrieve merchant data
         * @summary Retrieve merchant data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMerchant(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<MerchantDTO>>> {
            const localVarAxiosArgs = await MerchantApiAxiosParamCreator(configuration).getMerchant(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Invite a merchant account team
         * @param {MerchantIdInviteBody} body 
         * @param {string} merchantId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async inviteMerchant(body: MerchantIdInviteBody, merchantId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<MerchantDTO>>> {
            const localVarAxiosArgs = await MerchantApiAxiosParamCreator(configuration).inviteMerchant(body, merchantId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Supply both the id token for the account, aswell as the access token, which would have been provided to you, through a link or email.
         * @summary Join a merchant account team
         * @param {string} merchantId 
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async joinMerchant(merchantId: string, key: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<MerchantDTO>>> {
            const localVarAxiosArgs = await MerchantApiAxiosParamCreator(configuration).joinMerchant(merchantId, key, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Exchange an account access token to get a resource token Which gives access to all the merhant scopes you have permission for
         * @summary Login to a merchant account
         * @param {string} merchantId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loginMerchant(merchantId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<OAuthTokenResponse>>> {
            const localVarAxiosArgs = await MerchantApiAxiosParamCreator(configuration).loginMerchant(merchantId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Supply a merchant JWT token and email parameters to send an email through the handsin email service
         * @summary Send an email
         * @param {EmailCreationParams} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendEmailMerchant(body: EmailCreationParams, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Email>>> {
            const localVarAxiosArgs = await MerchantApiAxiosParamCreator(configuration).sendEmailMerchant(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MerchantApi - factory interface
 * @export
 */
export const MerchantApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Provide a ID token to create a merchant. Receive a JWT access token that gives all scope to account.
         * @summary Create a merchant account
         * @param {PickMerchantNameOrContactDetailsOrLogoUrlOrDefaultCurrency_} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createMerchant(body: PickMerchantNameOrContactDetailsOrLogoUrlOrDefaultCurrency_, options?: AxiosRequestConfig): Promise<AxiosResponse<MerchantDTO>> {
            return MerchantApiFp(configuration).createMerchant(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete a merchant account
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteMerchant(options?: AxiosRequestConfig): Promise<AxiosResponse<MerchantDTO>> {
            return MerchantApiFp(configuration).deleteMerchant(options).then((request) => request(axios, basePath));
        },
        /**
         * Supply a merchant JWT token and retrieve merchant data
         * @summary Retrieve merchant data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMerchant(options?: AxiosRequestConfig): Promise<AxiosResponse<MerchantDTO>> {
            return MerchantApiFp(configuration).getMerchant(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Invite a merchant account team
         * @param {MerchantIdInviteBody} body 
         * @param {string} merchantId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async inviteMerchant(body: MerchantIdInviteBody, merchantId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<MerchantDTO>> {
            return MerchantApiFp(configuration).inviteMerchant(body, merchantId, options).then((request) => request(axios, basePath));
        },
        /**
         * Supply both the id token for the account, aswell as the access token, which would have been provided to you, through a link or email.
         * @summary Join a merchant account team
         * @param {string} merchantId 
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async joinMerchant(merchantId: string, key: string, options?: AxiosRequestConfig): Promise<AxiosResponse<MerchantDTO>> {
            return MerchantApiFp(configuration).joinMerchant(merchantId, key, options).then((request) => request(axios, basePath));
        },
        /**
         * Exchange an account access token to get a resource token Which gives access to all the merhant scopes you have permission for
         * @summary Login to a merchant account
         * @param {string} merchantId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loginMerchant(merchantId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<OAuthTokenResponse>> {
            return MerchantApiFp(configuration).loginMerchant(merchantId, options).then((request) => request(axios, basePath));
        },
        /**
         * Supply a merchant JWT token and email parameters to send an email through the handsin email service
         * @summary Send an email
         * @param {EmailCreationParams} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendEmailMerchant(body: EmailCreationParams, options?: AxiosRequestConfig): Promise<AxiosResponse<Email>> {
            return MerchantApiFp(configuration).sendEmailMerchant(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MerchantApi - object-oriented interface
 * @export
 * @class MerchantApi
 * @extends {BaseAPI}
 */
export class MerchantApi extends BaseAPI {
    /**
     * Provide a ID token to create a merchant. Receive a JWT access token that gives all scope to account.
     * @summary Create a merchant account
     * @param {PickMerchantNameOrContactDetailsOrLogoUrlOrDefaultCurrency_} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantApi
     */
    public async createMerchant(body: PickMerchantNameOrContactDetailsOrLogoUrlOrDefaultCurrency_, options?: AxiosRequestConfig) : Promise<AxiosResponse<MerchantDTO>> {
        return MerchantApiFp(this.configuration).createMerchant(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Delete a merchant account
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantApi
     */
    public async deleteMerchant(options?: AxiosRequestConfig) : Promise<AxiosResponse<MerchantDTO>> {
        return MerchantApiFp(this.configuration).deleteMerchant(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Supply a merchant JWT token and retrieve merchant data
     * @summary Retrieve merchant data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantApi
     */
    public async getMerchant(options?: AxiosRequestConfig) : Promise<AxiosResponse<MerchantDTO>> {
        return MerchantApiFp(this.configuration).getMerchant(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Invite a merchant account team
     * @param {MerchantIdInviteBody} body 
     * @param {string} merchantId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantApi
     */
    public async inviteMerchant(body: MerchantIdInviteBody, merchantId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<MerchantDTO>> {
        return MerchantApiFp(this.configuration).inviteMerchant(body, merchantId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Supply both the id token for the account, aswell as the access token, which would have been provided to you, through a link or email.
     * @summary Join a merchant account team
     * @param {string} merchantId 
     * @param {string} key 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantApi
     */
    public async joinMerchant(merchantId: string, key: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<MerchantDTO>> {
        return MerchantApiFp(this.configuration).joinMerchant(merchantId, key, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Exchange an account access token to get a resource token Which gives access to all the merhant scopes you have permission for
     * @summary Login to a merchant account
     * @param {string} merchantId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantApi
     */
    public async loginMerchant(merchantId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<OAuthTokenResponse>> {
        return MerchantApiFp(this.configuration).loginMerchant(merchantId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Supply a merchant JWT token and email parameters to send an email through the handsin email service
     * @summary Send an email
     * @param {EmailCreationParams} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantApi
     */
    public async sendEmailMerchant(body: EmailCreationParams, options?: AxiosRequestConfig) : Promise<AxiosResponse<Email>> {
        return MerchantApiFp(this.configuration).sendEmailMerchant(body, options).then((request) => request(this.axios, this.basePath));
    }
}
