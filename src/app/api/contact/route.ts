import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, service, phone, source } = body;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields', success: false },
        { status: 400 }
      );
    }

    // SMTP & Email credentials
    const emailUser = process.env.EMAIL_USER || process.env.SMTP_USER;
    const emailPass = process.env.EMAIL_PASS || process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
    const smtpFrom = process.env.SMTP_FROM || emailUser || 'no-reply@saurabhdantani.work';
    const toEmail = process.env.EMAIL_TO || emailUser || 'saurabhdantani09@gmail.com';

    // Log the lead capture to server console
    console.log(`\n========================================`);
    console.log(`📬 NEW INQUIRY RECEIVED [${source || 'Website'}]`);
    console.log(`Time:    ${new Date().toISOString()}`);
    console.log(`Name:    ${name}`);
    console.log(`Email:   ${email}`);
    console.log(`Phone:   ${phone || 'N/A'}`);
    console.log(`Service: ${service || 'General Inquiry'}`);
    console.log(`Message: ${message || 'N/A'}`);
    console.log(`========================================\n`);

    // If SMTP credentials are configured, send real email
    if (emailUser && emailPass) {
      try {
        let transporter: nodemailer.Transporter;

        if (smtpHost) {
          // Custom SMTP (SendGrid, Resend, Amazon SES, Brevo, cPanel, etc.)
          transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpSecure,
            auth: {
              user: emailUser,
              pass: emailPass,
            },
          });
        } else {
          // Default Gmail service
          transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: emailUser,
              pass: emailPass,
            },
          });
        }

        const subject = `✨ New Portfolio Lead from ${name}${service ? ` [${service}]` : ''}`;

        const textContent = `
New Lead from Portfolio:
----------------------------------------
Name:    ${name}
Email:   ${email}
${phone ? `Phone:   ${phone}\n` : ''}${service ? `Service: ${service}\n` : ''}Source:  ${source || 'Connect Form'}
Date:    ${new Date().toLocaleString()}

Message:
${message || 'No additional message provided.'}
----------------------------------------
        `;

        const htmlContent = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <div style="border-bottom: 2px solid #3b82f6; padding-bottom: 16px; margin-bottom: 20px;">
              <h2 style="color: #1e293b; margin: 0; font-size: 20px;">✨ New Inquiry from Portfolio</h2>
              <p style="color: #64748b; margin: 4px 0 0 0; font-size: 13px;">Received via ${source || 'Connect Popup'}</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px 0; font-weight: 600; width: 140px; color: #475569; font-size: 14px;">Name:</td>
                <td style="padding: 10px 0; color: #0f172a; font-size: 14px; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: 600; color: #475569; font-size: 14px;">Email:</td>
                <td style="padding: 10px 0; color: #2563eb; font-size: 14px;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; font-weight: 600; color: #475569; font-size: 14px;">Phone / WhatsApp:</td>
                <td style="padding: 10px 0; color: #0f172a; font-size: 14px;">${phone}</td>
              </tr>
              ` : ''}
              ${service ? `
              <tr>
                <td style="padding: 10px 0; font-weight: 600; color: #475569; font-size: 14px;">Service Interest:</td>
                <td style="padding: 10px 0; color: #0f172a; font-size: 14px;"><span style="display: inline-block; padding: 3px 10px; background-color: #eff6ff; color: #1d4ed8; border-radius: 6px; font-weight: 600; font-size: 12px;">${service}</span></td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 10px 0; font-weight: 600; color: #475569; font-size: 14px;">Date:</td>
                <td style="padding: 10px 0; color: #64748b; font-size: 13px;">${new Date().toLocaleString()}</td>
              </tr>
            </table>

            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
              <h4 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: #475569;">Project Brief / Message:</h4>
              <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message || 'No additional message.'}</p>
            </div>
            
            <div style="margin-top: 24px; text-align: center; font-size: 12px; color: #94a3b8;">
              <p style="margin: 0;">Sent directly from saurabhdantani.work portfolio connect system</p>
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: smtpFrom,
          to: toEmail,
          replyTo: email,
          subject,
          text: textContent,
          html: htmlContent,
        });

        return NextResponse.json(
          { message: 'Inquiry received and email sent successfully!', success: true },
          { status: 200 }
        );
      } catch (mailError) {
        console.error('Nodemailer sending error (check SMTP configuration):', mailError);
        // Fallback: Lead was logged in server console, return success response so user preview is smooth
        return NextResponse.json(
          {
            message: 'Inquiry received and recorded! (SMTP configuration pending or needs update)',
            success: true,
          },
          { status: 200 }
        );
      }
    }

    // If SMTP is not yet configured, lead is logged and we return success
    return NextResponse.json(
      {
        message: 'Inquiry received successfully! (Pending SMTP configuration)',
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry', success: false },
      { status: 500 }
    );
  }
}
