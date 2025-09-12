import { appwriteClient } from '@shared/api'
import { Storage } from 'appwrite'

export const storage = new Storage(appwriteClient)
