# 📱 CustomCase - Personalized Phone Case E-Commerce


## 🚀 Overview

CustomCase lets customers create unique phone cases with their personal photos. Upload any image, position it perfectly on your chosen phone model, and see a real-time preview of your custom case before ordering. With high-quality materials and durable printing technology, your case will showcase your image while protecting your device.

Our platform features an intuitive drag-and-drop interface, supports multiple iPhone models (X-15), offers various materials and finishes, and provides secure checkout with order tracking.

## ✨ Features

- 📱 Support for multiple phone models (iPhone X through iPhone 15)
- 🎨 Intuitive image upload and customization interface
- 🔍 Real-time preview of your custom case design
- 🛒 Secure checkout with Stripe integration
- 👤 User authentication with Kinde Auth
- 📦 Order tracking and management
- 💾 Data persistence with PostgreSQL and Prisma ORM

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Authentication**: Kinde Auth
- **Database**: PostgreSQL with Prisma ORM
- **UI Components**: 
  - Tailwind CSS
  - Radix UI
  - Framer Motion
  - HeadlessUI
- **Image Storage**: UploadThing
- **Payment Processing**: Stripe
- **State Management**: React Query

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL database
- Stripe account
- Kinde Auth account
- UploadThing account

### Environment Setup

Create a `.env` file with the following variables:

```
# Database
DATABASE_URL="postgresql://..."

# Authentication
KINDE_CLIENT_ID="..."
KINDE_CLIENT_SECRET="..."
KINDE_ISSUER_URL="..."
KINDE_SITE_URL="..."
KINDE_POST_LOGOUT_REDIRECT_URL="..."
KINDE_POST_LOGIN_REDIRECT_URL="..."

# File Upload
UPLOADTHING_SECRET="..."
UPLOADTHING_APP_ID="..."

# Payment
STRIPE_SECRET_KEY="..."
STRIPE_WEBHOOK_SECRET="..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="..."
```

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ecomshop.git
cd ecomshop

# Install dependencies
npm install

# Set up the database
npx prisma migrate dev

# Start the development server
npm run dev
```

## 📝 Usage Flow

1. **Landing Page**: Users are greeted with a visually appealing landing page showcasing the product
2. **Upload**: Users upload their image of choice
3. **Customize**: Select phone model, case material, finish, and color
4. **Preview**: See a realistic preview of the final product
5. **Checkout**: Complete the purchase with shipping and payment details
6. **Order Tracking**: Track order status from processing to shipping

## 🚧 Project Structure

```
src/
├── app/               # Next.js app directory
│   ├── api/           # API routes
│   ├── auth-callback/ # Authentication handling
│   ├── configure/     # Configuration pages
│   └── page.tsx       # Landing page
├── components/        # Reusable components
├── lib/               # Utility functions
├── db/                # Database client and helpers
├── validators/        # Input validation schemas
└── config/            # Application configuration
```

## 📦 Deployment

This application can be easily deployed to Vercel:

```bash
npm run build
vercel --prod
```

## 🧩 API Endpoints

- `POST /api/create-checkout` - Create a checkout session
- `POST /api/webhook` - Handle Stripe webhook events
- `POST /api/uploadthing` - Handle file uploads
- `GET /api/orders` - Get user orders

## 🔒 Authentication

This project uses Kinde Auth for authentication, providing secure login and user management features.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- Next.js Team for the amazing framework
- Tailwind and Radix UI for beautiful components
- All open-source contributors whose libraries made this project possible
