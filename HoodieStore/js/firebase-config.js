// Mock Firebase Config (Demo Mode)
// This file is kept to prevent errors in existing HTML imports
// but it doesn't actually connect to Firebase.

const firebase = {
    initializeApp: () => console.log('Firebase Mock Initialized'),
    auth: () => ({
        onAuthStateChanged: (cb) => {
            // We handle auth state in auth.js via LocalStorage
            // This is just a dummy to prevent errors
        }
    }),
    firestore: () => ({
        collection: () => ({
            doc: () => ({
                set: () => Promise.resolve(),
                get: () => Promise.resolve({ exists: false })
            })
        })
    })
};
