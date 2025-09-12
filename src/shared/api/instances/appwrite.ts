import { Client } from 'appwrite'

export const appwriteClient = new Client()
appwriteClient
	.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
	.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
