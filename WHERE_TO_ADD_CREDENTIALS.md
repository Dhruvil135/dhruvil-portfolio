# 📍 Where to Add EmailJS Credentials

## ✅ UPDATED: Use Environment Variables (Recommended)

Your portfolio now uses environment variables for EmailJS credentials!

---

## Quick Setup

### Step 1: Create `.env` file
In your project root, create a file named `.env`:

```bash
# In project root (same level as package.json)
.env
```

### Step 2: Add Your Credentials
Copy this into your `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Step 3: Replace with Your Actual Values
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_ABC123XYZ
```

### Step 4: Restart Dev Server
```bash
# Stop server (Ctrl+C)
# Start again
npm run dev
```

---

## ✅ Benefits of Environment Variables

- ✅ **Secure:** Credentials not in code
- ✅ **Git-safe:** `.env` is ignored by Git
- ✅ **Easy deployment:** Just add env vars in hosting dashboard
- ✅ **Best practice:** Industry standard approach

---

## 🚀 For Deployment (Vercel/Netlify)

When deploying, add these environment variables in your hosting dashboard:

| Variable Name | Example Value |
|---------------|---------------|
| `VITE_EMAILJS_SERVICE_ID` | `service_abc123` |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_xyz789` |
| `VITE_EMAILJS_PUBLIC_KEY` | `user_ABC123XYZ` |

---

## 🔧 Alternative: Direct Code Method (Not Recommended)

If you prefer to hardcode (not recommended for production):

**File:** `src/components/Contact.tsx`  
**Lines:** ~80-82

Change from:
```typescript
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
```

To:
```typescript
const SERVICE_ID = 'service_abc123'
const TEMPLATE_ID = 'template_xyz789'
const PUBLIC_KEY = 'user_ABC123XYZ'
```

---

## 📚 More Info

See `EMAILJS_SETUP.md` for detailed EmailJS account setup instructions.

