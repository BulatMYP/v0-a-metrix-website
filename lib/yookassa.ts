import crypto from 'crypto';

export const shopId = process.env.YOOKASSA_SHOP_ID;
export const secretKey = process.env.YOOKASSA_SECRET_KEY;

export const verifyWebhookNotification = (event: any, headers: Headers): boolean => {
  if (!secretKey) return false;
  const signatureHeader = headers.get('X-Notification-Signature') || '';
  const hash = crypto.createHash('md5').update(JSON.stringify(event)).update(secretKey).digest('hex');
  return hash === signatureHeader;
};

export const getAuthHeaders = () => ({
  'Idempotence-Key': crypto.randomUUID(),
  'Content-Type': 'application/json',
}
