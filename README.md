# LocalLens — Hyperlocal Service Marketplace (Static Prototype)

This is a lightweight static prototype of LocalLens with a premium, minimal UI inspired by Apple and Airbnb. It includes:

- Home with AI-style search, clarifier chips, categories, and nearby verified providers
- Provider profile with verification badge, services, reviews, service history, and warranty tracker
- Payment (UPI) page with a clean flow and transaction history demo
- Review page with star rating, feedback, and photo uploads
- Language toggle (EN/HI/MR) with instant updates
- Responsive design for mobile and desktop

## Run locally

Open `locallens/index.html` directly in your browser, or serve the folder:

- Python: `python3 -m http.server 8000` and open `http://localhost:8000/locallens/`
- Node: `npx serve .` and open the `/locallens/` path

No build step required. Tailwind is included via CDN for simplicity.

## Notes

- This is a front-end only demo. Payments and AI are mocked for UX validation.
- To simulate a booking/payment: go to `provider.html` → Book now → Pay now.
- Switch languages via the top-right language selector.