# Napshine Cleaning Solutions

Mobile-first one-page website for residential and commercial cleaning across the GTA.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Resend API key for quote form emails |
| `RESEND_FROM_EMAIL` | Verified sender (e.g. `quotes@yourdomain.com`) |
| `OWNER_EMAIL` | Email address to receive quote notifications |
| `OPENAI_API_KEY` | Optional — enables AI-powered chatbot (fallback FAQ works without it) |

## Owner Configuration

Update business details in `src/config/site.ts` — phone, email, pricing, stats, and service areas.

## Deploy

Deploy to [Vercel](https://vercel.com) and connect your domain.
