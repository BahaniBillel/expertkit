/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */

import * as functions from "firebase-functions";
import admin from "firebase-admin";
import fetch from "node-fetch";

admin.initializeApp();

export const processHotmartPurchase = functions.https.onRequest(
  async (request, response) => {
    if (request.method !== "POST") {
      return response.status(405).send("Method Not Allowed");
    }

    const purchaseData = request.body;

    try {
      // Save data to Firestore
      const purchaseRef = admin.firestore().collection("purchases").doc();
      await purchaseRef.set(purchaseData);

      // Send data to external webhook
      const webhookUrl =
        "https://services.leadconnectorhq.com/hooks/VemEGyiakDxiuaHVv9er/webhook-trigger/6265d99d-6ca6-4016-becd-e236d77128e3";
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        body: JSON.stringify(purchaseData),
        headers: { "Content-Type": "application/json" },
      });

      if (!webhookResponse.ok) {
        throw new Error(
          `Failed to send data to webhook. Status: ${webhookResponse.status}`
        );
      }

      // Respond to the original request indicating success
      response.send(
        "Purchase processed and data sent to webhook successfully."
      );
    } catch (error) {
      console.error("Error processing purchase:", error);
      response.status(500).send("Internal Server Error");
    }
  }
);
