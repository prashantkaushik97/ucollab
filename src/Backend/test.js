// Import necessary functions from Firebase
import { getAuth } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

// Import the User class from your code
import User from './users.js';

// Initialize Firebase Auth
const auth = getAuth();

// Create a new User instance
const user = new User(
  'John',
  'Doe',
  'john1130@example.com',
  'password',
  'University',
  'Faculty',
  'Program',
  'Course',
  'Year'
);
console.log("hello");
// Call the authenticateUser method
user.authenticateUser();
