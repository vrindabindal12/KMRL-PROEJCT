"use client";
import { ArrowRight, FileText, Search, Brain, Shield, Users, Bell, Database, Globe, Workflow, Lock } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
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
      description: "Ingest and process technical drawings, legacy PDFs, and SOP updates into structured database nodes.",
    },
    {
      icon: Search,
      title: "Precision Search",
      description: "Locate specific clauses and regulations using keyword and contextual index parsing.",
    },
    {
      icon: Workflow,
      title: "Operational Review",
      description: "Manage verification cycles and crew sign-offs with clear logs and automated tracking.",
    },
    {
      icon: Lock,
      title: "High Availability",
      description: "Access critical documents offline with automated sync controls when network status changes.",
    },
    {
      icon: Bell,
      title: "Release Engineering",
      description: "Ensure zero-downtime database updates and stable software releases on your infrastructure.",
    },
    {
      icon: Brain,
      title: "Operational Metrics",
      description: "Track system utilization, query performance, and user feedback to identify knowledge gaps.",
    },
  ];

  // Refs for each section to detect when they enter the viewport
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const capabilitiesRef = useRef(null);
  const ctaRef = useRef(null);

  // useInView hooks to detect when sections are in view
  // No framer-motion in restricted build; using static content

  // Removed animation variables - no framer-motion in restricted build

  return (
    <div className="bg-gradient-to-b from-gray-50 via-blue-50 to-white min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-800 shadow-md transform transition-transform hover:scale-105">
              <Database className="w-5 h-5 mr-2" />
              Private deployment package
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">KMRL</span> Document Management & Search Platform
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            Equip operations, safety, and maintenance teams with an internal document repository running securely on local infrastructure for reliable, on-demand reference.
          </p>
          <div className="flex gap-6 justify-center">
            <Link
              href="/request-deployment"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Request Deployment
              <ArrowRight className="ml-3 h-6 w-6 animate-pulse" />
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full text-gray-800 bg-white border-2 border-gray-200 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Client Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Unified Knowledge Management for KMRL Operations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Organize, search, and analyze technical manuals, circulars, and standard operating procedures
            using local retrieval models and metadata indexing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200/80 rounded-2xl p-6 hover:border-blue-500/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-start text-left"
              >
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Capabilities Section */}
      <section
        ref={capabilitiesRef}
       
       
       
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Enterprise-Grade Document Management
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Designed for stability, scalability, and strict security constraints. From document partitioning 
              to detailed audit logging, the system provides KMRL with standard-compliant tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200/60 rounded-xl p-6 hover:border-blue-400/30 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col items-start text-left"
                >
                  <div className="p-2 bg-blue-100/50 text-blue-700 rounded-lg mb-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-2">{capability.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
       
       
       
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl px-10 py-16 text-center shadow-2xl">
          <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">
            Schedule a Deployment Planning Session
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Share your constraints and we will assemble an installation roadmap, training plan, and support model tailored to your organization.
          </p>
          <div>
            <Link
              href="/request-deployment"
              className="inline-flex items-center px-10 py-4 text-lg font-semibold rounded-full text-blue-800 bg-white hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Request Deployment Plan
              <ArrowRight className="ml-3 h-6 w-6 animate-pulse" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
