import { BUCKET } from '@shared/constants'
import { Storage } from '../services'
import { supabaseClient } from './supabase'

export const storage = new Storage(supabaseClient, BUCKET)
