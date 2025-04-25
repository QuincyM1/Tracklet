
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'your-project-id.firebaseapp.com',
    projectId: 'your-project-id',
    appId: 'YOUR_APP_ID',
    };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);