import Stripe from '@/lib/stripe'

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY ?? '',
  {
    apiVersion: '2023-10-16',
    typescript: true,
  }
)