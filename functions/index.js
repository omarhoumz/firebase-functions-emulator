const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')

  admin.firestore().collection('heroes').add({
    name: 'Batman',
  })

  response.status(200).json({ message: 'Hello from serverless!' })
})
