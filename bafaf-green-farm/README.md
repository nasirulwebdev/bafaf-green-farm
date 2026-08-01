# 🌾 BAFAF Green Farm - Enterprise Smart Agro & Fisheries Platform

An advanced, production-ready, and high-performance commercial aquaculture and sustainable agriculture web ecosystem built using **React 19**, **Vite**, and **Tailwind CSS**. This platform architecture is heavily modularized into atomic components, utilizing custom hooks, universal dynamic filtering contexts, data encapsulation routers, and premium micro-interactions tailored for high-density agro-tech systems across Bangladesh.

---

## 🚀 Key Enterprise & Premium Features

*   **⚡ Premium Reflex Hover Architecture:** Synchronized card transformations utilizing elastic scaling (`scale-102`), border recoloring (`border-[#0B7A3E]`), custom active vector transitions, and soft mask shadows modeled from the unified "Our Premium Services" token framework.
*   **🐟 Deep Multi-Level Filtering & Mega Menus:** Highly responsive, asynchronous state filtering across nested sub-categories. Powered by professional responsive Navigation Mega Menus (`ProductsMegaMenu`, `ServicesMegaMenu`) for desktop rendering.
*   **📡 Centralized Data Isolation (Vite Glob Ingestion):** Decoupled business logic where UI layout views consume zero-import serialized dataset modules (`src/Data/`), seamlessly matching assets via internal helper layers.
*   **🛡️ Secure Route Airlocks & Global States:** Implemented robust multi-context providers (`AuthContext`, `ThemeContext`, `AppContext`) with specialized client-side route guard safety (`PrivateRoutes`).
*   **🛠️ Production Utility Toolchain:** Atomic global helpers (`Slugify.js`, `FormatDate.js`) combined with customized axios server interceptor instances (`UseAxios.js`) ensuring seamless enterprise scaling.

---

## 📂 Complete Project Architecture Directory

```text
src/
├── Assets/                 # Static Resource Airlocks
│   ├── Images/             # Production Section Backgrounds & Crop Images
│   ├── Icons/              # Customized Dynamic Action Vector Icons
│   ├── Videos/             # Live Farm Documentary Footage (.mp4)
│   ├── Fonts/              # Premium Enterprise Brand Typography
│   └── Logos/              # Official BAFAF Green Farm High-Res Vector Logos
│
├── Components/             # Atomic & Layout View Component Matrices
│   ├── Common/             # Reusable UI Wrappers & Micro-Elements
│   │   ├── Button.jsx          # Premium Action Core Button Trigger
│   │   ├── SectionTitle.jsx    # Unified Heading with Green Accent Underlines
│   │   ├── PageBanner.jsx      # Blurred Glass Background Page Banner
│   │   ├── Loader.jsx          # Custom Biosecure CSS Loading Animation
│   │   ├── JoinFamilyCTA.jsx   # Tractor Overlay Light Mask Green CTA Banner
│   │   ├── ScrollToTop.jsx     # Route Transition Screen Anchor Reset
│   │   ├── Breadcrumb.jsx      # Navigation Hierarchy Pointers Tracker
│   │   ├── Modal.jsx           # Fluid Lightbox Video/Image Layout Modal
│   │   └── Container.jsx       # Grid Bound Constraint Global Page Width Wrapper
│   ├── Navbar/             # Main Header Operations Controller
│   │   ├── Navbar.jsx          # TopBar Social Controller & Sticky Orchestrator
│   │   ├── Logo.jsx            # Responsive Brand Logo Vector Render
│   │   ├── ProductsMegaMenu.jsx # Multi-Column Product Quick Drop Grid
│   │   ├── ServicesMegaMenu.jsx # Multi-Column Premium Service Map Drop Grid
│   │   ├── MobileMenu.jsx      # Locked View Mobile Drawer Layout Menu
│   │   ├── HamburgerButton.jsx # Active Animate Hamburger Toggle Trigger
│   │   ├── DesktopMenu.jsx     # Navigation Target Base Inline Routing
│   │   └── CTAButton.jsx       # Global Corporate Header Action Inquiry Trigger
│   ├── Footer/             # Social Matrix & Compliance Copyright Footer
│   ├── Hero/               # Cinematic Home Banner Slider Carousel
│   ├── Home/               # Multi-Module Single Page Landing View Fragments
│   ├── About/              # Corporate Core Identity & Team Showcase
│   ├── Services/           # 8 Core Aquaculture & Engineering Service Slugs
│   ├── Products/           # 10 Consumer Commercial Grocery Category Slots
│   ├── Gallery/            # 56 Item Paginated Media Grid & Video Play Panels
│   ├── Contact/            # Get In Touch, Input Forms & Embedded Maps Iframe
│   └── FAQ/                # Category Filtering Tab Accordions & Desk Sidebars
│
├── Pages/                  # Root Structural Entry Router Layout Pages
│   ├── Home/About/Services/Products/Gallery/FAQ/Contact/NotFound
│
├── Layouts/                # Global Structural Template Layout
│   └── MainLayout.jsx      # Core Outer Skeleton Wrapper (Header + Main Body + Footer)
│
├── Routes/                 # Application Navigation Protection Gateways
│   ├── Routes.jsx          # Public Path Mapping Matrix
│   └── PrivateRoutes.jsx   # Secured Portal Access Guard Airlock
│
├── Hooks/                  # Functional Performance Custom Component Hooks
│   ├── UseAxios.js         # API Server Interceptor Endpoint Instance
│   ├── UseScrollTop.js     # Smooth Route Shift Vertical Offset Resetter
│   └── UseWindowSize.js    # Responsive Viewport Media Query Dimension Tracker
│
├── Context/                # Global State Enterprise Store Layer
│   ├── AppContext.jsx      # Global System Parameter State Management
│   ├── AuthContext.jsx     # Session Authorization Token Handshake Context
│   └── ThemeContext.jsx    # Corporate Color Tone UI Mode Variables Switcher
│
├── Services/               # Server Level Communication Protocols
│   └── Axios.js            # Axios Core Framework Configurations
│
├── Data/                   # Decoupled Encapsulated Master Business Datasets
│   ├── Home.js / About.js / Services.js / Products.js / Gallery.js 
│   └── Contact.js / Faq.js / Team.js / Testimonials.js
│
├── Utils/                  # Low-Level String Parsing & Array Transformation Helpers
│   ├── Constants.js / Helpers.js / Slugify.js / FormatDate.js
│
├── Styles/                 # Core Global Styling Context Sheets
│   ├── Index.css           # Tailwind Utility Core Tail Base Directives
│   ├── Theme.css           # Global CSS Custom Root Design Token Variables
│   └── Animation.css       # Premium Keyframe Matrix Animations (fade-in, pulse-slow)
│
├── App.jsx                 # Top-Level Context Orchestrator Provider Layout
└── Main.jsx                # DOM Injection Root Client Node Initialization
```
---

## 🛠️ Complete Technical Specifications Stack

*   **Core Logic Runtime Engine:** React 19 (Hooks Architecture, Advanced Context API)
*   **Compilation Build Bundler:** Vite 6+ (Lightning Fast Production Asset Compression)
*   **Styling Architecture:** Tailwind CSS v3 / v4 (Utility-First Responsive Grid Matrix)
*   **Routing System Engine:** React Router DOM v6+ (Dynamic Parameter & Nested Routing)
*   **Network Request Layer:** Axios Client Framework (Dynamic Interceptors & Error Handlers)
*   **Vector Engine Libraries:** React Icons (Font Awesome Pack Matrices)

---

## 💻 Local Workspace Launch & Installation

Ensure you have Node.js (v18+ or recommended LTS version) set up inside your local operating workspace before running terminal setups:

### 1. Initialize & Clone Repository
```bash
git clone https://github.com/nasirulwebdev/bafaf-green-farm
cd bafaf-green-farm
```

### 2. Standard Clean Node Dependency Setup
```bash
npm install
```

### 3. Initiate Vite Hot Module Replacement (HMR) Development Server
```bash
npm run dev
```
*The corporate development workspace will load instantly inside your local loop terminal at `http://localhost:5173`.*

### 4. Compile High-Compression Deployment Build Bundles
```bash
npm run build
```
*This processes your React code into compressed, highly optimized production assets ready for live server deployment under the root `dist/` directory.*

---

## ⚙️ Standard Developer Guidelines

### Modifying Base CSS Design Variables
To adapt structural colors, brand gradients, or global component animation frames without tampering with individual utility tags, edit the custom variable rules inside `src/Styles/Theme.css` and `src/Styles/Animation.css`:
```css
:root {
  --color-primary-green: #0B7A3E;
  --color-accent-lime: #A3D13A;
  --font-corporate: 'Sans-Serif', system-ui;
}
```

### Using Atomic Utilities
When developing new functional routes, utilize the unified helpers found inside `src/Utils/` to keep page strings consistent:
*   Use `Slugify.js` to parse raw service or product name tags directly into clean URL paths (e.g., `Pond Design & Construction` ➔ `pond-design-construction`).
*   Consume endpoints exclusively through the custom `UseAxios` instance hook inside `src/Hooks/` to automatically latch session validation tokens securely.

---

## 🔒 Security, Quality Assurance, and Systems Compliance

*   **Intelligent Viewport Padding Guardrails:** Every single page component wraps securely under dynamic view protection, allowing the fixed navigation header (`header.sticky`) to float seamlessly without overlapping content.
*   **State Locking Airlocks:** Input fields and form triggers (`ContactForm.jsx`) process parameters through system validation states (`isSubmitting`), completely eliminating infinite loops or duplicate data submission entries.
*   **Multi-Browser Compliance Matrix:** Fully optimized for seamless deployment and sharp visual rendering on Google Chrome, Safari, Mozilla Firefox, Microsoft Edge, and mobile viewports.

---

## 📄 Corporate License & Legal Notice

Distributed strictly under the Commercial Proprietary License. Copyright **© 2026 BAFAF Green Farm Corporation**. All Rights Reserved. Manufactured and engineered with peak precision to empower sustainable agriculture, digital training, and advanced aquaculture frameworks across Bangladesh.
