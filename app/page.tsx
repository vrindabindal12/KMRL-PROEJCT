"use client";

import React from "react";
import Link from "next/link";
import { Database, Brain, Workflow, Globe, Users, Shield, FileText, Search, Lock, Bell } from "lucide-react";
import { Globe as MagicGlobe } from "@/components/UI/globe";
import "@/styles/alwayzz.css";

export default function Home() {

  // Generate curved lines arrays
  // Left: 20 lines, widths 60, 70, 80...
  // Right: 20 lines, widths 60, 70, 80...
  // Top (mobile): 20 lines, heights 60, 70, 80...
  const lines = Array.from({ length: 20 });

  const tickerItems = [
    "On-Premises Infrastructure",
    "Isolated Query Engine",
    "Standardized Operations",
    "Localized Distribution",
    "Access Control",
    "Compliance & Audit Trails"
  ];
  // 4x duplicated rows for seamless loop
  const duplicatedTickers = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  const trustedCompanies = [
    { name: "Operations", font: "system-ui, sans-serif", weight: 800 },
    { name: "Safety", font: "Georgia, serif", weight: 500 },
    { name: "Maintenance", font: "var(--font-inter), sans-serif", weight: 600 },
    { name: "Engineering", font: "var(--font-inter), sans-serif", weight: 700 },
    { name: "Legal", font: "system-ui, sans-serif", weight: 600 },
    { name: "Depot", font: "Georgia, serif", weight: 700 },
    { name: "Crew", font: "var(--font-source-serif), serif", weight: 600 },
  ];
  const duplicatedTrusted = [...trustedCompanies, ...trustedCompanies, ...trustedCompanies];

  const features = [
    {
      icon: Database,
      title: "On-Premises Infrastructure",
      description: "Deploy the platform securely within your private network using optimized database instances for stable document indexing.",
    },
    {
      icon: Brain,
      title: "Isolated Query Engine",
      description: "Process summaries, translations, and search queries locally on isolated servers to ensure sensitive data remains within your network.",
    },
    {
      icon: Workflow,
      title: "Standardized Operations",
      description: "Track document acknowledgements, updates, and feedback trails modeled on metro operational safety standards.",
    },
    {
      icon: Globe,
      title: "Localized Distribution",
      description: "Provide crew and depot operations with on-demand document translation and localized dashboards for clear directives.",
    },
    {
      icon: Users,
      title: "Access Control",
      description: "Ensure legal, operations, and engineering teams have tailored dashboards matching their specific clearance levels.",
    },
    {
      icon: Shield,
      title: "Compliance & Audit Trails",
      description: "Verify actions with cryptographically sound audit logs, strict session rules, and robust document version control.",
    },
  ];

  const capabilities = [
    {
      icon: FileText,
      title: "Document Processing",
      description: "Ingest and process technical drawings, legacy PDFs, and HTML policy updates into structured database nodes. The platform utilizes an advanced 5-layer pipeline combining a dynamic lazy-loading extraction engine with Cloudinary-based fallbacks. Extracted content is passed through Google Gemini 2.5 AI for deep semantic analysis to automatically isolate actionable items, detect safety risks, and generate cross-department tags. Finally, documents are mapped into a relational linked graph and securely persisted in MongoDB Atlas, ensuring high-speed keyword queries and pristine version control for all operations teams. This end-to-end architecture in which raw textual data is instantly converted into interactive knowledge bases.",
      className: "alwayzz-bento-large"
    },
    {
      icon: Search,
      title: "Precision Search",
      description: "Locate specific clauses and regulations using keyword and contextual index parsing.",
      className: "alwayzz-bento-wide"
    },
    {
      icon: Workflow,
      title: "Operational Review",
      description: "Manage verification cycles and crew sign-offs with clear logs and automated tracking.",
      className: "alwayzz-bento-square"
    },
    {
      icon: Lock,
      title: "High Availability",
      description: "Access critical documents offline with automated sync controls when network status changes.",
      className: "alwayzz-bento-square"
    },
    {
      icon: Bell,
      title: "Release Engineering",
      description: "Ensure zero-downtime database updates and stable software releases on your infrastructure.",
      className: "alwayzz-bento-wide"
    },
    {
      icon: Brain,
      title: "Operational Metrics",
      description: "Track system utilization, query performance, and user feedback to identify knowledge gaps.",
      className: "alwayzz-bento-wide"
    },
  ];

  return (
    <div className="alwayzz-page">
      <nav className="alwayzz-nav">
        <Link href="/" className="alwayzz-logo serif italic">
          KMRL
        </Link>
        <Link href="/login" className="alwayzz-menu-btn" style={{ textDecoration: 'none' }}>
          Client Login
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="alwayzz-hero">
        <div className="alwayzz-line-container">
          {lines.map((_, i) => (
            <div
              key={`left-${i}`}
              className="alwayzz-line alwayzz-line-left"
              style={{
                width: `${60 + i * 10}px`,
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}
          {lines.map((_, i) => (
            <div
              key={`right-${i}`}
              className="alwayzz-line alwayzz-line-right"
              style={{
                width: `${60 + i * 10}px`,
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}
          {lines.map((_, i) => (
            <div
              key={`top-${i}`}
              className="alwayzz-line alwayzz-line-top"
              style={{
                height: `${60 + i * 10}px`,
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}
        </div>

        <div className="alwayzz-ticker-wrapper">
          <div className="alwayzz-ticker-track">
            {duplicatedTickers.map((item, i) => (
              <span key={i} className="alwayzz-ticker-item">
                {item}
              </span>
            ))}
          </div>
        </div>

        <h1 className="alwayzz-title">
          KMRL Document <span className="serif italic">Management</span> & Search Platform.
        </h1>

        <p className="alwayzz-subtitle">
          Equip operations, safety, and maintenance teams with an internal document repository running securely on local infrastructure for reliable, on-demand reference.
        </p>

        <div className="alwayzz-cta-row">
          <Link href="/request-deployment" className="alwayzz-btn-primary">
            Request Deployment
          </Link>
        </div>

        <div className="alwayzz-blur"></div>
      </section>

      {/* Trusted By Section */}
      <section className="alwayzz-trusted">
        <div className="alwayzz-trusted-label">
          Trusted by internal KMRL divisions globally
        </div>
        <div className="alwayzz-trusted-marquee">
          <div className="alwayzz-trusted-track">
            {duplicatedTrusted.map((company, i) => (
              <span
                key={i}
                className="alwayzz-trusted-item"
                style={{
                  fontFamily: company.font,
                  fontWeight: company.weight,
                }}
              >
                {company.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="alwayzz-features">
        <div className="alwayzz-features-header">
          <h2 className="alwayzz-features-title">Unified Knowledge Management for KMRL Operations</h2>
          <p className="alwayzz-features-subtitle">
            Organize, search, and analyze technical manuals, circulars, and standard operating procedures using local retrieval models and metadata indexing.
          </p>
        </div>

        <div className="alwayzz-features-grid">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="alwayzz-feature-card">
                <div className="alwayzz-feature-icon">
                  <Icon size={20} strokeWidth={2.5} />
                </div>
                <h3 className="alwayzz-feature-title">{feature.title}</h3>
                <p className="alwayzz-feature-desc">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Capabilities Bento Grid */}
      <section className="alwayzz-capabilities">
        <div className="alwayzz-capabilities-inner">
          <div className="alwayzz-capabilities-header">
            <h2 className="alwayzz-capabilities-title">Enterprise-Grade Document Management</h2>
            <p className="alwayzz-capabilities-subtitle">
              Designed for stability, scalability, and strict security constraints. From document partitioning to detailed audit logging, the system provides KMRL with standard-compliant tools.
            </p>
          </div>

          <div className="alwayzz-bento-grid">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className={`alwayzz-capability-card ${cap.className}`}>
                  <div className="alwayzz-capability-icon">
                    <Icon size={20} strokeWidth={2.5} />
                  </div>
                  <div className="alwayzz-capability-text">
                    <h3 className="alwayzz-capability-title">{cap.title}</h3>
                    <p className="alwayzz-capability-desc">{cap.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Globe Section */}
      <section className="alwayzz-globe-section">
        <div className="alwayzz-globe-content">
          <h2 className="alwayzz-globe-title">Ready for Global Deployment</h2>
          <p className="alwayzz-globe-text">
            Secure, scalable, and highly available infrastructure that runs seamlessly on your internal networks.
          </p>
        </div>
        <div className="alwayzz-globe-container">
          <div className="alwayzz-globe-wrapper">
            <MagicGlobe />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="alwayzz-footer">
        <div className="alwayzz-footer-left">
          <Link href="/" className="alwayzz-footer-logo serif italic">
            KMRL
          </Link>
          <span>&copy; {new Date().getFullYear()} KMRL. All rights reserved.</span>
        </div>
        <div className="alwayzz-footer-links">
          <Link href="/privacy" className="alwayzz-footer-link">Privacy Policy</Link>
          <Link href="/terms" className="alwayzz-footer-link">Terms of Service</Link>
          <Link href="/request-deployment" className="alwayzz-footer-link">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
