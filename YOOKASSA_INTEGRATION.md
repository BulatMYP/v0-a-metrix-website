# YooKassa Payment Integration Guide

## Overview
The project now has full YooKassa payment integration with embedded checkout widget. Users can purchase courses directly from the courses section.

## Architecture

### 1. **API Route** (`/app/api/create-payment/route.ts`)
- **Method**: POST
- **Endpoint**: `/api/create-payment`
- **Request Body**:
  ```json
  {
    "amount": 5990000,  // in kopeks (amount * 100)
    "description": "Course name"
  }
  ```
- **Response**:
  ```json
  {
    "id": "payment_id_from_yookassa",
    "confirmation_token": "widget_token"
  }
  ```
- **Features**:
  - Basic authentication using shopId and secretKey
  - Idempotence key for request safety
  - Bank card payment method
  - Embedded confirmation type
  - Automatic capture

### 2. **PaymentButton Component** (`/components/payment-button.tsx`)
- Client-side React component with hooks
- Handles payment initiation flow
- Shows loading state during request
- Initializes YooKassa Checkout Widget
- Error handling with user feedback

### 3. **Updated Courses Section** (`/components/home/courses-section.tsx`)
- Replaced Link buttons with PaymentButton components
- Passes course price (converted to kopeks) and name as description
- Maintains original button styling (default/outline variants)

### 4. **Payment Pages**
- **Success**: `/app/payment/success/page.tsx` - Displays confirmation with payment ID
- **Failure**: `/app/payment/fail/page.tsx` - Displays error details with retry option

### 5. **Widget Script** (`/app/layout.tsx`)
- YooKassa Checkout Widget script loaded in head
- Async loading for better performance
- Available globally as `window.YooKassaCheckoutWidget`

## Environment Variables

Create or update `.env.local`:
```
YOKASSA_SHOP_ID=1343870
YOKASSA_SECRET_KEY=live_WCkJ9MKzcfmCRGIBiciv_42_VjnKjJdPnakY8pR_FLo
```

**Important**: These are temporary variables for testing. In production:
1. Move to environment variables in your hosting platform
2. Use secure secret management (never commit secrets)
3. Verify shopId and secretKey are correct for production

## Payment Flow

```
User clicks course button
         ↓
PaymentButton component
         ↓
POST /api/create-payment {amount, description}
         ↓
Backend creates payment in YooKassa API
(Basic auth: shopId:secretKey)
         ↓
Returns payment_id + confirmation_token
         ↓
YooKassaCheckoutWidget initializes
         ↓
User completes payment in embedded widget
         ↓
Widget redirects to /payment/success or /payment/fail
         ↓
Success page shows confirmation
```

## Testing

### Local Testing
```bash
npm run dev
```
- Visit http://localhost:3000
- Click any course button
- The PaymentButton will trigger payment creation
- YooKassa widget should appear embedded

### Testing Payment IDs
- Use YooKassa test credentials to test locally
- Success page displays payment ID for verification
- Check YooKassa dashboard for payment status

## Production Deployment

### Requirements
1. **Node.js hosting** (not static hosting)
   - Vercel
   - Render
   - Railway
   - AWS EC2
   - DigitalOcean
   - Heroku
   - Any Node.js capable platform

2. **Environment Setup**
   - Add YOKASSA_SHOP_ID to env vars
   - Add YOKASSA_SECRET_KEY to env vars

3. **Domain Configuration**
   - Update return URLs in PaymentButton
   - Currently set to: `${window.location.origin}/payment/success`

### Build Command
```bash
npm run build
```

### Start Command
```bash
npm start
```

## Security Notes

⚠️ **Important Security Practices**:

1. **Never commit secrets** - Don't push .env.local to repository
2. **Use environment variables** - Set variables in your hosting platform, not in code
3. **Verify HTTPS** - Always use HTTPS in production
4. **Secret rotation** - Change secretKey periodically
5. **API security** - The backend route is protected by being server-side only
6. **CORS handling** - The API handles cross-origin requests properly

## Troubleshooting

### Widget not loading
- Check if YooKassa script loaded: `window.YooKassaCheckoutWidget`
- Verify HTTPS in production
- Check browser console for errors

### Payment creation fails
- Verify environment variables are set correctly
- Check YooKassa API response in console: `[YooKassa] API Error`
- Verify credentials (shopId and secretKey)

### Redirect not working
- Confirm return URLs in PaymentButton component
- Check if /payment/success and /payment/fail pages exist
- Verify domain in YooKassa dashboard settings

## Files Created/Modified

### Created Files
- `/app/api/create-payment/route.ts` - Payment API
- `/components/payment-button.tsx` - Payment button component
- `/app/payment/success/page.tsx` - Success page
- `/app/payment/fail/page.tsx` - Failure page
- `/YOOKASSA_INTEGRATION.md` - This file

### Modified Files
- `/app/layout.tsx` - Added YooKassa widget script
- `/components/home/courses-section.tsx` - Replaced buttons with PaymentButton
- `/.env.local` - Added YooKassa credentials

## Next Steps

1. **Test locally**: `npm run dev`
2. **Deploy to hosting**: Push to your hosting platform
3. **Verify payments**: Check YooKassa dashboard for transactions
4. **Monitor errors**: Watch server logs for payment errors
5. **Update success page**: Add email notifications or course access logic
6. **Security audit**: Review and update environment variables

## API Reference

### YooKassa API Documentation
- **Base URL**: https://api.yookassa.ru/v3/
- **Authentication**: Basic Auth (shopId:secretKey)
- **Docs**: https://yookassa.ru/developers/api

### Payment Request
```
POST https://api.yookassa.ru/v3/payments
Authorization: Basic <base64(shopId:secretKey)>
Content-Type: application/json

{
  "amount": {
    "value": "599.90",
    "currency": "RUB"
  },
  "payment_method_data": {
    "type": "bank_card"
  },
  "confirmation": {
    "type": "embedded"
  },
  "description": "Course name",
  "capture": true
}
```

### Response
```json
{
  "id": "295df41b-f5f8-41d6-b1db-6d20fb2c6c54",
  "confirmation": {
    "type": "embedded",
    "token": "EC-8F147D30E2ACE10F...1629F1D8345"
  },
  "status": "pending"
}
```

## Support

For YooKassa integration issues:
- Check YooKassa documentation: https://yookassa.ru/developers
- Review error codes in API response
- Contact YooKassa support: support@yookassa.ru
