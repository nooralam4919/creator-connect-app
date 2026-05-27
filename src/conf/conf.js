const conf = {
    appWriteUrl: String(import.meta.env.VITE_APPWRITE_APPWRITE_URL),
    appWriteID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appWriteBucket: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}
export default conf;
