# Contact Form Setup Guide

## Quick Setup (2 minutes)

### 1. Create Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Click "Get Started"
3. Sign up using **any email you prefer** (your personal account email)
4. Verify your email

### 2. Create Your Form & Set Email Destination
1. Once logged in, click "New Form"
2. Name it: "Portfolio Contact Form"
3. **IMPORTANT**: In the form settings, add **theodoraropi@gmail.com** as the email recipient
   - Click on "Settings" or "Email Notifications"
   - Add theodoraropi@gmail.com as the recipient email
   - You can add multiple emails if needed
4. You'll see your form endpoint: `https://formspree.io/f/YOUR_FORM_ID`
5. Copy the form ID (the random string after `/f/`)

### 3. Add Form ID to Your Code
1. Open `/portofolio/src/components/Contact.tsx`
2. Find line 25: `const FORMSPREE_ID = "YOUR_FORM_ID";`
3. Replace `YOUR_FORM_ID` with your actual form ID
4. Save the file

### 4. Test It
1. Run your site: `npm run dev`
2. Go to the Contact section
3. Fill out the form and submit
4. Check **theodoraropi@gmail.com** for the email

## What Happens When Someone Submits

1. User fills out the form with their name, email, and message
2. Form data is sent to Formspree's servers
3. Formspree immediately sends an email to **theodoraropi@gmail.com** with:
   - Sender's name
   - Sender's email (you can reply directly)
   - Their message
   - Timestamp

## Features Included

✅ **Spam Protection** - Formspree filters spam automatically
✅ **No Backend Needed** - Works with static hosting
✅ **Email Notifications** - Instant email to theodoraropi@gmail.com
✅ **Reply Directly** - Reply to submissions from your email
✅ **Submission History** - View all submissions in Formspree dashboard

## Free Plan Limits
- 50 submissions per month (upgrade if needed)
- Unlimited forms
- Email notifications
- Spam filtering

## Troubleshooting

**Form not sending?**
- Check that you replaced `YOUR_FORM_ID` with the actual ID
- Make sure you verified your email address with Formspree
- Check browser console for errors

**Not receiving emails?**
- Check spam folder
- Make sure you signed up with theodoraropi@gmail.com
- Check Formspree dashboard to see if submissions are being received

## Alternative: Direct Email Link

If you prefer not to use a form service, you can use a simple mailto link:

```jsx
<a href="mailto:theodoraropi@gmail.com?subject=Portfolio Inquiry">
  Email Me Directly
</a>
```

But the form is better because:
- Users don't need to open their email client
- You get structured data
- Better mobile experience
- You can track submissions