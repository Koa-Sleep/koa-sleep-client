/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponseUserResponse } from '../models/ApiResponseUserResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserControllerService {
    /**
     * @param id
     * @returns ApiResponseUserResponse OK
     * @throws ApiError
     */
    public static findUserById(
        id: string,
    ): CancelablePromise<ApiResponseUserResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param email
     * @returns ApiResponseUserResponse OK
     * @throws ApiError
     */
    public static findUserByEmail(
        email: string,
    ): CancelablePromise<ApiResponseUserResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/search',
            query: {
                'email': email,
            },
        });
    }
    /**
     * @returns ApiResponseUserResponse OK
     * @throws ApiError
     */
    public static getCurrentUser(): CancelablePromise<ApiResponseUserResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/me',
        });
    }
}
