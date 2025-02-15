import * as v from 'valibot'

export const UrlSchema = v.pipe(v.string('Not found'), v.url('Incorrect url'))
