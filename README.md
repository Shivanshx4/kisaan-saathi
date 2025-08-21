# Kisaan Saathi 🌾  
**Empowering Farmers. Connecting Communities.**

Kisaan Saathi is a multilingual, AI-powered e-commerce platform that directly connects Indian farmers with consumers—eliminating middlemen, increasing trust, and ensuring fair prices for both parties. The website features a beautiful Indian flag-inspired design with smooth animations and modern user experience.

---

## 🎨 Design Features

- **Indian Flag Color Scheme:** 
  - Saffron (#FF9933) - Primary accent color
  - White (#FFFFFF) - Clean backgrounds and text
  - Green (#138808) - Primary action buttons and highlights
  - Navy Blue (#000080) - Text and secondary elements

- **Modern Animations:**
  - Smooth CSS transitions and hover effects
  - Scroll-triggered animations
  - Micro-interactions for enhanced user experience
  - Gradient backgrounds with subtle animations

- **Responsive Design:**
  - Mobile-first approach
  - Cross-browser compatibility
  - Accessible design with proper contrast ratios

---

## 🧠 Problem Statement
Small and marginal farmers face exploitation due to middlemen, lack of digital access, and language barriers. Consumers face inflated prices and poor transparency in sourcing. Kisaan Saathi bridges this gap with an inclusive, tech-forward solution.

---

## 🌟 Features

- 🎙️ **Voice-to-List:** Farmers can list products using voice input in Hindi, Marathi, Tamil, or English (powered by Whisper AI & GPT-4)
- 🗣️ **Multilingual Chatbot:** GPT-based assistant helps users navigate the platform in their language
- 📈 **AI Price Advisor:** Recommends fair pricing using market data
- 🛡️ **Scam Detection:** Behavioral analytics flag suspicious transactions
- 🌐 **Language-Adaptive UI:** Seamless experience in multiple languages
- 📱 **Mobile-First Design:** Optimized for rural mobile users
- 💰 **Secure Payments:** UPI and Razorpay integration
- 📊 **Dashboards:** Separate interfaces for farmers and consumers
- 🙋 **Help Desk:** AI-human hybrid support system

---

## 🛠️ Tech Stack

**Frontend:**
- React.js + Tailwind CSS
- i18next + React-i18next (for multilingual support)

**Backend:**
- Node.js + FastAPI (AI endpoints)
- PostgreSQL & MongoDB (databases)

**AI & NLP:**
- Whisper (voice to text)
- GPT-4 / GPT-3.5 (chatbot + listing help)
- Custom ML models (price prediction, fraud detection)
- spaCy (NLP moderation)

**Deployment:**
- AWS / DigitalOcean
- Auto-scaling, load balancing, CDN enabled

---

## 🧠 Architecture Overview
Frontend (React.js) <--> FastAPI (AI services) + Node.js (REST API) | | ↓ ↓ Voice-to-Text (Whisper) GPT-based chatbot | | Price Prediction Scam Detection Engine | | Database (PostgreSQL, MongoDB) ↓ Cloud (AWS/DigitalOcean)



---

## 📦 Datasets Used

- Agmarknet (Govt. agricultural market price API)
- Farmer co-operative logs (public sources)
- User activity logs (for ML fraud detection)
- Multilingual corpora (Hindi, Marathi, Tamil)
- Seasonal trends from open research datasets

---

## 🚀 Scalability

We’re launching pilots in **Bhopal and Indore**, but Kisaan Saathi’s modular and cloud-native design allows easy expansion to other languages, regions, and verticals like dairy and fisheries.

---

## 🛠️ Setup and Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd kisaan-saathi
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

### Build for Production

```bash
npm run build
npm start
```

### Project Structure

```
kisaan-saathi/
├── app/                    # Next.js 13+ app directory
│   ├── [lang]/            # Internationalization routes
│   │   ├── consumers/     # Consumer-specific pages
│   │   ├── farmers/       # Farmer-specific pages
│   │   ├── support/       # Support pages
│   │   └── globals.css    # Global styles with animations
├── components/            # Reusable React components
│   ├── ui/               # UI component library
│   └── ...               # Feature-specific components
├── lib/                  # Utility functions and configurations
│   ├── dictionaries/     # Translation files
│   └── utils.ts          # Helper functions
├── public/               # Static assets
└── styles/               # Additional stylesheets
```

### Key Features Implemented

1. **Multilingual Support:** English, Hindi, Marathi, and Tamil
2. **Responsive Design:** Works seamlessly on all devices
3. **Modern Animations:** Smooth transitions and micro-interactions
4. **Indian Flag Theme:** Patriotic color scheme throughout
5. **Farmer Dashboard:** Complete product and order management
6. **Consumer Marketplace:** Advanced filtering and search
7. **Support System:** FAQ and issue reporting
8. **SEO Optimized:** Proper meta tags and structured data

### Performance Optimizations

- Image optimization with Next.js Image component
- CSS animations using hardware acceleration
- Lazy loading for better performance
- Optimized bundle size with tree shaking

---

## 🔍 Open-Source AI Stack

| Tool           | Use Case                                  |
|----------------|-------------------------------------------|
| Whisper AI     | Voice transcription for illiterate users  |
| GPT-4 / GPT-3.5| Chatbot, product description generation    |
| PyTorch/TensorFlow | Custom ML models (pricing, fraud)     |
| FastAPI        | Serve AI endpoints efficiently            |
| spaCy          | Language processing for moderation        |
| i18next        | Frontend internationalization             |

---

## 📈 Impact Goals

- ✅ Raise farmer income by 25–30%
- ✅ Increase transparency in food sourcing
- ✅ Bring digital inclusion to rural India
- ✅ Enable safer agri-commerce with fraud detection

---

## 🛣️ Roadmap

- [ ] MVP completion (voice + multilingual support)
- [ ] Pilot launch in Bhopal & Indore
- [ ] Community feedback & iterative improvements
- [ ] Expand to more states/languages
- [ ] Add predictive analytics
- [ ] Open-source modules for rural tech adoption

---

## 🤝 Contributing

We welcome contributions from developers, designers, language experts, and agri-enthusiasts! Feel free to fork, raise issues, or submit pull requests.

---

## 📫 Contact

**Team:** decimals
**Lead:** Shivansh  
📧 shivanshchowdhary04@gmail.com 
🌐 https://www.linkedin.com/in/shivansh-chowdhary-838759314/

---


