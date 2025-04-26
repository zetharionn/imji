import { BUCKET } from '@shared/constants'
import { supabaseClient } from './supabase'
import { Storage } from '../services'

export const storage = new Storage(supabaseClient, BUCKET)
