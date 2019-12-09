// Get a Firestore instance
export const db = firebase
  .initializeApp({ projectId: "MY PROJECT ID" })
  .firestore();

// Export types that exists in Firestore
// export { TimeStamp, GeoPoint } = firebase.firestore

// if using Firebase JS SDK < 5.8.0
// db.settings({ timestampsInSnapshots: true })
