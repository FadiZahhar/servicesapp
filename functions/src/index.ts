import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as sgMail from '@sendgrid/mail';
import * as corsLib from 'cors'; // Import CORS

admin.initializeApp();

const SENDGRID_API_KEY = functions.config().sendgrid.key;
sgMail.setApiKey(SENDGRID_API_KEY);

// Initialize CORS middleware with default configuration
// @ts-ignore
const cors = corsLib({ origin: true });

export const sendContactEmail = functions.https.onRequest((req, res) => {
  // @ts-ignore: TS7030 suppression
  cors(req, res, async () => { // Mark this callback as async
    if (req.method !== 'POST') {
      return res.status(405).send('Method Not Allowed');
    }

    const { subject, htmlMessage, clientName, clientEmail, honeypot } = req.body;

    // Honeypot check
    if (honeypot) {
      console.log('Honeypot triggered');
      res.status(200).send("Success"); // Respond as if successful to not alert bots
      return;
    }

    const clientMsg = {
      to: clientEmail,
      from: 'info@wmvp.dev', // Use your verified sender
      subject: subject,
      html: `<p>Dear ${clientName},<br>Thank you for contacting Pro-Solutions.net! We will get back to you within 24 hours.</p>`,
    };

    const ownerMsg = {
      to: 'info@wmvp.dev', // Your email or where you want to receive the form details
      from: 'info@wmvp.dev', // Use a verified sender
      subject: `New Contact Form Submission: ${clientName} - ${subject}`,
      html: `<p>Details of the form submission:</p>${htmlMessage}`,
    };

    try {
      await Promise.all([
        sgMail.send(clientMsg),
        sgMail.send(ownerMsg),
      ]);
      res.status(200).send("Emails sent successfully.");
    } catch (error) {
      console.error("Error sending email", error);
      res.status(500).send("Internal Server Error");
    }
  });
});
