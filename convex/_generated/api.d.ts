/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
	ApiFromModules,
	FilterApi,
	FunctionReference
} from 'convex/server'
import type * as files from '../files.js'
import type * as lib_bufferToFile from '../lib/bufferToFile.js'
import type * as lib_index from '../lib/index.js'
import type * as model_constants_allowedFileTypes from '../model/constants/allowedFileTypes.js'
import type * as model_constants_index from '../model/constants/index.js'
import type * as model_constants_maxFileSize from '../model/constants/maxFileSize.js'
import type * as model_index from '../model/index.js'
import type * as model_schemes_index from '../model/schemes/index.js'

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
	files: typeof files
	'lib/bufferToFile': typeof lib_bufferToFile
	'lib/index': typeof lib_index
	'model/constants/allowedFileTypes': typeof model_constants_allowedFileTypes
	'model/constants/index': typeof model_constants_index
	'model/constants/maxFileSize': typeof model_constants_maxFileSize
	'model/index': typeof model_index
	'model/schemes/index': typeof model_schemes_index
}>
export declare const api: FilterApi<
	typeof fullApi,
	FunctionReference<any, 'public'>
>
export declare const internal: FilterApi<
	typeof fullApi,
	FunctionReference<any, 'internal'>
>
