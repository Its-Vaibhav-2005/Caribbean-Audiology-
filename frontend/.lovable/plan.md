
# Caribbean Audiology Healthcare Ltd — Full Website Build

## Color System & Typography
- Apply the teal-based color palette (hue ~170°) to CSS variables with dark mode support
- Headings: **Playfair Display** (serif), Body: **Inter** (sans-serif) via Google Fonts

## Pages & Navigation

### 1. **Homepage**
- Hero section: "Welcome to Caribbean Audiology Healthcare Ltd" with CTA buttons (Book Appointment, Learn More)
- "Ask Yourself?" interactive awareness section (hearing loss questions from content)
- "Know Your Child?" section for pediatric awareness
- "Did You Know?" facts section
- Services overview grid (6 cards linking to services page)
- "Why Choose Us" highlights
- Newsletter signup footer section

### 2. **About Page**
- Multidisciplinary approach description
- Mission and goal statement from the document content

### 3. **Services Page**
- Individual sections for each service with expandable details:
  - Industrial Hearing Screening
  - Newborn Hearing Screening
  - Comprehensive Hearing Evaluations
  - Paediatric Services
  - Hearing Aid Fitting & Programming
  - Tinnitus Assessment & Treatment
  - Cochlear Implant Evaluations & Mapping
  - Bone Anchored Hearing Systems
  - Custom Molds for Hearing Protection/Swim Plugs

### 4. **Resources Page**
- FAQ accordion section
- Hearing Loss information
- Hearing Aids User Guide summary
- Links to articles/blog (placeholder)

### 5. **Contact Page**
- Contact form (name, email, phone, message)
- Location/address info placeholder
- Newsletter signup

### 6. **Login / Auth Page (OTP-based)**
- Email input → OTP verification (no password)
- For new users: onboarding form after first login (name, date of birth, phone number, gender)
- All auth is client-side UI with localStorage for now (no backend connected yet)

### 7. **User Dashboard** (protected, post-login)
- Welcome greeting with user name
- **Previous Appointments** list (date, service, status)
- **Book New Appointment** flow:
  1. Select preferred date (calendar picker)
  2. Select the problem/concern from a list (hearing loss, tinnitus, hearing aid fitting, pediatric evaluation, newborn screening, cochlear implant, custom ear molds, other)
  3. Add optional notes
  4. Confirmation screen
- Appointment history with status badges (Upcoming, Completed, Cancelled)

## Shared Components
- **Navbar**: Logo, nav links (Home, About, Services, Resources, Contact), Login/Dashboard button — mobile hamburger menu
- **Footer**: Quick links, contact info, newsletter signup, copyright
- **Fully responsive** across mobile, tablet, and desktop

## Data Management
- All data stored in localStorage for now (appointments, user profile)
- Structured so it can easily connect to Supabase later

## File Structure
- Pages: Index, About, Services, Resources, Contact, Login, Dashboard, NotFound
- Components: Navbar, Footer, Hero, ServiceCard, AppointmentForm, AppointmentList, OnboardingForm, OTPInput
