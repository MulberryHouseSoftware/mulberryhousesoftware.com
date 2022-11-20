import sendgrid from "@sendgrid/mail";

console.log(process.env.SENDGRID_API_KEY)
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: `${req.body.email}`, // Your email where you'll receive emails
      from: "john.walley@mulberryhousesoftware.com", // your website email address here
      subject: `${req.body.subject}`,
      html: `<div>You've got a mail</div>`,
    });
  } catch (error) {
     console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;