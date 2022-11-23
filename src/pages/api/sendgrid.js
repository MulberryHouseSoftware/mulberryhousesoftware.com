import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'john.walley@mulberryhousesoftware.com', // Your email where you'll receive emails
      from: 'john.walley@mulberryhousesoftware.com', // your website email address here
      subject: `${req.body.subject}`,
      html: `From: ${req.body.email}
      
${req.body.message}`,
    })
  } catch (error) {
    console.log(error)
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
