'use client'

import Link from 'next/link'
import { useState } from 'react'

const slides = [
  {
    id: 'PITCH_COVER_01',
    title: 'DIGITAL GRAVEYARD - PITCH DECK',
    subtitle: '(Ready for judge evaluation)',
    icon: '🚀',
    meta: [
      'PRESENTER: TEAM ROCKET',
      'ROOM: MAIN STAGE A',
      'SLOT: 09:30 AM',
    ],
    content: (
      <div className="text-center max-w-lg px-2 flex flex-col items-center">
        <div className="w-12 h-12 bg-[#e2eff0] border border-on-surface flex items-center justify-center mb-4 text-[#23585c]">
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>analytics</span>
        </div>
        <h3 className="text-lg sm:text-2xl font-bold uppercase tracking-tight text-gray-900 leading-snug mb-2 font-mono">
          DIGITAL GRAVEYARD - PITCH DECK
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 font-normal italic mb-4">
          (Ready for judge evaluation)
        </p>
        <div className="inline-flex flex-wrap items-center justify-center gap-2 text-[10px] text-gray-700 font-semibold uppercase bg-gray-100 border border-on-surface px-3 py-1 font-mono">
          <span>PRESENTER: TEAM ROCKET</span>
          <span>•</span>
          <span>ROOM: MAIN STAGE A</span>
          <span>•</span>
          <span>SLOT: 09:30 AM</span>
        </div>
      </div>
    ),
  },
  {
    id: 'PROBLEM_02',
    title: 'THE PROBLEM: REPOSITORY CEMETERY',
    subtitle: 'Millions of abandoned codebase repositories',
    icon: '💀',
    meta: ['IMPACT: HIGH', 'TARGET: OPEN SOURCE', 'URGENCY: CRITICAL'],
    content: (
      <div className="text-center max-w-lg px-2 flex flex-col items-center font-mono">
        <div className="w-12 h-12 bg-error-container border border-on-surface flex items-center justify-center mb-4 text-on-error-container">
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>warning</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-gray-900 mb-2">
          THE PROBLEM: REPOSITORY CEMETERY
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-4">
          Over 65% of open-source projects on GitHub end up abandoned within 18 months, leaving valuable code, unresolved issues, and developer potential buried in silence.
        </p>
        <div className="grid grid-cols-2 gap-2 text-[11px] text-left w-full">
          <div className="p-2 bg-surface-container border border-on-surface">
            <span className="font-bold text-error">❌ Wasted Effort:</span> Thousands of unmerged pull requests.
          </div>
          <div className="p-2 bg-surface-container border border-on-surface">
            <span className="font-bold text-error">❌ Lost Knowledge:</span> Undocumented design architecture.
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'SOLUTION_03',
    title: 'OUR SOLUTION: MATCHMAKING ENGINE',
    subtitle: 'Resurrecting dead code with AI & Community',
    icon: '⚡',
    meta: ['ENGINE: MATCHMAKER', 'STACK: NEXT + FASTAPI', 'STATUS: ACTIVE'],
    content: (
      <div className="text-center max-w-lg px-2 flex flex-col items-center font-mono">
        <div className="w-12 h-12 bg-primary-container border border-on-surface flex items-center justify-center mb-4 text-on-primary-container">
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>auto_awesome</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-gray-900 mb-2">
          OUR SOLUTION: SALVAGE ENGINE
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-4">
          A dynamic web platform and matchmaking protocol that scans dormant repos, extracts project requirements, and pairs them with eager software engineers.
        </p>
        <div className="flex flex-col gap-2 w-full text-[11px] text-left">
          <div className="p-2 bg-primary-container/30 border border-on-surface font-bold text-primary">
            ✔ AI Repository Health Audit & Salvage Score
          </div>
          <div className="p-2 bg-primary-container/30 border border-on-surface font-bold text-primary">
            ✔ Developer Skill Matching & Claim System
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'STACK_04',
    title: 'ARCHITECTURE & TECH STACK',
    subtitle: 'Modern, high-performance web architecture',
    icon: '🛠️',
    meta: ['FRONTEND: NEXT.JS 14', 'STYLING: TAILWIND', 'HOSTING: GH PAGES'],
    content: (
      <div className="text-center max-w-lg px-2 flex flex-col items-center font-mono">
        <div className="w-12 h-12 bg-surface-container-high border border-on-surface flex items-center justify-center mb-4 text-on-surface">
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>memory</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-gray-900 mb-2">
          TECH STACK & ARCHITECTURE
        </h3>
        <div className="grid grid-cols-2 gap-3 text-left w-full text-[11px]">
          <div className="p-2.5 bg-white border border-on-surface">
            <div className="font-bold text-primary mb-1">Frontend</div>
            <div>Next.js 14 App Router, TypeScript, Tailwind CSS</div>
          </div>
          <div className="p-2.5 bg-white border border-on-surface">
            <div className="font-bold text-primary mb-1">CI / CD</div>
            <div>GitHub Actions Automated Pipeline</div>
          </div>
          <div className="p-2.5 bg-white border border-on-surface">
            <div className="font-bold text-primary mb-1">Design System</div>
            <div>Retro 8-Bit Pixel OS Aesthetic</div>
          </div>
          <div className="p-2.5 bg-white border border-on-surface">
            <div className="font-bold text-primary mb-1">Deployment</div>
            <div>GitHub Pages Static Export</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'TEAM_05',
    title: 'TEAM ROCKET ROSTER',
    subtitle: 'Four dedicated engineers building the future',
    icon: '👾',
    meta: ['TEAM: 4 MEMBERS', 'ORGANIZATION: TEAM ROCKET', 'STATUS: SYNCHRONIZED'],
    content: (
      <div className="text-center max-w-lg px-2 flex flex-col items-center font-mono">
        <div className="w-12 h-12 bg-secondary-container border border-on-surface flex items-center justify-center mb-4 text-on-secondary-container">
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>groups</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-gray-900 mb-2">
          TEAM ROCKET ENGINEERS
        </h3>
        <div className="grid grid-cols-2 gap-2 text-left w-full text-[10px]">
          <div className="p-2 bg-white border border-on-surface">
            <span className="font-bold block">Lakshay</span>
            <span className="text-gray-600">Backend & API Specialist</span>
          </div>
          <div className="p-2 bg-white border border-on-surface">
            <span className="font-bold block">Harshita</span>
            <span className="text-gray-600">Frontend & UI/UX Architect</span>
          </div>
          <div className="p-2 bg-white border border-on-surface">
            <span className="font-bold block">Parth</span>
            <span className="text-gray-600">Database & Systems Engineer</span>
          </div>
          <div className="p-2 bg-white border border-on-surface">
            <span className="font-bold block">Arshdeep</span>
            <span className="text-gray-600">Documentation & Systems UML</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'DEMO_06',
    title: 'LIVE PROTOTYPE DEMO',
    subtitle: 'Fully responsive retro web interface',
    icon: '💻',
    meta: ['BUILD: v1.0.EXE', 'ENV: PRODUCTION', 'STATUS: LIVE'],
    content: (
      <div className="text-center max-w-lg px-2 flex flex-col items-center font-mono">
        <div className="w-12 h-12 bg-emerald-100 border border-on-surface flex items-center justify-center mb-4 text-emerald-800">
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>devices</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-gray-900 mb-2">
          LIVE DEMONSTRATION
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-4">
          Our prototype features authentic 16-bit retro UI styling, dynamic system clocks, interactive terminal panels, and seamless sub-page navigation.
        </p>
        <Link
          href="/"
          className="px-4 py-2 bg-primary text-on-primary font-bold border border-on-surface retro-shadow-sm hover:bg-primary-container hover:text-on-primary-container transition-all"
        >
          [ LAUNCH LIVE SITE ]
        </Link>
      </div>
    ),
  },
  {
    id: 'ROADMAP_07',
    title: 'FUTURE ROADMAP & EXPANSION',
    subtitle: 'Where Digital Graveyard goes next',
    icon: '🎯',
    meta: ['PHASE 1: ALPHA', 'PHASE 2: BETA', 'PHASE 3: ECOSYSTEM'],
    content: (
      <div className="text-center max-w-lg px-2 flex flex-col items-center font-mono">
        <div className="w-12 h-12 bg-tertiary-container border border-on-surface flex items-center justify-center mb-4 text-on-tertiary-container">
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>map</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-gray-900 mb-2">
          PROJECT ROADMAP
        </h3>
        <ul className="space-y-2 text-left w-full text-[11px]">
          <li className="p-2 bg-white border border-on-surface flex items-center justify-between">
            <span><strong>Q4 2025:</strong> Automated Repo Health Scanner</span>
            <span className="bg-emerald-100 text-emerald-800 text-[9px] px-1 border border-black font-bold">COMPLETED</span>
          </li>
          <li className="p-2 bg-white border border-on-surface flex items-center justify-between">
            <span><strong>Q1 2026:</strong> AI-powered Bug Patch Generator</span>
            <span className="bg-amber-100 text-amber-800 text-[9px] px-1 border border-black font-bold">IN PROGRESS</span>
          </li>
          <li className="p-2 bg-white border border-on-surface flex items-center justify-between">
            <span><strong>Q2 2026:</strong> Bounty & Micro-Grant Protocol</span>
            <span className="bg-gray-100 text-gray-600 text-[9px] px-1 border border-black font-bold">PLANNED</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'IMPACT_08',
    title: 'PROJECTED COMMUNITY IMPACT',
    subtitle: 'Saving developer effort globally',
    icon: '📊',
    meta: ['REPOS: 10,000+', 'COMMITS: 100K+', 'SAVED HOURS: 500K+'],
    content: (
      <div className="text-center max-w-lg px-2 flex flex-col items-center font-mono">
        <div className="w-12 h-12 bg-primary-container border border-on-surface flex items-center justify-center mb-4 text-on-primary-container">
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>trending_up</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-gray-900 mb-2">
          COMMUNITY & ECOSYSTEM IMPACT
        </h3>
        <div className="grid grid-cols-3 gap-2 w-full text-center">
          <div className="p-3 bg-white border border-on-surface">
            <div className="text-xl font-bold text-primary">10K+</div>
            <div className="text-[9px] text-gray-600 uppercase">Salvaged Repos</div>
          </div>
          <div className="p-3 bg-white border border-on-surface">
            <div className="text-xl font-bold text-primary">50K+</div>
            <div className="text-[9px] text-gray-600 uppercase">Contributors</div>
          </div>
          <div className="p-3 bg-white border border-on-surface">
            <div className="text-xl font-bold text-primary">99.4%</div>
            <div className="text-[9px] text-gray-600 uppercase">Uptime</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'QA_09',
    title: 'JURY Q&A READINESS',
    subtitle: 'Prepared for judge evaluation & questions',
    icon: '❓',
    meta: ['TIME: 5 MINS PITCH', 'QA: 3 MINS', 'STATUS: READY'],
    content: (
      <div className="text-center max-w-lg px-2 flex flex-col items-center font-mono">
        <div className="w-12 h-12 bg-surface-container-high border border-on-surface flex items-center justify-center mb-4 text-on-surface">
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>help_center</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-gray-900 mb-2">
          JURY Q&A READINESS
        </h3>
        <div className="space-y-2 text-left w-full text-[11px]">
          <div className="p-2 bg-white border border-on-surface">
            <strong className="text-primary">Q: How do you verify repo ownership?</strong>
            <p className="text-gray-600 text-[10px]">Via GitHub OAuth and automated cryptographic signature validation.</p>
          </div>
          <div className="p-2 bg-white border border-on-surface">
            <strong className="text-primary">Q: What keeps new maintainers accountable?</strong>
            <p className="text-gray-600 text-[10px]">Milestone-based commit tracking and peer reviews.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'THANKYOU_10',
    title: 'THANK YOU! - TEAM ROCKET',
    subtitle: 'Questions & Judge Evaluation',
    icon: '🎉',
    meta: ['TEAM ROCKET', 'DIGITAL GRAVEYARD', 'FINISH'],
    content: (
      <div className="text-center max-w-lg px-2 flex flex-col items-center font-mono">
        <div className="w-12 h-12 bg-primary-container border border-on-surface flex items-center justify-center mb-4 text-on-primary-container">
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>sentiment_very_satisfied</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-gray-900 mb-2">
          THANK YOU!
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-4">
          Team Rocket is ready for your feedback and questions!
        </p>
        <div className="p-3 bg-surface-container border border-on-surface text-[11px] font-bold text-on-surface w-full">
          🚀 DIGITAL GRAVEYARD // TEAM ROCKET 2025
        </div>
      </div>
    ),
  },
]

export default function PresentationPage() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [downloadNotice, setDownloadNotice] = useState(false)

  const currentSlide = slides[currentSlideIndex]

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleDownload = () => {
    setDownloadNotice(true)
    setTimeout(() => setDownloadNotice(false), 4000)
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#eceeed] text-[#111827] text-xs font-mono">
      <div className="w-full flex-grow flex flex-col">
        {/* Sub-Bar */}
        <div className="w-full px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between text-[11px] text-gray-700 font-mono border-b border-gray-300/80 bg-white/60">
          <Link
            href="/project"
            className="bg-white border border-on-surface px-3 py-1 font-bold hover:bg-gray-100 flex items-center space-x-1 retro-shadow-sm active-press"
          >
            <span>←</span>
            <span>BACK TO ABOUT PROJECT</span>
          </Link>
          <div className="flex items-center space-x-2 text-[11px] mt-1 sm:mt-0 font-medium">
            <span className="w-2 h-2 rounded-full bg-teal-600 inline-block animate-pulse"></span>
            <span className="text-gray-600 uppercase">SYS_NODE://PRESENTATION_STAGE_A</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-900 font-bold uppercase tracking-tight">
              DIR:\TEAM_ROCKET\PRESENTATION_DECK.EXE
            </span>
          </div>
        </div>

        {/* Main Window Container */}
        <main className="w-full max-w-6xl mx-auto px-4 py-5 flex-grow flex flex-col justify-start">
          <div className="bg-white border-2 border-on-surface retro-shadow flex flex-col overflow-hidden mb-6">
            {/* Window Titlebar */}
            <div className="bg-[#9ec8cb] border-b-2 border-on-surface px-3 py-1.5 flex items-center justify-between font-mono select-none">
              <div className="flex items-center space-x-2">
                <span className="text-xs">🕹️</span>
                <span className="font-bold text-xs tracking-wider text-gray-900 uppercase">
                  PRESENTATION_DECK.EXE // SLIDE_VIEWER [PID: 4082]
                </span>
              </div>
              <div className="flex items-center space-x-2 font-mono text-[11px]">
                <span className="bg-white/80 px-2 py-0.5 border border-on-surface text-[10px] uppercase font-bold text-gray-800">
                  PID: 4082
                </span>
                <button aria-label="Minimize" className="w-4 h-4 bg-white border border-on-surface flex items-center justify-center text-[9px] hover:bg-gray-100 leading-none">
                  _
                </button>
                <button aria-label="Close" className="w-4 h-4 bg-white border border-on-surface flex items-center justify-center text-[9px] hover:bg-red-500 hover:text-white leading-none">
                  ✕
                </button>
              </div>
            </div>

            {/* Window Main Content Interior */}
            <div className="p-4 md:p-6 space-y-5 bg-white font-mono">
              {/* Top Project Banner Card */}
              <div className="bg-[#f4f5f6] border-2 border-on-surface p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#9ec8cb] border border-on-surface flex items-center justify-center text-xl shadow-[1px_1px_0px_#000]">
                    🚀
                  </div>
                  <div>
                    <h1 className="text-base sm:text-lg font-bold uppercase tracking-tight text-gray-900">
                      DIGITAL GRAVEYARD.EXE
                    </h1>
                    <p className="text-[10px] text-gray-600 uppercase tracking-wide">
                      REGISTRY_ID: DG-EXP-2025-ALPHA // STAGE_ID: ALPHA_DECK
                    </p>
                  </div>
                </div>

                {/* Project Live Status Badge */}
                <div className="flex items-center space-x-2 bg-white border border-on-surface px-2.5 py-1 text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block animate-pulse"></span>
                  <span className="font-bold text-gray-800 uppercase text-[10px] sm:text-[11px]">
                    STATUS: READY FOR JUDGE EVALUATION (PROTOTYPE IN PROGRESS)
                  </span>
                </div>
              </div>

              {/* Section: File Slot Bar */}
              <div>
                <div className="flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-wider mb-1.5 font-bold">
                  <span>// PRIMARY_PRESENTATION_DECK_SLOT</span>
                  <span className="text-teal-800">READY_TO_EVALUATE</span>
                </div>
                <div className="bg-[#f9fafb] border-2 border-on-surface p-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white border border-on-surface flex items-center justify-center text-base">
                      🗎
                    </div>
                    <div>
                      <h2 className="font-bold text-xs uppercase tracking-tight text-gray-900">
                        TEAM_ROCKET_PITCH_DECK.PPTX / .PDF
                      </h2>
                      <p className="text-[10px] text-gray-500 uppercase">
                        FILE_SIZE: 14.8 MB • REVISION 3.2 • COMPILED FOR JURY REVIEW
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-[#dbeceb] text-[#1c4b4f] border border-on-surface px-2.5 py-1 text-[10px] font-bold">
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>check_circle</span>
                    <span>READY FOR PRESENTATION TOMORROW</span>
                  </div>
                </div>
              </div>

              {/* Section: Presentation Stage and Slide Viewer Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Left: Presentation Stage Frame */}
                <section className="lg:col-span-8 flex flex-col">
                  <div className={`border-2 border-on-surface bg-white flex flex-col shadow-sm transition-all ${isFullscreen ? 'fixed inset-4 z-50 bg-white p-4 shadow-2xl overflow-auto' : ''}`}>
                    {/* Deck Stage Header */}
                    <div className="bg-[#eef2f3] border-b-2 border-on-surface px-3 py-1.5 flex items-center justify-between text-[11px] font-bold">
                      <div className="flex items-center space-x-1.5">
                        <span>▶</span>
                        <span className="tracking-wide text-gray-800 uppercase">
                          PREVIEW_CONTAINER.VIEW
                        </span>
                      </div>
                      <div className="text-gray-700 tracking-wider">
                        SLIDE {(currentSlideIndex + 1).toString().padStart(2, '0')}/10
                      </div>
                    </div>

                    {/* Slide Canvas Area */}
                    <div className="p-6 md:p-8 min-h-[320px] sm:min-h-[360px] flex flex-col justify-between items-center bg-[#fdfdfd] relative overflow-hidden">
                      {/* Top Slide Tag */}
                      <div className="w-full flex justify-between items-center text-[9px] text-gray-400 uppercase font-mono tracking-widest border-b border-gray-100 pb-2">
                        <span>SLIDE_ID: {currentSlide.id}</span>
                        <span>PROJECT: DIGITAL GRAVEYARD</span>
                      </div>

                      {/* Center Content of Slide */}
                      <div className="my-auto py-4 w-full flex flex-col items-center">
                        {currentSlide.content}
                      </div>

                      {/* Slide Bottom Progress Bar Accent */}
                      <div className="w-full h-1.5 bg-[#2b5f63] border-t border-on-surface"></div>
                    </div>

                    {/* Slide Navigation Control Bar */}
                    <div className="bg-[#f4f5f6] border-t-2 border-on-surface p-2 flex items-center justify-between flex-wrap gap-2 text-xs">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={prevSlide}
                          className="bg-white border border-on-surface px-3 py-1 hover:bg-gray-100 font-bold active-press text-[11px] retro-shadow-sm"
                        >
                          [ ◀ PREVIOUS ]
                        </button>
                        <button
                          onClick={nextSlide}
                          className="bg-white border border-on-surface px-3 py-1 hover:bg-gray-100 font-bold active-press text-[11px] retro-shadow-sm"
                        >
                          [ NEXT ▶ ]
                        </button>
                      </div>

                      <div className="font-bold text-gray-800 text-[11px] bg-white border border-on-surface px-3 py-0.5">
                        SLIDE {(currentSlideIndex + 1).toString().padStart(2, '0')} / 10
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setIsFullscreen(!isFullscreen)}
                          className="bg-white border border-on-surface px-2.5 py-1 hover:bg-gray-100 font-bold text-[11px] flex items-center space-x-1 active-press"
                        >
                          <span>⛶</span>
                          <span>[ {isFullscreen ? 'EXIT FULLSCREEN' : 'FULLSCREEN'} ]</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Right: Quick Actions & Speaker Notes */}
                <section className="lg:col-span-4 flex flex-col space-y-4">
                  {/* Quick Actions & Download Box */}
                  <div className="border-2 border-on-surface bg-[#fdfdfd] p-3 flex flex-col justify-between">
                    <div className="text-[10px] font-bold text-gray-600 uppercase mb-2 flex justify-between items-center">
                      <span>ARCHIVE_SNAPSHOT</span>
                      <span className="bg-teal-100 text-teal-800 text-[9px] px-1 border border-on-surface">
                        SYNCED
                      </span>
                    </div>

                    {/* Miniature Deck Graphic */}
                    <div className="bg-[#e7ebee] border border-on-surface p-4 flex flex-col items-center justify-center text-center my-2">
                      <div className="text-3xl mb-1 text-gray-800">📖</div>
                      <div className="text-[11px] font-bold tracking-wider text-gray-800 uppercase">
                        DECK_PREVIEW_V3.2
                      </div>
                      <div className="text-[9px] text-gray-500 uppercase mt-0.5">
                        MD5: 4F92AC908B12
                      </div>
                    </div>

                    {/* Notification Toast */}
                    {downloadNotice && (
                      <div className="mb-2 p-2 bg-primary-container text-on-primary-container border border-on-surface text-[10px] font-bold text-center animate-bounce">
                        ✔ Pitch Deck compilation initiated! (14.8 MB)
                      </div>
                    )}

                    {/* Primary Action Buttons */}
                    <div className="space-y-2 mt-2">
                      <button
                        onClick={handleDownload}
                        className="w-full bg-[#2b5f63] hover:bg-[#224b4e] text-white border border-on-surface font-bold py-2 px-3 text-center block text-xs tracking-wider uppercase shadow-[2px_2px_0px_#000000] active-press"
                      >
                        📥 OPEN DECK (.PDF)
                      </button>

                      <button
                        onClick={handleDownload}
                        className="w-full bg-white hover:bg-gray-100 text-gray-900 border border-on-surface font-bold py-1.5 px-3 text-center flex items-center justify-center space-x-1 text-[11px] uppercase shadow-sm active-press"
                      >
                        <span>⬆</span>
                        <span>REPLACE SLIDE DECK</span>
                      </button>
                    </div>
                  </div>

                  {/* Speaker Notes */}
                  <div className="border-2 border-on-surface bg-white p-3 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-bold text-gray-600 uppercase mb-2 border-b pb-1 flex items-center justify-between">
                        <span>// SPEAKER_NOTES_BRIEF</span>
                        <span className="text-[9px] text-gray-400">JURY_READ_ONLY</span>
                      </div>
                      <ul className="space-y-2 text-[11px] text-gray-700">
                        <li className="flex items-start space-x-1.5">
                          <span className="text-teal-700 font-bold">•</span>
                          <span>
                            <strong className="text-gray-900 font-bold">1. The Problem:</strong> Millions of repositories lie abandoned with unresolved bugs and lost developer hours.
                          </span>
                        </li>
                        <li className="flex items-start space-x-1.5">
                          <span className="text-teal-700 font-bold">•</span>
                          <span>
                            <strong className="text-gray-900 font-bold">2. Our Solution:</strong> A matchmaking engine that salvages dead repos, assigning prospective maintainers.
                          </span>
                        </li>
                        <li className="flex items-start space-x-1.5">
                          <span className="text-teal-700 font-bold">•</span>
                          <span>
                            <strong className="text-gray-900 font-bold">3. Live Prototype:</strong> Next.js + FastAPI + Postgres stack is fully operational on local stage.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-3 pt-2 border-t border-dashed border-gray-300 flex justify-between items-center text-[9px] text-gray-500 font-mono">
                      <span>TIME LIMIT: 5 MINS</span>
                      <span>QA: 3 MINS</span>
                    </div>
                  </div>
                </section>
              </div>

              {/* Bottom Sub-Navigation Bar inside Window */}
              <div className="pt-2 flex flex-wrap items-center justify-between border-t border-gray-200 text-[11px] font-bold text-gray-700">
                <Link
                  href="/project"
                  className="hover:text-black flex items-center space-x-1 uppercase py-1"
                >
                  <span>↵</span>
                  <span>RETURN TO ABOUT PROJECT</span>
                </Link>
                <div className="text-gray-500 uppercase tracking-widest text-[10px] py-1">
                  CHECKSUM: VALIDATED // EOF
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
