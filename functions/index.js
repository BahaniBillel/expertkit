/* eslint-disable require-jsdoc */
/* eslint-disable eol-last */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */

import * as functions from "firebase-functions";
import admin from "firebase-admin";
import fetch from "node-fetch"; // Make sure node-fetch is installed

if (admin.apps.length === 0) {
  admin.initializeApp();
}

export const processHotmartPurchase = functions.https.onRequest(
  async (request, response) => {
    if (request.method !== "POST") {
      return response.status(405).send("Method Not Allowed");
    }

    const { event, data } = request.body;

    if (
      event === "PURCHASE_APPROVED" &&
      data?.purchase?.status === "APPROVED"
    ) {
      const { buyer, purchase } = data;
      const uniquePassword = generatePassword(12); // Assume generatePassword function exists

      try {
        // Create or update the user in Firebase Authentication
        const userRecord = await admin.auth().createUser({
          email: buyer.email,
          password: uniquePassword,
          displayName: buyer.name,
        });

        console.log(`User created or updated with UID: ${userRecord.uid}`);

        // Store the purchase details in Firestore
        await admin
          .firestore()
          .collection("purchases")
          .doc(userRecord.uid)
          .set({
            email: buyer.email,
            name: buyer.name,
            product: purchase.product.name,
            price: purchase.price.value,
            currency: purchase.price.currency_value,
            purchaseDate: admin.firestore.Timestamp.fromMillis(
              purchase.approved_date
            ),
            courseId: data.product.id, // Assuming this is the course ID
          });

        // Grant access to the course
        await grantCourseAccess(userRecord.uid, data.product.id);

        // Optionally, send data to an external webhook, including the unique password
        const webhookUrl =
          "https://services.leadconnectorhq.com/hooks/VemEGyiakDxiuaHVv9er/webhook-trigger/6265d99d-6ca6-4016-becd-e236d77128e3";
        const webhookData = { ...request.body, uniquePassword };
        const webhookResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(webhookData),
        });

        if (!webhookResponse.ok) {
          throw new Error(`Webhook call failed: ${webhookResponse.statusText}`);
        }

        response.send(
          "Purchase processed, user account created, and course access granted."
        );
      } catch (error) {
        console.error("Error:", error);
        response.status(500).send("Internal Server Error");
      }
    } else {
      response.send("Purchase not approved, no action taken.");
    }
  }
);

async function grantCourseAccess(userId, courseId) {
  // Implement the logic to grant access to the course for the user
  // For example, update a 'courseAccess' collection with the user ID and course ID
  await admin
    .firestore()
    .collection("marketing_prompts_kit")
    .doc(userId)
    .set(
      {
        courses: admin.firestore.FieldValue.arrayUnion(courseId),
      },
      { merge: true }
    );
}

function generatePassword(length) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let retVal = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
