// services/emailService.js

import nodemailer from 'nodemailer';
import { emailConfig } from '../config/emailConfig.js';

export const sendContactEmail = async ({ firstName, lastName, email, phone, service, genre, message }) => {
  // Create a transporter
  const transporter = nodemailer.createTransport(emailConfig);

  // Email options
  const mailOptions = {
    from: `<${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO,
    subject: 'New Contact Form Submission',
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <div style="background-color: #f7f7f7; padding: 20px; border-bottom: 1px solid #e2e2e2; text-align: center;">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Hammad Marketing
          </span>
          <h1 style="color: #333; margin-top: 20px;">New Contact Form Submission</h1>
        </div>
        <div style="padding: 20px;">
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service Interested In:</strong> ${service}</p>
          <p><strong>Book Genre:</strong> ${genre}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border: 1px solid #e2e2e2; border-radius: 5px;">
            <p>${message}</p>
          </div>
        </div>
      </div>
    `,
  };

  // Send the email
  await transporter.sendMail(mailOptions);
};
