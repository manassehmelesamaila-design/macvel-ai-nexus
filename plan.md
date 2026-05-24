# Implementation Plan: Macvel Multiverse Portal

Build a high-impact, integrated web portal for Macvel Multiverse, connecting Technology, Entrepreneurship, Politics, Online Trading, and Education with integrated AI-driven simulations.

## Scope Summary
- **Home (Omniverse Portal)**: Landing page with trending feed and AI assistant search.
- **Macvel Tech Hub**: Software services and AI/VR trends.
- **Entrepreneurship & Politics**: Hub for business incubation and policy analysis.
- **Online Trading Platform**: Secure-feeling UI with live-style market data (stocks, crypto, forex).
- **Macvel Academy (Education)**: E-learning portal for digital careers.
- **Services & Updates**: Real-time newsroom/blog.
- **Macvel AI Assistant**: Integrated UI for News Aggregation, Tutoring, Trading Signals, and Business Advising.

## Non-Goals
- Real backend database persistence (using localStorage/mock data).
- Actual live trading execution (UI/Simulations only).
- Real AI model hosting (mocking AI responses or using client-side logic).

## Assumptions & Open Questions
- **Assumption**: A sidebar or top-navigation structure is best to handle the "Multiverse" pillars.
- **Assumption**: "Live" data for trading will be simulated or fetched from free public APIs if available, otherwise mocked.

## Affected Areas
- **Routing**: Setup `react-router-dom` for navigation between pillars.
- **Components**: Navigation, Layout, AI Chat Widget, Data Tables/Charts for Trading.
- **State Management**: Local state for the AI Assistant and simulated feeds.

---

## Phase 1: Foundation & Layout (frontend_engineer)
- Install `react-router-dom` and `lucide-react`.
- Create a global `Layout` component with a responsive Sidebar/Navbar representing the 5 pillars.
- Set up the routing structure in `App.tsx`.
- **Deliverable**: Functional navigation between empty placeholder pages for all pillars.

## Phase 2: Home & Core Pillars UI (frontend_engineer)
- **Home Page**: Hero section, "Omniverse" search bar, and a "Top Trends" grid.
- **Tech Hub**: Case study cards and "Tech Trend" horizontal scrollers.
- **Entrepreneurship & Politics**: Forum-style lists and policy roundtable cards.
- **Macvel Academy**: Course grid with categories and progress indicators (mock).
- **Deliverable**: High-fidelity UI for 4 out of 5 main sections.

## Phase 3: Trading Platform & Newsroom (frontend_engineer)
- **Trading Page**: Integrate `recharts` for market charts. Create a "Live Market" dashboard UI.
- **Newsroom**: A masonry layout for industry insights and political developments.
- **Deliverable**: Visually rich trading dashboard and dynamic-looking news feed.

## Phase 4: Macvel AI Assistant Integration (frontend_engineer)
- Create a floating AI Chat component accessible from any page.
- Implement "Context Awareness": The AI knows if you are on the "Trading" page (offers signals) or "Academy" (offers tutoring).
- Build the "Business Advisor" tool within the Entrepreneurship page.
- **Deliverable**: Interactive AI Assistant UI with simulated tool-specific responses.

## Phase 5: Polishing & Interactive Feedback (quick_fix_engineer)
- Add animations (Framer Motion) for page transitions.
- Ensure dark/light mode consistency across all pillars.
- Final UI tweaks for "High-Impact" visuals (gradients, glassmorphism).
- **Deliverable**: Polished, production-ready "Multiverse" experience.

---

## Sequencing Constraints
- Phase 1 is mandatory before any other work starts.
- Phase 4 depends on the specific page layouts from Phases 2 and 3 to provide "contextual" AI features.
