import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Briefcase, GraduationCap, Mail, Phone, Linkedin, Download, ExternalLink,
  TrendingUp, Calculator, Database, BarChart3, FileSpreadsheet, Award,
  Target, Building2, LineChart, PieChart, Layers, Shield, CheckCircle2,
  ArrowUpRight, Sparkles, BookOpen, Users, Zap, DollarSign,
  MessageCircle, Sun, Moon, Loader2, Send,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import kushalPhoto from "@/assets/kushal_profile.png";

const WHATSAPP_URL = "https://wa.me/918630097988?text=Hi%20Kushal,%20I%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect.";


export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Kushal Agarwal — Finance Portfolio" },
      { name: "description", content: "Investment Banking, Equity Research, FP&A, and Valuation portfolio by Kushal Agarwal." },
    ],
  }),
});

/* ---------- Data ---------- */

const NAV = [
  ["about", "About"],
  ["summary", "Summary"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["certifications", "Certifications"],
  ["achievements", "Achievements"],
  ["contact", "Contact"],
] as const;

type Project = {
  n: string;
  title: string;
  tag: string;
  problem: string;
  objective: string;
  concepts: string[];
  skills: string[];
  methodology: string[];
  insights: string[];
  impact: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
};

const PROJECTS: Project[] = [
  {
    n: "01",
    title: "IPO Analysis Model",
    tag: "Equity Research · Valuation",
    icon: TrendingUp,
    problem:
      "Retail and institutional investors lack a consistent, quantitative framework to evaluate the flood of Indian IPOs, often relying on sentiment rather than fundamentals.",
    objective:
      "Build an Excel-based IPO screening engine using a five-factor evaluation framework to score and rank IPOs objectively.",
    concepts: ["DCF Valuation", "WACC", "Peer Comparables", "Financial Forecasting", "Sensitivity Analysis"],
    skills: ["Advanced Excel", "Financial Modelling", "Statement Analysis"],
    methodology: [
      "Defined five investment factors: valuation, growth, profitability, leverage, and governance.",
      "Built a standardized input sheet feeding a weighted scoring engine.",
      "Layered DCF and comparable-company valuation for cross-verification.",
      "Automated sensitivity tables on growth rate and WACC.",
    ],
    insights: [
      "Standardised scoring cut IPO shortlisting time by ~70%.",
      "Framework flagged over-valued issues where implied growth exceeded sector median by 3x.",
      "Data-driven output replaced narrative bias in decision-making.",
    ],
    impact:
      "Enabled a repeatable, defensible IPO evaluation process usable across sectors — mirrors the buy-side screening workflow used at institutional funds.",
    link: "https://docs.google.com/spreadsheets/d/1EYGj7d5KGodkOkkWW1JtibcP4moA0Ldc/edit?usp=drive_link",
  },
  {
    n: "02",
    title: "DCF Valuation — Asian Paints",
    tag: "Equity Valuation · FMCG",
    icon: Calculator,
    problem:
      "Asian Paints trades at premium multiples; investors need to know whether cash-flow fundamentals justify the current market price.",
    objective:
      "Determine intrinsic value using a full three-statement DCF and compare to market price.",
    concepts: ["DCF", "FCFF", "WACC", "Terminal Value", "Sensitivity Analysis"],
    skills: ["Financial Forecasting", "Statement Analysis", "Advanced Excel"],
    methodology: [
      "Projected revenue, EBITDA and free cash flow over a 5-year explicit horizon.",
      "Computed WACC from CAPM, cost of debt, and target capital structure.",
      "Applied Gordon growth model for terminal value.",
      "Built two-way sensitivity on WACC vs. terminal growth.",
    ],
    insights: [
      "Base-case intrinsic value indicated stock trades at a premium to fundamentals.",
      "Valuation is highly sensitive to terminal growth — ±50 bps shifts value by ~12%.",
      "Margin expansion, not volume, is the dominant value driver.",
    ],
    impact:
      "Produced an institutional-grade valuation note usable for a research desk BUY/HOLD/SELL recommendation.",
    link: "https://docs.google.com/spreadsheets/d/1CU7lHBq8E7Y-ClYDcmqj3aKLX2ARQaLN/edit?usp=drive_link&ouid=101696075267754888188&rtpof=true&sd=true",
  },
  {
    n: "03",
    title: "DCF Valuation — KPIT Technologies",
    tag: "Equity Valuation · Auto-Tech",
    icon: LineChart,
    problem:
      "KPIT operates in a high-growth automotive software niche where multiples are stretched and cash-flow visibility is limited.",
    objective:
      "Estimate intrinsic value using projected FCF and stress-test against market expectations.",
    concepts: ["DCF", "FCFF", "WACC", "Terminal Value", "Scenario Analysis"],
    skills: ["Financial Forecasting", "Advanced Excel", "Screener Data"],
    methodology: [
      "Built revenue model tied to auto-OEM software spend growth.",
      "Forecasted EBITDA margin trajectory and reinvestment needs.",
      "Discounted FCFF at WACC to derive enterprise and equity value.",
      "Ran bull/base/bear scenarios on discount rate and terminal growth.",
    ],
    insights: [
      "Market price implies terminal growth of ~6% — well above global GDP.",
      "Stock appears richly valued unless margin expansion materialises.",
      "Reinvestment rate is the swing variable, not top-line growth.",
    ],
    impact:
      "Delivered a defensible valuation view on a consensus-crowded name; directly relevant to sell-side and buy-side tech coverage.",
    link: "https://docs.google.com/spreadsheets/d/1LNJsv3d6Hw4PsIEHWpvMGT-RavRA2Y5B/edit?usp=drive_link",
  },
  {
    n: "04",
    title: "M&A Financial Model",
    tag: "Investment Banking · M&A",
    icon: Layers,
    problem:
      "Boards need clear evidence that a proposed transaction creates shareholder value before committing capital.",
    objective:
      "Build a fully integrated merger model with synergies and accretion/dilution analysis.",
    concepts: ["Accretion/Dilution", "Synergy Modelling", "Purchase Accounting", "Pro-forma Financials"],
    skills: ["M&A Modelling", "Advanced Excel", "Corporate Finance"],
    methodology: [
      "Assembled standalone financials for acquirer and target.",
      "Modelled deal structure: cash/stock mix, transaction fees, financing.",
      "Layered cost and revenue synergies with phased realisation.",
      "Computed pro-forma EPS and tested accretion/dilution across scenarios.",
    ],
    insights: [
      "Deal is accretive from Year 2 assuming 60% synergy realisation.",
      "All-stock structure dilutes EPS by ~4% at close but reverses by Year 3.",
      "Value creation is synergy-led, not multiple-arbitrage-led.",
    ],
    impact:
      "Mirrors a live IB pitch-deck exhibit — sufficient to defend deal rationale to a CFO or board committee.",
    link: "https://docs.google.com/spreadsheets/d/1cYuD-Bgf-_6s8y_jOruOpAuSMaRRkOL6/edit?usp=drive_link",
  },
  {
    n: "05",
    title: "Income, Tax & SIP Planner",
    tag: "Personal Finance · FP&A",
    icon: PieChart,
    problem:
      "Individuals struggle to integrate budgeting, Indian income-tax rules, and long-term investing into a single decision framework.",
    objective:
      "Build a unified Excel dashboard for budgeting, tax computation, and SIP planning.",
    concepts: ["Personal Cash-flow", "Indian Income Tax", "SIP Compounding", "Scenario Modelling"],
    skills: ["Advanced Excel", "Dashboard Design", "Financial Planning"],
    methodology: [
      "Dynamic 50/30/20-style budget engine with user-defined weights.",
      "Automated tax computation across old vs. new regime slabs.",
      "SIP calculator with variable tenure, return, and step-up inputs.",
      "Unified dashboard with real-time scenario toggles.",
    ],
    insights: [
      "Regime-switch alone can save up to ₹35–₹75k p.a. depending on deductions.",
      "Step-up SIPs of 10% p.a. outperform flat SIPs by ~28% over 15 years.",
      "Consolidated view drives better savings-rate discipline.",
    ],
    impact:
      "Client-ready personal-finance planning tool — same logic used by wealth-advisory FP&A teams.",
    link: "https://docs.google.com/spreadsheets/d/1fgwjfQTn306BvCMH-NehU6aqirk0cNv9/edit?usp=drive_link",
  },
  {
    n: "06",
    title: "Equity Research Dashboard",
    tag: "Equity Research · Dashboard",
    icon: BarChart3,
    problem:
      "Equity investors and research analysts need a consolidated, at-a-glance view of market data, key financial ratios, and trend signals to move faster than narrative-driven decisions.",
    objective:
      "Build a live Excel dashboard that captures market data, financial metrics, and research signals in one interactive view.",
    concepts: ["Equity Research", "Market Data", "Financial Ratios", "Trend Analysis", "Dashboard Design"],
    skills: ["Advanced Excel", "Data Visualization", "Screener Data", "KPI Design"],
    methodology: [
      "Aggregated market and financial data into a structured master dataset.",
      "Designed KPI cards and trend charts for price, valuation, and volume signals.",
      "Built interactive filters for sector, market cap, and time period.",
      "Applied conditional formatting to flag momentum and valuation outliers.",
    ],
    insights: [
      "Dashboard consolidates multi-stock signals into a single research view.",
      "Visual trend layers reduce stock-screening time by ~60%.",
      "Ratio flags surface divergence between price action and fundamentals.",
    ],
    impact:
      "A self-serve research dashboard aligned with the daily workflow of sell-side and buy-side equity analysts.",
    link: "https://docs.google.com/spreadsheets/d/1N9TNm8lrBmjvSko-63W9RINfE5nlYH9M/edit?usp=drive_link&ouid=101696075267754888188&rtpof=true&sd=true",
  },
  {
    n: "07",
    title: "Mobile Brand Sales Dashboard",
    tag: "FP&A · Business Intelligence",
    icon: PieChart,
    problem:
      "Sales leadership lacked a single view of brand-level revenue and profitability across regions.",
    objective:
      "Build an interactive Excel dashboard to surface performance KPIs for mobile brands.",
    concepts: ["Revenue Analytics", "Profitability", "Regional Performance", "KPI Design"],
    skills: ["Pivot Tables", "Slicers", "XLOOKUP", "Dashboard Design"],
    methodology: [
      "Cleansed and structured multi-region sales data.",
      "Built pivot-driven KPIs: revenue, margin, unit share.",
      "Added slicers for brand, region, and period.",
      "Automated conditional formatting for outlier detection.",
    ],
    insights: [
      "Top-3 brands drive ~72% of revenue but only 58% of profit.",
      "Tier-2 regions show highest margin per unit — under-served opportunity.",
      "Manual monthly reporting cycle compressed from days to minutes.",
    ],
    impact:
      "Delivers the exact self-serve reporting layer that FP&A and commercial-finance teams operate on.",
    link: "https://docs.google.com/spreadsheets/d/1wTdjspYLYtR6YkXp8wFnEZWIRDHcfy1A/edit?usp=drive_link",
  },
  {
    n: "08",
    title: "SQL — Employee Database System",
    tag: "Data · Analytics",
    icon: Database,
    problem:
      "HR and finance teams need reliable workforce analytics — headcount cost, department performance, and demographics — from raw employee data.",
    objective:
      "Design a normalized SQL database and query layer for workforce insights.",
    concepts: ["Relational Design", "Normalization", "Aggregation", "Joins"],
    skills: ["MySQL", "SQL", "Database Design", "Data Analysis"],
    methodology: [
      "Modelled entities: employee, department, location, performance.",
      "Enforced primary/foreign keys and referential integrity.",
      "Wrote analytical queries with GROUP BY, JOIN, window logic.",
      "Delivered ready-to-use views for reporting.",
    ],
    insights: [
      "Identified salary compression in mid-tenure bands.",
      "Quantified department-level cost-to-performance ratios.",
      "Enabled self-serve HR analytics without spreadsheet exports.",
    ],
    impact:
      "Foundation of a workforce-cost analytics stack used across corporate finance and HR business partnering.",
    link: "https://drive.google.com/file/d/1z23WxfwfavKb56F8J9lhNKbKw9pT9SeF/view?usp=drive_link",
  },
  {
    n: "09",
    title: "Tableau — Global Mobile Sales",
    tag: "BI · Data Visualization",
    icon: Layers,
    problem:
      "Global sales leadership had no interactive view of brand performance by country and channel.",
    objective:
      "Build an interactive Tableau dashboard for global mobile brand sales, profit, and growth.",
    concepts: ["KPI Design", "Geo Analytics", "Interactive Filters", "Storytelling"],
    skills: ["Tableau", "Data Visualization", "BI"],
    methodology: [
      "Prepared and modelled multi-country sales dataset.",
      "Built country-map, brand comparison, and growth trend views.",
      "Wired filters and parameters for on-the-fly analysis.",
      "Applied consistent KPI card design.",
    ],
    insights: [
      "Three markets contribute >50% of total profit despite <30% revenue.",
      "Fast-growing markets are margin-dilutive — pricing intervention needed.",
      "Interactive dashboard replaced 12 static monthly reports.",
    ],
    impact:
      "Executive-grade BI artefact of the kind used by strategy and commercial-finance teams to steer P&L.",
    link: "https://drive.google.com/file/d/1eKl66pfihE3udcoXfSJpwHfhNKyJyv-B/view?usp=drive_link",
  },
];

const WEBSITES = [
  {
    name: "India Finance Tools",
    url: "https://india-finance-tools-ztno.bolt.host",
    tagline: "Live calculators for CTC, income tax, EMI, SIP & GST — built for FY 2025-26.",
    tags: ["CTC Calculator", "Tax Planner", "EMI", "SIP", "GST"],
    icon: Calculator,
  },
  {
    name: "FinSight AI",
    url: "https://finsight-ai-new.vercel.app/",
    tagline: "Equity research platform with watchlists, share analysis, valuation & DCF workflows.",
    tags: ["Watchlists", "Share Analysis", "Valuation", "DCF", "Portfolio"],
    icon: TrendingUp,
  },
];

const SKILLS = [
  { group: "Valuation & Modelling", items: ["DCF Valuation", "M&A Modelling", "IPO Analysis", "Financial Modelling", "Sensitivity Analysis", "WACC / CAPM"] },
  { group: "Corporate Finance & FP&A", items: ["Three-Statement Modelling", "Budgeting & Forecasting", "Variance Analysis", "Scenario Planning", "KPI Design"] },
  { group: "Data & BI", items: ["Advanced Excel", "SQL (MySQL)", "Tableau", "Airtable", "Dashboarding"] },
  { group: "ERP & Systems", items: ["SAP FICO", "SAP MM", "E-Filing"] },
];

const CERTS = [
  { name: "SAP FICO", desc: "Financial Accounting & Controlling module — ERP finance workflows.", link: "https://drive.google.com/file/d/1WIwTuTXvOaHWRdqtATNurWe_6bMu7x86/view?usp=drive_link" },
  { name: "SAP MM", desc: "Materials Management module — procure-to-pay processes.", link: "https://drive.google.com/file/d/1Pd_PQ2iyYHbwTne53BC5Aihzr_pMPVCx/view?usp=drive_link" },
  { name: "SQL", desc: "Relational database design and analytical querying.", link: "https://drive.google.com/file/d/1FnTTaXG5o6jOJslLrrGnMDn17HJ8bQzE/view?usp=drive_link" },
  { name: "Tableau", desc: "Business intelligence and interactive dashboarding.", link: "https://drive.google.com/file/d/1_L_udq8gGEwaRkMJtosoxAbmpTsfP8aY/view?usp=drive_link" },
  { name: "Advanced Excel", desc: "Complex formulas, modelling and dashboarding.", link: "https://drive.google.com/file/d/1OyjmVWOh9riSOd0lNpSe7RC_rAwznBv-/view?usp=drive_link" },
  { name: "Technical Analysis", desc: "Charting and technical study of equity markets.", link: "https://drive.google.com/file/d/1nonh39oEA2yO6cEXPySWzWkRlwDNPRZ3/view?usp=drive_link" },
  { name: "Airtable", desc: "Relational no-code operations and workflow design.", link: "https://drive.google.com/file/d/1-pHeG80-TV8L660mG_bhjiSMHCt032Pe/view?usp=drive_link" },
  { name: "NISM Series XII", desc: "SEBI-recognised securities market certification.", link: "https://drive.google.com/file/d/1SDMIIFxvVjG0rd6FT2m4qLhoekyFbWhs/view?usp=drive_link" },
  { name: "Citi — IB Simulation (Forage)", desc: "Investment banking pitch and valuation simulation.", link: "https://drive.google.com/file/d/1mm0WCFOlX3AZUAirMHJ5PjYS3-OYqtGU/view?usp=drive_link" },
  { name: "Bank of America — IB Simulation (Forage)", desc: "M&A and financial analysis job simulation.", link: "https://drive.google.com/file/d/1SEFCnXae5pwEjR5iIdcnvf0Dx4ZkoQBw/view?usp=drive_link" },
  { name: "Cambridge University — Soft Skills", desc: "Professional communication and workplace effectiveness.", link: "https://drive.google.com/file/d/1RZjkqCbR3rlYlzZUW9t24U251vmECyQq/view?usp=drive_link" },
  { name: "E-Filing Training", desc: "Direct-tax e-filing and compliance workflows.", link: "https://drive.google.com/file/d/11W4sM8ik42hzFqmyThoS_qziE4ltWzte/view?usp=drive_link" },
  { name: "Prompt Engineering", desc: "Applied LLM prompting for analytical workflows.", link: "https://drive.google.com/file/d/1rn6IBwinEPSrCHYEZD3I_SHy9LHSKkPu/view?usp=drive_link" },
];

/* ---------- Small UI helpers ---------- */

function SectionHeader({ eyebrow, title, kicker }: { eyebrow: string; title: string; kicker?: string }) {
  return (
    <div className="mb-12 max-w-3xl">
      <div className="flex items-center gap-3 mb-4">
        <span className="h-px w-10 bg-navy" />
        <span className="text-xs tracking-[0.28em] uppercase text-navy font-semibold">{eyebrow}</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-navy-deep leading-tight">{title}</h2>
      {kicker && <p className="mt-4 text-slate-600 text-lg leading-relaxed">{kicker}</p>}
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-navy-deep border border-slate-200">
      {children}
    </span>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white border border-slate-200 rounded-lg shadow-[0_1px_0_rgba(15,23,42,0.04),0_20px_40px_-24px_rgba(15,23,42,0.15)] ${className}`}>
      {children}
    </div>
  );
}

/* ---------- Page ---------- */

function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-navy-deep font-sans">
      {/* Top Nav */}
      <nav
        data-portfolio-nav
        className="sticky top-0 z-50 backdrop-blur-md bg-white/85 border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="w-8 h-8 gradient-navy rounded-sm flex items-center justify-center text-white font-bold text-sm">KA</span>
            <span className="font-display font-semibold text-navy-deep">Kushal Agarwal</span>
          </a>
          <div className="hidden lg:flex items-center gap-6 text-sm">
            {NAV.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="text-slate-600 hover:text-navy transition-colors">{label}</a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              data-no-print
              className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full text-white bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-600 hover:scale-105 transition-transform shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-sm text-sm font-medium hover:bg-navy-deep transition-colors"
            >
              <Download className="w-4 h-4" /> Export PDF
            </button>
          </div>

        </div>
      </nav>

      {/* Cover */}
      <section id="top" className="relative overflow-hidden gradient-navy text-white">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }} />
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-28 md:pt-32 md:pb-36 grid md:grid-cols-[1fr_auto] gap-14 items-center">
          <div>
          <div className="flex items-center gap-3 text-xs tracking-[0.35em] uppercase text-white/70 mb-8">
            <span className="h-px w-10 bg-gold" />
            Finance Portfolio · 2026
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight">
            Kushal<br />Agarwal
          </h1>
          <div className="mt-8 h-px w-24 hairline-gold" />
          <p className="mt-8 text-xl md:text-2xl text-white/85 max-w-2xl font-light leading-relaxed">
            MBA Finance · Valuation, M&A and FP&A analyst building
            institutional-grade financial models and dashboards.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
            {[
              ["11+", "Live Projects"],
              ["13", "Certifications"],
              ["2 yrs", "Finance Experience"],
              ["6+", "Valuation Models"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-4xl font-semibold text-gold">{k}</div>
                <div className="text-sm text-white/70 mt-1">{v}</div>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-white/70">
            {["Investment Banking", "Equity Research", "Corporate Finance", "FP&A", "Valuation"].map(t => (
              <span key={t} className="px-3 py-1.5 border border-white/25 rounded-full">{t}</span>
            ))}
          </div>
          </div>
          <div className="relative shrink-0 justify-self-center md:justify-self-end">
            <div className="absolute -inset-3 border border-gold/40 rounded-sm" aria-hidden />
            <div className="absolute -bottom-3 -right-3 h-24 w-24 bg-gold/20 rounded-sm" aria-hidden />
            <img
              src={kushalPhoto}
              alt="Portrait of Kushal Agarwal"
              className="relative w-56 md:w-72 aspect-[3/4] object-cover object-top rounded-sm shadow-2xl grayscale-[15%]"
            />
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6">
        {/* About */}
        <section id="about" className="py-24 grid md:grid-cols-3 gap-12">
          <SectionHeader eyebrow="01 · Profile" title="About Me" />
          <div className="md:col-span-2 space-y-6 text-slate-700 leading-relaxed text-[15px]">
            <p>
              I am a finance professional with an MBA in Finance & Operations and a B.Com (Hons),
              specialising in <span className="text-navy font-semibold">valuation, M&A modelling, and corporate finance analysis</span>.
              I combine two years of hands-on finance operations experience with a 3-month internship
              completed at a Chartered Accountant firm in Ghaziabad, giving me both the discipline of ledger-level accuracy
              and the strategic lens of a research analyst.
            </p>
            <p>
              My work bridges rigorous financial modelling with data storytelling —
              from three-statement DCFs on Asian Paints and KPIT Technologies, to full merger models
              with accretion/dilution analysis, to interactive dashboards and Tableau visualisations steering commercial P&L decisions.
            </p>
            <p>
              I am seeking opportunities in <span className="text-navy font-semibold">Investment Banking,
              Equity Research, Corporate Finance, FP&A, and Valuation</span> where analytical depth,
              modelling craft, and structured problem-solving translate directly into business value.
            </p>
            <div className="pt-4 grid sm:grid-cols-2 gap-4">
              <InfoRow icon={GraduationCap} label="Education" value="MBA (Finance & Operations) · B.Com (Hons)" />
              <InfoRow icon={Briefcase} label="Experience" value="2 yrs + 3 mo — Finance Executive + CA Internship" />
              <InfoRow icon={Building2} label="Focus" value="IB · ER · FP&A · Valuation" />
              <InfoRow icon={Sparkles} label="Availability" value="Open to full-time opportunities" />
            </div>
          </div>
        </section>

        <Divider />

        {/* Career Summary */}
        <section id="summary" className="py-24">
          <SectionHeader
            eyebrow="02 · Career Summary"
            title="A finance analyst built for the modern deal desk"
            kicker="Grounded in accounting fundamentals, sharpened by modelling craft, and fluent in the BI and ERP tooling that defines today's finance function."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Calculator, title: "Modelling Craft", body: "DCF, M&A accretion/dilution, IPO scoring frameworks and three-statement builds — all with clean, auditable Excel architecture." },
              { icon: LineChart, title: "Research Lens", body: "Equity research approach: base/bull/bear scenarios, sensitivity tables, and buy/hold/sell logic anchored to fundamentals." },
              { icon: Zap, title: "Data & Systems", body: "SQL, Tableau, Airtable, SAP FICO and MM — the stack modern FP&A and corporate-finance teams operate on." },
            ].map(({ icon: Icon, title, body }) => (
              <Card key={title} className="p-8">
                <div className="w-10 h-10 rounded-sm bg-navy/5 text-navy flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-navy-deep mb-3">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
              </Card>
            ))}
          </div>
        </section>

        <Divider />

        {/* Skills */}
        <section id="skills" className="py-24">
          <SectionHeader eyebrow="03 · Technical Skills" title="Toolkit of a modern finance analyst" />
          <div className="grid md:grid-cols-2 gap-6">
            {SKILLS.map(g => (
              <Card key={g.group} className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-6 bg-gold" />
                  <h3 className="text-lg font-semibold text-navy-deep">{g.group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map(i => <Chip key={i}>{i}</Chip>)}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Divider />

        {/* Experience */}
        <section id="experience" className="py-24">
          <SectionHeader eyebrow="04 · Experience" title="Work & Internship" />
          <div className="space-y-6">
            <ExpBlock
              role="Finance Executive"
              org="Jai Durga Traders"
              period="2 years"
              type="Full-time"
              certificateLink="https://drive.google.com/file/d/1eIpIACuZ7DrQPU8SNLIgJljPGqE4jioo/view?usp=drivesdk"
              bullets={[
                "Owned end-to-end bookkeeping, reconciliation, and vendor / customer ledgers.",
                "Prepared GST filings, TDS workings and month-end MIS for management review.",
                "Streamlined receivables tracking — reduced overdue days through disciplined follow-up.",
                "Built Excel-based P&L and cash-flow trackers used for internal decision-making.",
              ]}
            />
            <ExpBlock
              role="Finance Intern"
              org="Chartered Accountant Firm — Ghaziabad"
              period="3 months"
              type="Internship (Completed)"
              certificateLink="https://drive.google.com/file/d/1zuSTwRmDcO47nPcx60fecPhVgkNE4Cq6/view?usp=sharing"
              bullets={[
                "Completed statutory audit fieldwork including vouching, ledger scrutiny, and analytical review.",
                "Prepared direct- and indirect-tax computations, returns and reconciliations.",
                "Assisted in financial statement finalisation under Ind-AS / Indian GAAP.",
                "Drafted client MIS and variance commentary for review by the CA partner.",
              ]}
            />
          </div>
        </section>

        <Divider />

        {/* Projects */}
        <section id="projects" className="py-24">
          <SectionHeader
            eyebrow="05 · Signature Projects"
            title="Financial models & analyses"
            kicker="Every project is a full analytical artefact — problem, methodology, insight, and business impact. Not tutorials, not demos."
          />
          <div className="space-y-16">
            {PROJECTS.map(p => <ProjectBlock key={p.n} p={p} />)}
          </div>

          {/* Live websites */}
          <div className="mt-24">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-navy" />
                <span className="text-xs tracking-[0.28em] uppercase text-navy font-semibold">Built & Deployed</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-navy-deep leading-tight">Live web platforms</h3>
              <p className="mt-3 text-slate-600 text-lg leading-relaxed">Interactive finance tools and research products shipped as live websites.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {WEBSITES.map(w => (
                <GalleryCard
                  key={w.name}
                  title={w.name}
                  subtitle={w.tagline}
                  tags={w.tags}
                  link={w.url}
                  icon={w.icon}
                />
              ))}
            </div>
          </div>
        </section>

        <Divider />


        {/* Certifications */}
        <section id="certifications" className="py-24">
          <SectionHeader
            eyebrow="06 · Certifications"
            title="Verified credentials & continuous learning"
            kicker="Completed certifications plus a management-accounting qualification in progress."
          />

          {/* In-progress credential */}
          <div className="mb-10">
            <Card className="p-1 overflow-hidden border-transparent">
              <div className="gradient-navy rounded-md p-8 md:p-10 text-white flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-14 h-14 rounded-sm bg-white/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-xl md:text-2xl font-semibold">Certified Management Accountant (CMA)</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-gold text-navy-deep">In Progress</span>
                  </div>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-3xl">
                    Preparing for the CMA program — strengthening management accounting, financial planning & analysis,
                    performance management, cost optimisation, and strategic decision-making for corporate finance roles.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTS.map(c => (
              <Card key={c.name} className="p-6 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-sm bg-navy/5 text-navy flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                </div>
                <h3 className="font-semibold text-navy-deep leading-snug mb-2">{c.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">{c.desc}</p>
                <a href={c.link} target="_blank" rel="noopener noreferrer"
                   className="mt-5 inline-flex items-center gap-1.5 text-sm text-navy font-medium hover:text-gold transition-colors">
                  Verify certificate <ArrowUpRight className="w-4 h-4" />
                </a>
              </Card>
            ))}
          </div>
        </section>

        <Divider />

        {/* Achievements */}
        <section id="achievements" className="py-24">
          <SectionHeader eyebrow="07 · Achievements" title="Milestones" />
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: Shield, title: "NISM Series XII Certified", body: "SEBI-recognised securities market qualification." },
              { icon: BookOpen, title: "Two IB Simulations Completed", body: "Citi and Bank of America Investment Banking Forage programs." },
              { icon: Users, title: "Cambridge Soft-Skills Trained", body: "Formal certification in professional communication." },
              { icon: Target, title: "11 Live Finance Projects Shipped", body: "Valuation, M&A, IPO analysis, equity research dashboards, BI, personal-finance tools, and web platforms." },
              { icon: FileSpreadsheet, title: "Multi-Stack Analytics Fluency", body: "Excel, SQL, Tableau, Airtable and SAP (FICO + MM)." },
              { icon: Sparkles, title: "Consistent Modelling Discipline", body: "Every model is auditable, assumption-driven and scenario-tested." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-5 p-6 bg-slate-50/60 border border-slate-200 rounded-lg">
                <div className="w-10 h-10 rounded-sm bg-navy text-white flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-deep mb-1">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Contact */}
        <section id="contact" className="py-24">
          <div className="gradient-navy rounded-lg text-white p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10 gradient-gold rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 text-xs tracking-[0.28em] uppercase text-white/70 mb-4">
                <span className="h-px w-10 bg-gold" /> 08 · Contact
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Let's build the next model together.
              </h2>
              <p className="text-white/80 max-w-2xl mb-10 text-lg font-light">
                Open to Investment Banking, Equity Research, Corporate Finance,
                FP&A and Valuation roles across India and global markets.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-10">
                <ContactCard icon={Mail} label="Email" value="kush29681@gmail.com" href="mailto:kush29681@gmail.com" />
                <ContactCard icon={Phone} label="Phone" value="+91 86300 97988" href="tel:+918630097988" />
                <ContactCard icon={Linkedin} label="LinkedIn" value="Kushal Agarwal" href="https://www.linkedin.com/in/kushal-agarwal-7b5a1b372" />
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Kushal Agarwal · Finance Portfolio · Crafted for institutional-grade opportunities.
      </footer>

      {/* Floating WhatsApp FAB */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Kushal on WhatsApp"
        data-no-print
        className="fixed bottom-6 right-6 z-[100] flex items-center justify-center w-14 h-14 rounded-full text-white bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-600 shadow-[0_10px_30px_-8px_rgba(99,102,241,0.6)] hover:scale-110 hover:shadow-[0_16px_40px_-8px_rgba(99,102,241,0.8)] transition-all duration-200"
      >
        <MessageCircle className="w-6 h-6" strokeWidth={2.2} />
        <span className="absolute inset-0 rounded-full animate-ping bg-purple-500/30" aria-hidden />
      </a>

      <Toaster />
    </div>
  );
}


/* ---------- Sub components ---------- */

function Divider() {
  return <div className="h-px bg-slate-200 max-w-7xl mx-auto" data-no-print />;
}

function InfoRow({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 p-4 border border-slate-200 rounded-md bg-slate-50/60">
      <Icon className="w-4 h-4 text-navy mt-0.5" />
      <div>
        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">{label}</div>
        <div className="text-sm text-navy-deep font-medium">{value}</div>
      </div>
    </div>
  );
}

function ExpBlock({ role, org, period, type, certificateLink, bullets }: { role: string; org: string; period: string; type: string; certificateLink?: string; bullets: string[] }) {
  return (
    <Card className="p-8">
      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <div className="text-xs uppercase tracking-widest text-gold font-semibold mb-2">{type}</div>
          <div className="text-sm text-slate-500">{period}</div>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-xl font-semibold text-navy-deep">{role}</h3>
          <div className="text-navy text-sm font-medium mb-4">{org}</div>
          <ul className="space-y-2 text-slate-600 text-sm leading-relaxed">
            {bullets.map(b => (
              <li key={b} className="flex gap-2.5">
                <span className="text-gold mt-1.5">▪</span><span>{b}</span>
              </li>
            ))}
          </ul>
          {certificateLink && (
            <a
              href={certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-navy font-medium hover:text-gold transition-colors"
            >
              View completion certificate <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}

function ProjectBlock({ p }: { p: Project }) {
  const Icon = p.icon;
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-12">
        {/* Left rail */}
        <div className="md:col-span-4 gradient-navy text-white p-8 md:p-10 relative">
          <div className="absolute top-6 right-6 text-white/20 font-mono text-sm">{p.n}</div>
          <div className="w-12 h-12 rounded-sm bg-white/10 flex items-center justify-center mb-6">
            <Icon className="w-6 h-6" />
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">{p.tag}</div>
          <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-6">{p.title}</h3>
          <div className="h-px w-12 bg-gold mb-6" />
          <p className="text-white/80 text-sm leading-relaxed mb-8">{p.impact}</p>
          <a href={p.link} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-navy-deep rounded-sm text-sm font-semibold hover:bg-gold hover:text-navy-deep transition-colors">
            <ExternalLink className="w-4 h-4" /> View Project
          </a>
        </div>

        {/* Right content */}
        <div className="md:col-span-8 p-8 md:p-10 space-y-6">
          <ProjectField label="Business Problem" body={p.problem} />
          <ProjectField label="Objective" body={p.objective} />

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <FieldLabel>Financial Concepts</FieldLabel>
              <div className="flex flex-wrap gap-1.5 mt-2">{p.concepts.map(c => <Chip key={c}>{c}</Chip>)}</div>
            </div>
            <div>
              <FieldLabel>Technical Skills</FieldLabel>
              <div className="flex flex-wrap gap-1.5 mt-2">{p.skills.map(c => <Chip key={c}>{c}</Chip>)}</div>
            </div>
          </div>

          <div>
            <FieldLabel>Methodology</FieldLabel>
            <ol className="mt-3 space-y-2 text-sm text-slate-700">
              {p.methodology.map((m, i) => (
                <li key={m} className="flex gap-3">
                  <span className="text-navy font-mono text-xs mt-0.5">0{i + 1}</span>
                  <span className="leading-relaxed">{m}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <FieldLabel>Key Insights</FieldLabel>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {p.insights.map(i => (
                <li key={i} className="flex gap-2.5 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <div className="text-[10px] uppercase tracking-[0.2em] text-navy font-semibold">{children}</div>;
}

function ProjectField({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <p className="mt-2 text-slate-700 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function GalleryCard({ title, subtitle, tags, link, icon: Icon }: {
  title: string; subtitle: string; tags: string[]; link: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group">
      <Card className="overflow-hidden h-full">
        <div className="h-40 gradient-navy relative flex items-center justify-center">
          <Icon className="w-14 h-14 text-white/80 group-hover:text-gold transition-colors" />
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }} />
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-navy-deep mb-1">{title}</h3>
          <p className="text-sm text-slate-600 mb-4">{subtitle}</p>
          <div className="flex flex-wrap gap-1.5">
            {tags.map(t => <Chip key={t}>{t}</Chip>)}
          </div>
        </div>
      </Card>
    </a>
  );
}

function ContactCard({ icon: Icon, label, value, href }: {
  icon: React.ComponentType<{ className?: string }>; label: string; value: string; href: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
       className="group flex items-center gap-4 p-5 bg-white/5 border border-white/15 rounded-md hover:bg-white/10 transition-colors">
      <div className="w-11 h-11 rounded-sm bg-gold text-navy-deep flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-widest text-white/60 font-semibold">{label}</div>
        <div className="text-sm font-medium truncate">{value}</div>
      </div>
      <ArrowUpRight className="w-4 h-4 ml-auto text-white/50 group-hover:text-gold transition-colors" />
    </a>
  );
}

/* ---------- Theme Toggle ---------- */

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark-theme"));
  }, []);
  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      data-no-print
      className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 text-navy-deep hover:bg-slate-100 transition-colors"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}

/* ---------- Contact Form ---------- */

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!form.name.trim() || !emailOk || !form.subject.trim() || !form.message.trim()) {
      toast.error("Please fill out all fields with a valid email.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/kush29681@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: form.subject,
          message: form.message,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Message sent successfully — I'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Couldn't send your message. Please email kush29681@gmail.com directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls = "w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold focus:bg-white/15 transition-colors text-sm";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 mt-2" data-no-print>
      <div className="flex items-center gap-3 text-xs tracking-[0.28em] uppercase text-white/70 mb-2">
        <span className="h-px w-10 bg-gold" /> Send a message
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input type="text" required placeholder="Your name" value={form.name} onChange={update("name")} className={inputCls} />
        <input type="email" required placeholder="Email address" value={form.email} onChange={update("email")} className={inputCls} />
      </div>
      <input type="text" required placeholder="Subject" value={form.subject} onChange={update("subject")} className={inputCls} />
      <textarea required rows={5} placeholder="Your message" value={form.message} onChange={update("message")} className={inputCls} />
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-white font-semibold bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-600 hover:shadow-lg hover:scale-[1.01] transition disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 self-start"
      >
        {submitting ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
        ) : (
          <><Send className="w-4 h-4" /> Send Message</>
        )}
      </button>
    </form>
  );
}
