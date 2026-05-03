# EmailJS Setup Guide

Your contact form is now integrated with EmailJS! Follow these steps to make it fully functional.

## 📧 Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's free!)
3. Verify your email address

## 🔧 Step 2: Add Email Service

1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Connect your Gmail account
   - **Outlook**: Connect your Outlook account
   - Or use any other supported service
4. Click **"Connect Account"** and authorize
5. **Copy the Service ID** (e.g., `service_abc123`)

## 📝 Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template structure:

**Subject:**
```
New Contact from {{from_name}}
```

**Content:**
```
You have a new message from your portfolio!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. **Copy the Template ID** (e.g., `template_xyz789`)

## 🔑 Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Find your **Public Key** (e.g., `user_ABC123XYZ`)
3. Copy it

## ⚙️ Step 5: Update Your Code

Open `src/components/Contact.tsx` and replace these lines (around line 52-54):

```typescript
const SERVICE_ID = 'YOUR_SERVICE_ID'  // Replace with your Service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // Replace with your Template ID
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'  // Replace with your Public Key
```

**Example:**
```typescript
const SERVICE_ID = 'service_abc123'
const TEMPLATE_ID = 'template_xyz789'
const PUBLIC_KEY = 'user_ABC123XYZ'
```

## ✅ Step 6: Test Your Contact Form

1. Run your portfolio: `npm run dev`
2. Go to the Contact section
3. Fill out the form and click "Send Message"
4. Check your email inbox!

## 🎯 Important Notes

- **Free Tier**: 200 emails/month (perfect for portfolio)
- **No Backend Needed**: Works directly from the browser
- **Spam Protection**: EmailJS has built-in rate limiting
- **Privacy**: Your email credentials are never exposed

## 🔒 Security Tip

The Public Key is safe to expose in your frontend code. It's designed to be public and only allows sending emails through your configured templates.

## 🆘 Troubleshooting

**Form shows success but no email received?**
- Check your spam folder
- Verify all three IDs are correct
- Make sure your email service is connected in EmailJS dashboard

**Getting errors?**
- Check browser console for error messages
- Verify your EmailJS account is verified
- Make sure you're using the correct template variable names

## 📚 Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Guide](https://www.emailjs.com/docs/examples/reactjs/)

---

**Need Help?** Contact EmailJS support or check their documentation.
