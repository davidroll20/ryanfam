import { initializeApp } from 'firebase/app'
import { collection, getFirestore } from 'firebase/firestore'

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBQ6izD-t26QvAFhHV9SvmNy1cdt9fLaz8',
  authDomain: 'ryan-fam.firebaseapp.com',
  projectId: 'ryan-fam',
  storageBucket: 'ryan-fam.firebasestorage.app',
  messagingSenderId: '750155303707',
  appId: '1:750155303707:web:d16ef825d3c2a14e93a1be',
})

export const db = getFirestore(firebaseApp)

export enum ryanFamCollection {
  CALENDAR = 'calendar-events',
  BULLETIN = 'bulletins',
}
export const ryanFamCalendarRef = collection(db, ryanFamCollection.CALENDAR)
export const ryanFamBulletinsRef = collection(db, ryanFamCollection.BULLETIN)
