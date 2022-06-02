import {initializeApp} from 'firebase/app';
import {firebase as firebaseConfig} from '../../../config/index.js';
import {getFirestore} from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
