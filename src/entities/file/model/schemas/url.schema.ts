import * as v from 'valibot'

export const UrlSchema = v.pipe(v.string('Invalid query'), v.url('Invalid url'))
