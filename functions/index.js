/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
// Importing Firebase functions and admin SDK using ESM syntax
import * as functions from "firebase-functions/v1";
import admin from "firebase-admin";

admin.initializeApp();

// Define the Cloud Function
export const processHotmartPurchase = functions.https.onRequest(
  async (request, response) => {
    if (request.method !== "POST") {
      return response.status(405).send("Method Not Allowed");
    }

    // Destructure the status and other details from the request body
    const { status, ...purchaseDetails } = request.body;

    if (status === "approved") {
      // Process the approved purchase
      try {
        const purchaseRef = admin.firestore().collection("purchases").doc();
        await purchaseRef.set(purchaseDetails);
        response.send("Purchase processed successfully");
      } catch (error) {
        response.status(500).send(error.message);
      }
    } else {
      response.send("Purchase not approved, no action taken");
    }
    // eslint-disable-next-line comma-dangle
  }
);
