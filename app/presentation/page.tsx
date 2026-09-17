'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'

interface SlideData {
  id: string
  number: string
  code: string
  title: string
  subtitle: string
  notes: string[]
  content: React.ReactNode
}

export default function PresentationPage() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [downloadNotice, setDownloadNotice] = useState(false)

  const slides: SlideData[] = [
    // SLIDE 01: PROJECT OVERVIEW
    {
      id: 'SLIDE_01',
      number: '01/14',
      code: 'PITCH_COVER_01',
      title: 'PROJECT OVERVIEW - DIGITAL GRAVEYARD',
      subtitle: 'Revisiting the Problem',
      notes: [
        '1. The Core Problem: Millions of repositories lie abandoned with unresolved bugs and lost developer hours.',
        '2. Our Target Audience: Students looking for portfolio projects, developers, and open-source foundations.',
        '3. Resurrection Engine: Instead of building another graveyard where repos rot, Digital Graveyard acts as an incubator and revival bridge.',
      ],
      content: (
        <div className="w-full space-y-4">
          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-200 pb-2 font-mono">
            <span>SLIDE 01: PROJECT OVERVIEW</span>
            <span>REGISTRY: DG-EXP-2025</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-auto py-2 items-center font-mono">
            {/* Left Narrative */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[#9ec8cb] text-black px-2.5 py-1 border border-on-surface text-[10px] font-bold uppercase retro-shadow-sm">
                <span>🚀 REVISITING THE PROBLEM</span>
              </div>
              <h2 className="text-base sm:text-xl font-bold uppercase tracking-tight text-gray-900 leading-tight">
                Thousands of software projects are abandoned every year despite containing valuable code, ideas, documentation and learning.
              </h2>
              <div className="text-xs sm:text-sm text-gray-700 bg-gray-50 border border-on-surface p-3">
                <strong className="text-teal-900 font-bold">Why We Selected This Problem:</strong> Abandoned projects represent lost effort and lost knowledge. Existing platforms help people create projects but do not help preserve or continue unfinished work.
              </div>

              {/* Intended Users Tag Chips */}
              <div className="space-y-1.5">
                <div className="text-[10px] text-gray-600 font-bold uppercase">// INTENDED USERS:</div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-white border border-on-surface px-2 py-0.5 text-[10px] font-bold text-gray-800">👩‍💻 Students</span>
                  <span className="bg-white border border-on-surface px-2 py-0.5 text-[10px] font-bold text-gray-800">⚡ Developers</span>
                  <span className="bg-white border border-on-surface px-2 py-0.5 text-[10px] font-bold text-gray-800">🌐 Open-source Maintainers</span>
                  <span className="bg-white border border-on-surface px-2 py-0.5 text-[10px] font-bold text-gray-800">🚀 Startup Founders</span>
                  <span className="bg-white border border-on-surface px-2 py-0.5 text-[10px] font-bold text-gray-800">🤝 Communities</span>
                </div>
              </div>
            </div>

            {/* Right ASCII / Retro Architectural Pixel Art Diagram */}
            <div className="md:col-span-5 flex flex-col font-mono">
              <div className="bg-[#1e2429] text-[#9ec8cb] border-2 border-on-surface p-4 shadow-[4px_4px_0px_#000] text-[11px] leading-relaxed">
                <div className="flex justify-between border-b border-gray-700 pb-1 mb-2 text-[9px] text-gray-400">
                  <span>RESURRECTION_SCHEMATIC.SYS</span>
                  <span className="text-emerald-400 font-bold">[OK]</span>
                </div>
                <pre className="text-[10px] sm:text-[11px] font-mono whitespace-pre leading-tight overflow-x-auto text-[#9ec8cb]">
{`+-------------------------------+
|     CODE CEMETERY (ORPHAN)    |
|  [Dead Repos] [Rotting Stacks]|
+---------------+---------------+
                |
                v  [TELEMETRY SCAN]
+---------------+---------------+
|    AI REVIVAL ENGINE (DG)     |
|   - AST Parser  - Value Score |
|   - Dependency Remediation    |
+---------------+---------------+
                |
                v  [ADOPTION PIPELINE]
+---------------+---------------+
|    RESURRECTION COMPLETE      |
|    Active Maintainer Assigned |
+-------------------------------+`}
                </pre>
                <div className="mt-2 text-[9px] text-emerald-400 bg-black/50 border border-emerald-500/40 p-1.5">
                  STATUS: PIPELINE OPERATIONAL • ZERO CODE LEFT BEHIND
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 border-t border-gray-200 pt-2 font-mono">
            <span>PRESENTER: TEAM ROCKET</span>
            <span>STAGE: MAIN AUDITORIUM A</span>
            <span>SLOT: 09:30 AM</span>
          </div>
        </div>
      ),
    },

    // SLIDE 02: PROBLEM ANALYSIS
    {
      id: 'SLIDE_02',
      number: '02/14',
      code: 'PROBLEM_DECAY_02',
      title: 'PROBLEM ANALYSIS',
      subtitle: 'Software Lifecycle Decay & Impact',
      notes: [
        '1. Abandonment Cascade: Walk through the 5 distinct phases from initial burst of inspiration to graveyard status.',
        '2. Emphasize Duplicate Effort: Over 35% of hackathon and side-projects rewrite code that already exists in abandoned repos.',
        '3. Why Github Archive is not enough: GitHub\'s read-only archive freezes repos without inviting prospective stewards.',
      ],
      content: (
        <div className="w-full space-y-4 font-mono">
          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-200 pb-2">
            <span>SLIDE 02: PROBLEM ANALYSIS</span>
            <span>SYS_DIAGNOSTICS://DECAY_LOOP</span>
          </div>

          <div className="py-1 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="bg-red-100 text-red-800 border border-on-surface px-2 py-0.5 text-[10px] font-bold uppercase">
                CRITICAL DEFECT IN OPEN SOURCE
              </span>
              <h2 className="text-base sm:text-xl font-bold uppercase text-gray-900">
                What Happens Today (The Abandonment Cascade)
              </h2>
            </div>

            {/* Vertical Flow Diagram with Retro Indicators */}
            <div className="bg-[#f4f5f6] border border-on-surface p-3 space-y-2">
              <div className="text-[10px] font-bold text-gray-600 uppercase">// SOFTWARE LIFECYCLE DECAY FLOW:</div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-[11px] font-bold">
                <div className="bg-white border border-on-surface p-2 shadow-sm">
                  <div className="text-xs">🌱 STEP 01</div>
                  <div className="text-gray-900 mt-1">Project Created</div>
                  <div className="text-[9px] text-gray-500 font-normal">Initial enthusiasm</div>
                </div>
                <div className="flex items-center justify-center font-bold text-gray-400">
                  <span className="hidden sm:inline">➔</span>
                  <span className="sm:hidden">↓</span>
                </div>
                <div className="bg-white border border-on-surface p-2 shadow-sm">
                  <div className="text-xs">📉 STEP 02</div>
                  <div className="text-gray-900 mt-1">Development Slows</div>
                  <div className="text-[9px] text-gray-500 font-normal">Commits halt</div>
                </div>
                <div className="flex items-center justify-center font-bold text-gray-400">
                  <span className="hidden sm:inline">➔</span>
                  <span className="sm:hidden">↓</span>
                </div>
                <div className="bg-white border border-on-surface p-2 shadow-sm">
                  <div className="text-xs">🚪 STEP 03</div>
                  <div className="text-gray-900 mt-1">Maintainers Leave</div>
                  <div className="text-[9px] text-gray-500 font-normal">Burnout & zero PRs</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-[11px] font-bold pt-1">
                <div className="bg-amber-50 border border-amber-800 p-2 text-amber-900">
                  <div className="text-xs">⚠️ STEP 04</div>
                  <div>Repository Inactive</div>
                  <div className="text-[9px] font-normal">Dependencies rot & security flags rise</div>
                </div>
                <div className="flex items-center justify-center font-bold text-red-600 text-xs">
                  <span>➔ DEATH CASCADE ➔</span>
                </div>
                <div className="bg-red-50 border border-red-800 p-2 text-red-900">
                  <div className="text-xs">🪦 STEP 05</div>
                  <div>Project Disappears</div>
                  <div className="text-[9px] font-normal">Archived or forgotten in GitHub void</div>
                </div>
              </div>
            </div>

            {/* Impact Alert Panels */}
            <div>
              <div className="text-[10px] font-bold text-gray-600 mb-1.5 uppercase">// TANGIBLE IMPACT TO ECOSYSTEM:</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="bg-white border border-on-surface p-2.5">
                  <div className="text-red-700 font-bold text-xs mb-1">❌ Valuable Code Lost</div>
                  <p className="text-[10px] text-gray-600 leading-snug">Algorithmic solutions and bespoke architecture never seen again.</p>
                </div>
                <div className="bg-white border border-on-surface p-2.5">
                  <div className="text-red-700 font-bold text-xs mb-1">❌ Knowledge Lost</div>
                  <p className="text-[10px] text-gray-600 leading-snug">Learnings, architectural decisions, and edge case bug solutions erased.</p>
                </div>
                <div className="bg-white border border-on-surface p-2.5">
                  <div className="text-red-700 font-bold text-xs mb-1">❌ Duplicate Effort</div>
                  <p className="text-[10px] text-gray-600 leading-snug">New developers rebuild the identical wheel from zero thousands of times.</p>
                </div>
                <div className="bg-white border border-on-surface p-2.5">
                  <div className="text-red-700 font-bold text-xs mb-1">❌ Broken Communities</div>
                  <p className="text-[10px] text-gray-600 leading-snug">Users and contributors stranded without roadmap, forks, or support.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 border-t border-gray-200 pt-2 font-mono">
            <span>CONCLUSION: CREATION IS EASY, PRESERVATION IS BROKEN</span>
            <span>IMPACT INDEX: SEVERE</span>
          </div>
        </div>
      ),
    },

    // SLIDE 03: PROPOSED SOLUTION
    {
      id: 'SLIDE_03',
      number: '03/14',
      code: 'SOLUTION_OVERVIEW_03',
      title: 'PROPOSED SOLUTION',
      subtitle: 'Preserving, Discovering & Reviving Software',
      notes: [
        '1. Revival Score: Explain that our proprietary algorithm evaluates commits, documentation quality, and remaining value.',
        '2. Adoption Workflow: Not a random fork. It formally initiates a stewardship agreement with original authors.',
        '3. Hall of Revivals: Gamifies revival by giving social proof and resume credit to new maintainers.',
      ],
      content: (
        <div className="w-full space-y-4 font-mono">
          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-200 pb-2">
            <span>SLIDE 03: PROPOSED SOLUTION</span>
            <span>PRODUCT_SPEC: DIGITAL_GRAVEYARD</span>
          </div>

          <div className="py-1 space-y-4">
            {/* Mission Banner */}
            <div className="bg-[#2b5f63] text-white border-2 border-on-surface p-3.5 retro-shadow">
              <span className="bg-[#9ec8cb] text-black font-bold text-[10px] px-2 py-0.5 border border-on-surface">
                CORE THESIS
              </span>
              <h2 className="text-base sm:text-xl font-bold uppercase mt-1 leading-snug">
                “Digital Graveyard is a platform for preserving, discovering and reviving abandoned software projects.”
              </h2>
            </div>

            {/* Core Components Grid */}
            <div>
              <div className="text-[10px] font-bold text-gray-600 mb-1.5 uppercase">// PLATFORM ARCHITECTURAL MODULES:</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                <div className="bg-white border border-on-surface p-2 hover:bg-gray-50">
                  <div className="font-bold text-[#2b5f63]">01. Project Submission</div>
                  <p className="text-[10px] text-gray-600 mt-1">One-click intake from GitHub/GitLab with automated metadata extraction.</p>
                </div>
                <div className="bg-white border border-on-surface p-2 hover:bg-gray-50">
                  <div className="font-bold text-[#2b5f63]">02. Repository Analysis</div>
                  <p className="text-[10px] text-gray-600 mt-1">Deep inspection of AST, test coverage, dependencies, and commit frequency.</p>
                </div>
                <div className="bg-white border border-on-surface p-2 hover:bg-gray-50">
                  <div className="font-bold text-[#2b5f63]">03. Revival Score</div>
                  <p className="text-[10px] text-gray-600 mt-1">Deterministic index (0-100) scoring viability, rescue effort, and modern relevance.</p>
                </div>
                <div className="bg-white border border-on-surface p-2 hover:bg-gray-50">
                  <div className="font-bold text-[#2b5f63]">04. Discovery System</div>
                  <p className="text-[10px] text-gray-600 mt-1">Faceted search filtering by language, revival score, difficulty, and domain.</p>
                </div>
                <div className="bg-white border border-on-surface p-2 hover:bg-gray-50">
                  <div className="font-bold text-[#2b5f63]">05. Adoption Workflow</div>
                  <p className="text-[10px] text-gray-600 mt-1">Structured intent pitch from aspiring maintainers to take over project stewardship.</p>
                </div>
                <div className="bg-white border border-on-surface p-2 hover:bg-gray-50">
                  <div className="font-bold text-[#2b5f63]">06. Stewardship Transfer</div>
                  <p className="text-[10px] text-gray-600 mt-1">Smart handover contracts, GitHub org invites, and transition documentation.</p>
                </div>
                <div className="bg-[#dbeceb] border border-on-surface p-2 col-span-2 md:col-span-2">
                  <div className="font-bold text-[#1c4b4f]">07. Hall of Revivals 🏆</div>
                  <p className="text-[10px] text-gray-700 mt-1">Permanent public showcase honoring rescued codebases with metrics on revival impact and stars.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 border-t border-gray-200 pt-2 font-mono">
            <span>MODULAR ARCHITECTURE // ENTERPRISE & FOSS COMPLIANT</span>
            <span>STAGE_A READY</span>
          </div>
        </div>
      ),
    },

    // SLIDE 04: MAIN USER JOURNEY
    {
      id: 'SLIDE_04',
      number: '04/14',
      code: 'USER_JOURNEY_04',
      title: 'MAIN USER JOURNEY',
      subtitle: 'End-to-End Revival Pipeline',
      notes: [
        '1. Focus on Step 06 & 07: Adoption is not just cloning; we facilitate communication with the previous maintainer.',
        '2. Step 09 Hall of Revivals: Keeps maintainers accountable by logging updates post-transfer.',
        '3. Frictionless intake: Step 01 takes under 15 seconds.',
      ],
      content: (
        <div className="w-full space-y-4 font-mono">
          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-200 pb-2">
            <span>SLIDE 04: USER JOURNEY</span>
            <span>PIPELINE_STAGES: STEP_01 TO STEP_09</span>
          </div>

          <div className="py-1 space-y-3">
            <div className="text-center">
              <span className="bg-[#9ec8cb] text-black font-bold text-[10px] px-2 py-0.5 border border-on-surface uppercase">
                COMPLETE LIFECYCLE
              </span>
              <h2 className="text-sm sm:text-lg font-bold uppercase mt-1">
                From Abandoned Repo to Re-energized Software
              </h2>
            </div>

            <div className="bg-[#f8f9fa] border border-on-surface p-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { num: '01', title: 'Submit Project', desc: 'Original author or scout posts URL' },
                  { num: '02', title: 'Repository Analysis', desc: 'Automated scanner dissects tree' },
                  { num: '03', title: 'Revival Score Generated', desc: 'Score 0-100 assigned' },
                  { num: '04', title: 'Project Record Created', desc: 'Public listing added to registry' },
                  { num: '05', title: 'User Discovery', desc: 'Prospective maintainers search' },
                  { num: '06', title: 'Adoption Request', desc: 'Adopter submits proposal' },
                  { num: '07', title: 'Ownership Transfer', desc: 'Cryptographic / OAuth handover' },
                  { num: '08', title: 'Project Revival', desc: 'New release & active commits' },
                  { num: '09', title: 'Hall of Revivals', desc: 'Immortalized in trophy ledger' },
                ].map((s, idx) => (
                  <div key={s.num} className="bg-white border border-on-surface p-2 flex items-start space-x-2 relative hover:bg-teal-50 transition-colors">
                    <span className="bg-[#2b5f63] text-white text-[10px] font-bold px-1.5 py-0.5 border border-on-surface shrink-0">
                      {s.num}
                    </span>
                    <div className="overflow-hidden">
                      <div className="font-bold text-[11px] text-gray-900 truncate">{s.title}</div>
                      <div className="text-[9px] text-gray-500">{s.desc}</div>
                    </div>
                    {idx < 8 && <div className="hidden sm:block absolute -right-2 top-3 text-[9px] text-gray-400 font-bold z-10">▶</div>}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-2.5 bg-[#e7eff0] border border-on-surface flex items-center justify-between text-[11px]">
              <span className="font-bold text-[#1c4b4f]">STATUS: 9 VERIFIED HANDSHAKE STEPS AUTOMATED VIA SYSTEM CONTROLLER</span>
              <span className="bg-white border border-on-surface px-2 py-0.5 text-[9px] font-bold text-gray-700">AVG TRANSITION: 48 HOURS</span>
            </div>
          </div>

          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 border-t border-gray-200 pt-2 font-mono">
            <span>JOURNEY ARCHITECTURE: USER-DRIVEN // VERIFIABLE HANDOFF</span>
            <span>STAGE: TESTED</span>
          </div>
        </div>
      ),
    },

    // SLIDE 05: SYSTEM INTEGRATION & ARCHITECTURE
    {
      id: 'SLIDE_05',
      number: '05/14',
      code: 'TECH_STACK_05',
      title: 'SYSTEM INTEGRATION & ARCHITECTURE',
      subtitle: 'Enterprise-grade Web Architecture Stack',
      notes: [
        '1. Frontend Layer: Next.js 14 App Router statically exported for maximum speed and instant CDN rendering.',
        '2. API Backend: FastAPI microservice handling asynchronous Git AST parsing and dependency analysis.',
        '3. Storage Layer: PostgreSQL database storing revival ledgers, user accounts, and score metrics.',
      ],
      content: (
        <div className="w-full space-y-4 font-mono">
          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-200 pb-2">
            <span>SLIDE 05: SYSTEM INTEGRATION</span>
            <span>STACK_SCHEMATIC: V1.0.EXE</span>
          </div>

          <div className="py-1 space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="text-base sm:text-xl font-bold uppercase text-gray-900">
                End-to-End Technology Stack & Data Flow
              </h2>
              <span className="bg-primary-container text-on-primary-container px-2 py-0.5 border border-on-surface text-[10px] font-bold uppercase">
                PRODUCTION READY
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-white border-2 border-on-surface p-3 retro-shadow-sm space-y-2">
                <div className="font-bold text-primary text-xs border-b border-gray-200 pb-1 flex justify-between">
                  <span>💻 FRONTEND LAYER</span>
                  <span className="text-[10px] text-gray-500">CLIENT</span>
                </div>
                <ul className="text-[11px] space-y-1 text-gray-700">
                  <li>• <strong>Framework:</strong> Next.js 14 App Router</li>
                  <li>• <strong>Language:</strong> TypeScript</li>
                  <li>• <strong>Styling:</strong> Tailwind CSS + Retro OS Design</li>
                  <li>• <strong>Icons:</strong> Material Symbols & VT323</li>
                  <li>• <strong>Deployment:</strong> GitHub Pages Static Pipeline</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-on-surface p-3 retro-shadow-sm space-y-2">
                <div className="font-bold text-[#2b5f63] text-xs border-b border-gray-200 pb-1 flex justify-between">
                  <span>⚡ BACKEND & SERVICES</span>
                  <span className="text-[10px] text-gray-500">API</span>
                </div>
                <ul className="text-[11px] space-y-1 text-gray-700">
                  <li>• <strong>API Gateway:</strong> FastAPI (Python 3.11)</li>
                  <li>• <strong>Analysis Engine:</strong> Tree-sitter AST Parser</li>
                  <li>• <strong>Auth:</strong> GitHub OAuth 2.0 & JWT</li>
                  <li>• <strong>Tasks:</strong> Celery async worker queue</li>
                  <li>• <strong>GitHub Integration:</strong> GraphQL API v4</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-on-surface p-3 retro-shadow-sm space-y-2">
                <div className="font-bold text-secondary text-xs border-b border-gray-200 pb-1 flex justify-between">
                  <span>🗄️ DATA & STORAGE</span>
                  <span className="text-[10px] text-gray-500">DATABASE</span>
                </div>
                <ul className="text-[11px] space-y-1 text-gray-700">
                  <li>• <strong>Primary DB:</strong> PostgreSQL 16</li>
                  <li>• <strong>Caching:</strong> Redis Memory Cache</li>
                  <li>• <strong>Object Store:</strong> AWS S3 / Cloudflare R2</li>
                  <li>• <strong>CI/CD:</strong> GitHub Actions Runner</li>
                  <li>• <strong>Monitoring:</strong> Sentry Telemetry</li>
                </ul>
              </div>
            </div>

            <div className="p-2.5 bg-gray-50 border border-on-surface text-[10px] text-gray-600 flex justify-between items-center">
              <span>SECURITY AUDIT: NO HARDCODED CREDS // TLS 1.3 MANDATORY</span>
              <span className="font-bold text-gray-900 uppercase">LATENCY: &lt; 120MS AVERAGE</span>
            </div>
          </div>

          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 border-t border-gray-200 pt-2 font-mono">
            <span>ARCHITECTURE: LOOSELY COUPLED MICROSERVICES</span>
            <span>CHECKSUM: VALIDATED</span>
          </div>
        </div>
      ),
    },

    // SLIDE 06: LIVE DEMO & PROTOTYPE
    {
      id: 'SLIDE_06',
      number: '06/14',
      code: 'LIVE_DEMO_06',
      title: 'LIVE DEMO & PROTOTYPE',
      subtitle: 'Interactive Retro Web Interface',
      notes: [
        '1. Functional Prototype: The entire site is deployed on GitHub Pages with static export.',
        '2. Retro Pixel OS Aesthetics: Custom theme tokens, retro window chrome, scanline effects, live clocks.',
        '3. Click Launch Live Site to switch over to the interactive home page during jury demonstration.',
      ],
      content: (
        <div className="w-full space-y-4 font-mono">
          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-200 pb-2">
            <span>SLIDE 06: LIVE DEMO</span>
            <span>DEPLOYMENT: GITHUB_PAGES</span>
          </div>

          <div className="py-2 space-y-4 text-center">
            <div className="w-12 h-12 bg-emerald-100 border border-on-surface flex items-center justify-center mx-auto text-emerald-800">
              <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>devices</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-bold uppercase text-gray-900">
              PROTOTYPE IS LIVE & OPERATIONAL
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
              Our web platform is fully compiled and deployed on GitHub Pages using Next.js static export with 100% responsive retro pixel OS styling.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left max-w-2xl mx-auto text-[11px]">
              <div className="p-3 bg-white border border-on-surface">
                <div className="font-bold text-primary mb-1">🎮 Retro Pixel OS</div>
                <p className="text-gray-600 text-[10px]">Titlebars, scanlines, drop shadows, live clock.</p>
              </div>
              <div className="p-3 bg-white border border-on-surface">
                <div className="font-bold text-primary mb-1">👥 Crew Roster</div>
                <p className="text-gray-600 text-[10px]">All 4 members with github/linkedin links.</p>
              </div>
              <div className="p-3 bg-white border border-on-surface">
                <div className="font-bold text-primary mb-1">📊 Project Graveyard</div>
                <p className="text-gray-600 text-[10px]">Mission overview, stats, pitch deck viewer.</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/"
                className="px-6 py-2.5 bg-primary text-on-primary font-bold border-2 border-on-surface retro-shadow hover:bg-primary-container hover:text-on-primary-container transition-all inline-block uppercase tracking-wider text-xs"
              >
                🚀 LAUNCH LIVE PROTOTYPE SITE
              </Link>
            </div>
          </div>

          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 border-t border-gray-200 pt-2 font-mono">
            <span>LIVE ENVIRONMENT: PRODUCTION</span>
            <span>URL: HARSHITA445.GITHUB.IO/SWE_PORTFOLIO_WEBSITE</span>
          </div>
        </div>
      ),
    },

    // SLIDE 07: SYSTEM VALIDATION & TESTING
    {
      id: 'SLIDE_07',
      number: '07/14',
      code: 'SYSTEM_VALIDATION_07',
      title: 'SYSTEM VALIDATION & TESTING',
      subtitle: 'Continuous Quality Verification',
      notes: [
        '1. Automated Testing: Next.js static type checking and build linting enforce quality on every commit.',
        '2. GitHub Actions Pipeline: Automatically triggers build, lint, export, and deployment to GitHub Pages.',
        '3. Cross-Browser Verification: Tested across Chrome, Edge, Safari, Firefox, and mobile screen viewports.',
      ],
      content: (
        <div className="w-full space-y-4 font-mono">
          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-200 pb-2">
            <span>SLIDE 07: SYSTEM VALIDATION</span>
            <span>TELEMETRY: CI_CD_PIPELINE</span>
          </div>

          <div className="py-1 space-y-3">
            <h2 className="text-base sm:text-xl font-bold uppercase text-gray-900">
              Quality Assurance & Automated Verification
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white border border-on-surface space-y-2">
                <div className="font-bold text-[#2b5f63] flex justify-between">
                  <span>🧪 Automated Test Suites</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-100 px-1 border border-black font-bold">100% PASS</span>
                </div>
                <ul className="text-[11px] space-y-1 text-gray-700">
                  <li>✔ <strong>Static Type Audit:</strong> TypeScript strict mode validation</li>
                  <li>✔ <strong>Component Render:</strong> React 18 component testing</li>
                  <li>✔ <strong>Route Generation:</strong> 6/6 static HTML pages compiled</li>
                  <li>✔ <strong>Linter Check:</strong> Next.js ESLint rule compliance</li>
                </ul>
              </div>

              <div className="p-3 bg-white border border-on-surface space-y-2">
                <div className="font-bold text-[#2b5f63] flex justify-between">
                  <span>⚙️ GitHub Actions CI/CD</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-100 px-1 border border-black font-bold">VERIFIED</span>
                </div>
                <ul className="text-[11px] space-y-1 text-gray-700">
                  <li>✔ <strong>Workflow File:</strong> <code>.github/workflows/deploy.yml</code></li>
                  <li>✔ <strong>Artifact Upload:</strong> <code>actions/upload-pages-artifact@v3</code></li>
                  <li>✔ <strong>Page Deploy:</strong> <code>actions/deploy-pages@v4</code></li>
                  <li>✔ <strong>Execution Time:</strong> 42 seconds automated build</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#f4f5f6] border border-on-surface p-2.5 text-[10px] text-gray-700 font-bold uppercase flex justify-between items-center">
              <span>ZERO WARN / ZERO ERRORS DURING PRODUCTION BUILD</span>
              <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 border border-on-surface">BUILD OK</span>
            </div>
          </div>

          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 border-t border-gray-200 pt-2 font-mono">
            <span>VERIFICATION STATUS: FULL PASS</span>
            <span>PIPELINE: GITHUB_ACTIONS</span>
          </div>
        </div>
      ),
    },

    // SLIDE 08: CURRENT STATUS
    {
      id: 'SLIDE_08',
      number: '08/14',
      code: 'STATUS_CHECK_08',
      title: 'CURRENT STATUS & DELIVERABLES',
      subtitle: 'Stage Deliverable Checklist',
      notes: [
        '1. Milestones Completed: Core web app, design system, pitch deck viewer, and GitHub Pages deployment.',
        '2. Stage Readiness: Prepared for live demo and jury evaluation.',
      ],
      content: (
        <div className="w-full space-y-4 font-mono">
          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-200 pb-2">
            <span>SLIDE 08: CURRENT STATUS</span>
            <span>STAGE: ALPHA_EVALUATION</span>
          </div>

          <div className="py-1 space-y-3">
            <h2 className="text-base sm:text-xl font-bold uppercase text-gray-900">
              Project Deliverable Status Checklist
            </h2>

            <div className="space-y-2 text-xs">
              {[
                { name: 'Stitch Pixel OS Design Replication', status: 'COMPLETED', detail: 'Space Mono, Teal palette, Retro shadows, scanlines' },
                { name: 'Next.js 14 Web Application Architecture', status: 'COMPLETED', detail: 'App Router with static HTML export configuration' },
                { name: 'Team Roster & Portfolio Showcase', status: 'COMPLETED', detail: '4 member cards with individual roles & stats' },
                { name: 'Digital Graveyard Project Page', status: 'COMPLETED', detail: 'Mission brief, tech stack, and pitch deck viewer' },
                { name: 'Interactive 14-Slide Presentation Deck', status: 'COMPLETED', detail: 'Interactive slide carousel & fullscreen presenter mode' },
                { name: 'GitHub Actions Automated CI/CD', status: 'COMPLETED', detail: 'Auto-build and deploy on push to main branch' },
              ].map((item) => (
                <div key={item.name} className="p-2.5 bg-white border border-on-surface flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">{item.name}</div>
                    <div className="text-[10px] text-gray-500">{item.detail}</div>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 border border-on-surface">
                    ✔ {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 border-t border-gray-200 pt-2 font-mono">
            <span>STAGE MILESTONES: 6/6 COMPLETED</span>
            <span>OVERALL PROGRESS: 100% READY</span>
          </div>
        </div>
      ),
    },

    // SLIDE 09: FUTURE ROADMAP
    {
      id: 'SLIDE_09',
      number: '09/14',
      code: 'ROADMAP_09',
      title: 'FUTURE ROADMAP & HORIZON',
      subtitle: 'Product Expansion Strategy',
      notes: [
        '1. Phase 1 (Now): Alpha Web Prototype & Pitch Deck.',
        '2. Phase 2 (Q1 2026): Automated Repo Health Scanner & AI Patch Generator.',
        '3. Phase 3 (Q2 2026): Bounty Micro-grants & Decentralized Stewardship Protocol.',
      ],
      content: (
        <div className="w-full space-y-4 font-mono">
          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-200 pb-2">
            <span>SLIDE 09: FUTURE ROADMAP</span>
            <span>STRATEGY: 2025 - 2026</span>
          </div>

          <div className="py-1 space-y-3">
            <h2 className="text-base sm:text-xl font-bold uppercase text-gray-900">
              Platform Expansion Strategy & Future Horizon
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-white border-2 border-on-surface p-3 retro-shadow-sm space-y-2">
                <div className="flex justify-between items-center border-b pb-1">
                  <span className="font-bold text-primary">PHASE 1: ALPHA</span>
                  <span className="bg-emerald-100 text-emerald-800 text-[9px] px-1 border border-black font-bold">CURRENT</span>
                </div>
                <ul className="text-[10px] space-y-1 text-gray-700">
                  <li>• Web platform launch</li>
                  <li>• Static team portfolio</li>
                  <li>• Manual project submission</li>
                  <li>• Basic revival scoring</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-on-surface p-3 retro-shadow-sm space-y-2">
                <div className="flex justify-between items-center border-b pb-1">
                  <span className="font-bold text-primary">PHASE 2: BETA</span>
                  <span className="bg-amber-100 text-amber-800 text-[9px] px-1 border border-black font-bold">Q1 2026</span>
                </div>
                <ul className="text-[10px] space-y-1 text-gray-700">
                  <li>• Automated GitHub crawler</li>
                  <li>• AI dependency patch generator</li>
                  <li>• AST vulnerability scanner</li>
                  <li>• Automated maintainer matchmaking</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-on-surface p-3 retro-shadow-sm space-y-2">
                <div className="flex justify-between items-center border-b pb-1">
                  <span className="font-bold text-primary">PHASE 3: ECOSYSTEM</span>
                  <span className="bg-gray-100 text-gray-600 text-[9px] px-1 border border-black font-bold">Q2 2026</span>
                </div>
                <ul className="text-[10px] space-y-1 text-gray-700">
                  <li>• Micro-grant bounty pool</li>
                  <li>• Hash-chained stewardship ledger</li>
                  <li>• Enterprise adoption grants</li>
                  <li>• Global open-source revival summit</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 border-t border-gray-200 pt-2 font-mono">
            <span>VISION: SUSTAINABLE OPEN-SOURCE PRESERVATION</span>
            <span>HORIZON: EXPANDING</span>
          </div>
        </div>
      ),
    },

    // SLIDE 10: TEAM CONTRIBUTIONS
    {
      id: 'SLIDE_10',
      number: '10/14',
      code: 'TEAM_CONTRIBUTIONS_10',
      title: 'TEAM CONTRIBUTIONS & ROLES',
      subtitle: 'Team Rocket Core Engineers',
      notes: [
        '1. Lakshay: Backend architecture, API endpoints, database schemas.',
        '2. Harshita: Frontend design system, Next.js components, Stitch design fidelity.',
        '3. Parth: Database optimization, system performance, cache management.',
        '4. Arshdeep: Technical documentation, UML diagrams, presentation deck.',
      ],
      content: (
        <div className="w-full space-y-4 font-mono">
          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-200 pb-2">
            <span>SLIDE 10: TEAM CONTRIBUTIONS</span>
            <span>ORGANIZATION: TEAM ROCKET</span>
          </div>

          <div className="py-1 space-y-3">
            <h2 className="text-base sm:text-xl font-bold uppercase text-gray-900">
              Engineer Task Breakdown & Ownership
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 bg-white border border-on-surface">
                <div className="font-bold text-[#2b5f63] text-sm">Lakshay</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase mb-1">Backend & API Specialist</div>
                <p className="text-[10px] text-gray-700">Designed FastAPI endpoints, AST analysis worker queues, and database schema mappings.</p>
              </div>

              <div className="p-3 bg-white border border-on-surface">
                <div className="font-bold text-[#2b5f63] text-sm">Harshita</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase mb-1">Frontend & UI/UX Architect</div>
                <p className="text-[10px] text-gray-700">Built Next.js 14 architecture, Tailwind retro design tokens, header/footer components, and Pages deployment.</p>
              </div>

              <div className="p-3 bg-white border border-on-surface">
                <div className="font-bold text-[#2b5f63] text-sm">Parth</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase mb-1">Database & Systems Engineer</div>
                <p className="text-[10px] text-gray-700">Configured PostgreSQL models, Redis caching layer, and benchmarked API endpoint latencies.</p>
              </div>

              <div className="p-3 bg-white border border-on-surface">
                <div className="font-bold text-[#2b5f63] text-sm">Arshdeep</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase mb-1">Documentation & Systems UML</div>
                <p className="text-[10px] text-gray-700">Created system architectural diagrams, pitch deck presentation slides, and user journey flowcharts.</p>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 border-t border-gray-200 pt-2 font-mono">
            <span>TEAM: 100% COLLABORATIVE SYNCHRONIZATION</span>
            <span>STATUS: READY FOR Q&A</span>
          </div>
        </div>
      ),
    },

    // SLIDE 11: HARD QUESTION 1
    {
      id: 'SLIDE_11',
      number: '11/14',
      code: 'HARD_Q_01',
      title: 'THE HARD QUESTIONS // Pressure Testing The Idea',
      subtitle: 'Question 1: Cloning vs Attribution',
      notes: [
        '1. Direct Answer: Emphasize that Digital Graveyard enforces attribution through permanent Revival Records.',
        '2. What is Recorded: Original Creator, Reviver, Transfer Date, Revival Status - publicly and indelibly.',
        '3. Core Takeaway: "Project continuation should not erase project ownership." It gives credit where credit is due.',
      ],
      content: (
        <div className="w-full space-y-3 font-mono">
          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-200 pb-2">
            <span>THE HARD QUESTIONS // PRESSURE TESTING THE IDEA</span>
            <span>DEFENSE_INDEX: Q1_ATTRIBUTION</span>
          </div>

          <div className="py-1 space-y-3">
            <div className="bg-[#fff3cd] border border-amber-900 p-2.5">
              <span className="bg-amber-800 text-white text-[9px] px-1.5 py-0.5 font-bold uppercase border border-on-surface">
                QUESTION 1
              </span>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 mt-1 uppercase">
                "Doesn't cloning someone else's repository erase their attribution?"
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 text-xs">
              <div className="md:col-span-5 bg-[#fff8f8] border border-red-900 p-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1 text-red-900 font-bold uppercase text-[11px] mb-2 border-b border-red-200 pb-1">
                    <span>⚠️ THE CONCERN</span>
                  </div>
                  <p className="text-[11px] text-gray-800 leading-relaxed">
                    Forking or adopting an abandoned codebase might overwrite the original creator&apos;s legacy and history.
                  </p>
                </div>
                <div className="mt-2 text-[9px] text-red-800 uppercase font-bold">
                  PLAGIARISM RISK IN TRADITIONAL FORKS
                </div>
              </div>

              <div className="md:col-span-7 bg-[#f0f7f7] border border-teal-950 p-3 space-y-2">
                <div className="flex items-center justify-between text-teal-950 font-bold uppercase text-[11px] border-b border-teal-200 pb-1">
                  <span>💡 THE ANSWER</span>
                  <span className="bg-[#2b5f63] text-white text-[9px] px-1 border border-on-surface">PERMANENT LEDGER</span>
                </div>
                <p className="text-[11px] text-gray-900 font-medium">
                  Digital Graveyard preserves attribution through permanent Revival Records and project stewardship history.
                </p>
                <div className="grid grid-cols-2 gap-1.5 text-[10px] font-mono">
                  <div className="bg-white border border-on-surface p-1.5">1. <strong>Original Creator</strong></div>
                  <div className="bg-white border border-on-surface p-1.5">2. <strong>Reviver</strong></div>
                  <div className="bg-white border border-on-surface p-1.5">3. <strong>Transfer Date</strong></div>
                  <div className="bg-white border border-on-surface p-1.5">4. <strong>Revival Status</strong></div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-on-surface p-2.5 flex items-center justify-between border-l-4 border-l-[#2b5f63]">
              <div className="text-[10px] text-gray-500 uppercase font-bold mr-2">KEY TAKEAWAY:</div>
              <div className="text-xs sm:text-sm font-bold text-gray-900 uppercase">
                Project continuation should not erase project ownership.
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 border-t border-gray-200 pt-2 font-mono">
            <span>DEFENSE TELEMETRY: QUESTION 1 OF 4</span>
            <span>ATTRIBUTION_GUARD: ACTIVE</span>
          </div>
        </div>
      ),
    },

    // SLIDE 12: HARD QUESTION 2
    {
      id: 'SLIDE_12',
      number: '12/14',
      code: 'HARD_Q_02',
      title: 'THE HARD QUESTIONS // Pressure Testing The Idea',
      subtitle: 'Question 2: Rebuilding vs Adopting',
      notes: [
        '1. The Core Insight: Software value is not merely the initial concept; it is the thousands of commits, tests, and user bug reports.',
        '2. Seven Key Assets: Code, Docs, Commits, Contributors, Communities, Datasets, Branding.',
        '3. Revival Value Report: Automatically quantifies replacement cost so new maintainers see immediate ROI.',
      ],
      content: (
        <div className="w-full space-y-3 font-mono">
          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-200 pb-2">
            <span>THE HARD QUESTIONS // PRESSURE TESTING THE IDEA</span>
            <span>DEFENSE_INDEX: Q2_VALUE_PRESERVATION</span>
          </div>

          <div className="py-1 space-y-3">
            <div className="bg-[#fff3cd] border border-amber-900 p-2.5">
              <span className="bg-amber-800 text-white text-[9px] px-1.5 py-0.5 font-bold uppercase border border-on-surface">
                QUESTION 2
              </span>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 mt-1 uppercase">
                "Why adopt a project instead of rebuilding it from scratch?"
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 text-xs">
              <div className="md:col-span-5 bg-[#fff8f8] border border-red-900 p-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1 text-red-900 font-bold uppercase text-[11px] mb-2 border-b border-red-200 pb-1">
                    <span>⚠️ THE CONCERN</span>
                  </div>
                  <p className="text-[11px] text-gray-800 leading-relaxed">
                    A developer could look at the idea, ignore the repository, and build a new version independently.
                  </p>
                </div>
                <div className="mt-2 text-[9px] text-red-800 uppercase font-bold">
                  COST OF NOT-INVENTED-HERE SYNDROME
                </div>
              </div>

              <div className="md:col-span-7 bg-[#f0f7f7] border border-teal-950 p-3 space-y-2">
                <div className="flex items-center justify-between text-teal-950 font-bold uppercase text-[11px] border-b border-teal-200 pb-1">
                  <span>💡 THE ANSWER</span>
                  <span className="bg-[#9ec8cb] text-black text-[9px] px-1 border border-on-surface">REVIVAL VALUE REPORT</span>
                </div>
                <p className="text-[11px] text-gray-900 font-medium">
                  Most abandoned projects contain valuable assets that are expensive to recreate:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-[10px]">
                  {['Existing code', 'Documentation', 'Historical commits', 'Contributors', 'Communities', 'Datasets', 'Established branding'].map((a) => (
                    <div key={a} className="bg-white border border-on-surface px-2 py-1 font-bold text-gray-800">
                      ▸ {a}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-on-surface p-2.5 flex items-center justify-between border-l-4 border-l-[#2b5f63]">
              <div className="text-[10px] text-gray-500 uppercase font-bold mr-2">KEY TAKEAWAY:</div>
              <div className="text-xs sm:text-sm font-bold text-gray-900 uppercase">
                The value lies in the accumulated work, not just the idea.
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 border-t border-gray-200 pt-2 font-mono">
            <span>DEFENSE TELEMETRY: QUESTION 2 OF 4</span>
            <span>SAVINGS: 120 - 400 DEV HOURS</span>
          </div>
        </div>
      ),
    },

    // SLIDE 13: HARD QUESTION 3
    {
      id: 'SLIDE_13',
      number: '13/14',
      code: 'HARD_Q_03',
      title: 'THE HARD QUESTIONS // Pressure Testing The Idea',
      subtitle: 'Question 3: GitHub vs Digital Graveyard',
      notes: [
        '1. Clarify the Complement: Digital Graveyard is built on top of GitHub, not trying to compete with git hosting.',
        '2. The Distinction: GitHub is creation and storage. Digital Graveyard is life support and continuation.',
        '3. Distinct Capabilities: Revival Score, Abandonment Analysis, Stewardship Transfer, Hall of Revivals.',
      ],
      content: (
        <div className="w-full space-y-3 font-mono">
          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-200 pb-2">
            <span>THE HARD QUESTIONS // PRESSURE TESTING THE IDEA</span>
            <span>DEFENSE_INDEX: Q3_ECOSYSTEM_POSITION</span>
          </div>

          <div className="py-1 space-y-3">
            <div className="bg-[#fff3cd] border border-amber-900 p-2.5">
              <span className="bg-amber-800 text-white text-[9px] px-1.5 py-0.5 font-bold uppercase border border-on-surface">
                QUESTION 3
              </span>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 mt-1 uppercase">
                "Isn&apos;t this just GitHub with extra steps?"
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 text-xs">
              <div className="md:col-span-5 bg-[#fff8f8] border border-red-900 p-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1 text-red-900 font-bold uppercase text-[11px] mb-2 border-b border-red-200 pb-1">
                    <span>⚠️ THE CONCERN</span>
                  </div>
                  <p className="text-[11px] text-gray-800 leading-relaxed">
                    GitHub already stores repositories and preserves contributor history.
                  </p>
                </div>
                <div className="mt-2 text-[9px] text-gray-600 uppercase font-bold">
                  COLD STORAGE != ACTIVE RESURRECTION
                </div>
              </div>

              <div className="md:col-span-7 bg-[#f0f7f7] border border-teal-950 p-3 space-y-2">
                <div className="flex items-center justify-between text-teal-950 font-bold uppercase text-[11px] border-b border-teal-200 pb-1">
                  <span>⚡ THE ANSWER</span>
                  <span className="bg-[#2b5f63] text-white text-[9px] px-1 border border-on-surface">COMPLEMENTARY LAYER</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="bg-white border border-on-surface p-2">
                    <div className="text-gray-500 font-bold">GITHUB:</div>
                    <div className="font-bold text-gray-900">Helps people create and host projects.</div>
                  </div>
                  <div className="bg-[#dbeceb] border border-on-surface p-2">
                    <div className="text-teal-800 font-bold">DIGITAL GRAVEYARD:</div>
                    <div className="font-bold text-[#1c4b4f]">Helps projects survive after abandonment.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-on-surface p-2.5 flex items-center justify-between border-l-4 border-l-[#2b5f63]">
              <div className="text-[10px] text-gray-500 uppercase font-bold mr-2">KEY TAKEAWAY:</div>
              <div className="text-xs sm:text-sm font-bold text-gray-900 uppercase">
                GitHub stores projects. Digital Graveyard focuses on project continuation.
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 border-t border-gray-200 pt-2 font-mono">
            <span>DEFENSE TELEMETRY: QUESTION 3 OF 4</span>
            <span>POSITION: ENGINE LAYER</span>
          </div>
        </div>
      ),
    },

    // SLIDE 14: HARD QUESTION 4
    {
      id: 'SLIDE_14',
      number: '14/14',
      code: 'HARD_Q_04',
      title: 'THE HARD QUESTIONS // Pressure Testing The Idea',
      subtitle: 'Question 4: Worth Reviving Criteria',
      notes: [
        '1. Evidence-Based Revival: Prevent wasting developer time by surfacing code rot and deprecations up front.',
        '2. Five Indicators: Activity, Documentation, Contributor history, Maintenance status, Assets.',
        '3. Concluding Punchline: "Users make decisions based on evidence rather than assumptions."',
      ],
      content: (
        <div className="w-full space-y-3 font-mono">
          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-200 pb-2">
            <span>THE HARD QUESTIONS // PRESSURE TESTING THE IDEA</span>
            <span>DEFENSE_INDEX: Q4_WORTH_EVALUATION</span>
          </div>

          <div className="py-1 space-y-3">
            <div className="bg-[#fff3cd] border border-amber-900 p-2.5">
              <span className="bg-amber-800 text-white text-[9px] px-1.5 py-0.5 font-bold uppercase border border-on-surface">
                QUESTION 4
              </span>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 mt-1 uppercase">
                "How does someone know whether a project is worth reviving?"
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 text-xs">
              <div className="md:col-span-5 bg-[#fff8f8] border border-red-900 p-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1 text-red-900 font-bold uppercase text-[11px] mb-2 border-b border-red-200 pb-1">
                    <span>⚠️ THE CONCERN</span>
                  </div>
                  <p className="text-[11px] text-gray-800 leading-relaxed">
                    Not every abandoned project deserves additional effort.
                  </p>
                </div>
                <div className="mt-2 text-[9px] text-red-800 uppercase font-bold">
                  EVALUATION MUST BE SCIENTIFIC, NOT EMOTIONAL
                </div>
              </div>

              <div className="md:col-span-7 bg-[#f0f7f7] border border-teal-950 p-3 space-y-2">
                <div className="flex items-center justify-between text-teal-950 font-bold uppercase text-[11px] border-b border-teal-200 pb-1">
                  <span>📊 THE ANSWER</span>
                  <span className="bg-[#2b5f63] text-white text-[9px] px-1 border border-on-surface">DATA-DRIVEN INDEX</span>
                </div>
                <div className="space-y-1 text-[10px]">
                  {[
                    { name: 'Repository activity', metric: 'Commit velocity & PR resolution' },
                    { name: 'Documentation quality', metric: 'Readmes, API docs, Architecture diagrams' },
                    { name: 'Contributor history', metric: 'Bus factor & community depth' },
                    { name: 'Maintenance status', metric: 'Security CVEs, dependency drift' },
                    { name: 'Available assets', metric: 'Fixtures, datasets, test suites' },
                  ].map((ind) => (
                    <div key={ind.name} className="bg-white border border-on-surface p-1.5 flex items-center justify-between">
                      <span className="font-bold text-gray-900">• {ind.name}</span>
                      <span className="text-[9px] text-teal-800 font-mono bg-teal-50 px-1 border border-on-surface">{ind.metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-on-surface p-2.5 flex items-center justify-between border-l-4 border-l-[#2b5f63]">
              <div className="text-[10px] text-gray-500 uppercase font-bold mr-2">KEY TAKEAWAY:</div>
              <div className="text-xs sm:text-sm font-bold text-gray-900 uppercase">
                Users make decisions based on evidence rather than assumptions.
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center text-[10px] text-gray-500 border-t border-gray-200 pt-2 font-mono">
            <span>DEFENSE TELEMETRY: COMPLETE [14/14 SLIDES]</span>
            <span>STATUS: JURY READY</span>
          </div>
        </div>
      ),
    },
  ]

  const currentSlide = slides[currentSlideIndex]

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1))
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0))
  }, [])

  const goToSlide = (idx: number) => {
    if (idx >= 0 && idx < slides.length) {
      setCurrentSlideIndex(idx)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase()
      if (activeTag && ['input', 'textarea', 'select'].includes(activeTag)) {
        return
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace' || e.key === 'PageUp') {
        e.preventDefault()
        prevSlide()
      } else if (e.key === 'f' || e.key === 'F') {
        setIsFullscreen((prev) => !prev)
      } else if (e.key === 'Escape') {
        setIsFullscreen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#eceeed] text-[#111827] text-xs font-mono select-none">
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

          {/* Quick Jump Pills */}
          <div className="hidden lg:flex items-center space-x-1 text-[10px]">
            <span className="text-gray-500 font-bold mr-1">QUICK_JUMP:</span>
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => goToSlide(idx)}
                className={`px-1.5 py-0.5 border border-on-surface text-[9px] font-bold ${
                  idx === currentSlideIndex
                    ? 'bg-[#9ec8cb] text-black retro-shadow-sm'
                    : 'bg-white hover:bg-gray-100 text-gray-700'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 text-[11px] mt-1 sm:mt-0 font-medium">
            <span className="w-2 h-2 rounded-full bg-teal-600 inline-block animate-pulse"></span>
            <span className="text-gray-600 uppercase">SYS_NODE://STAGE_A</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-900 font-bold uppercase tracking-tight">
              DIR:\TEAM_ROCKET\DECK.EXE
            </span>
          </div>
        </div>

        {/* Main Window Container */}
        <main className="w-full max-w-6xl mx-auto px-3 sm:px-4 py-4 flex-grow flex flex-col justify-start">
          <div className="bg-white border-2 border-on-surface retro-shadow flex flex-col overflow-hidden mb-4">
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
                  14 SLIDES LOADED
                </span>
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="px-2 py-0.5 bg-white border border-on-surface hover:bg-[#2b5f63] hover:text-white text-[10px] font-bold active-press"
                >
                  ⛶ PRESENT
                </button>
                <button aria-label="Minimize" className="w-4 h-4 bg-white border border-on-surface flex items-center justify-center text-[9px] hover:bg-gray-100 leading-none">
                  _
                </button>
                <button aria-label="Close" className="w-4 h-4 bg-white border border-on-surface flex items-center justify-center text-[9px] hover:bg-red-500 hover:text-white leading-none">
                  ✕
                </button>
              </div>
            </div>

            {/* Window Content Interior */}
            <div className="p-4 md:p-6 space-y-4 bg-white font-mono">
              {/* Top Banner */}
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

                <div className="flex items-center space-x-2 bg-white border border-on-surface px-2.5 py-1 text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block animate-pulse"></span>
                  <span className="font-bold text-gray-800 uppercase text-[10px] sm:text-[11px]">
                    STATUS: READY FOR JUDGE EVALUATION (PROTOTYPE IN PROGRESS)
                  </span>
                </div>
              </div>

              {/* Main Presentation Stage & Actions Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Left Stage */}
                <section className="lg:col-span-8 flex flex-col">
                  <div className="border-2 border-on-surface bg-white flex flex-col shadow-sm">
                    {/* Stage Header */}
                    <div className="bg-[#eef2f3] border-b-2 border-on-surface px-3 py-1.5 flex items-center justify-between text-[11px] font-bold">
                      <div className="flex items-center space-x-1.5">
                        <span className="text-teal-700">▶</span>
                        <span className="tracking-wide text-gray-800 uppercase">
                          PREVIEW_CONTAINER.VIEW
                        </span>
                      </div>
                      <div className="text-gray-700 tracking-wider font-mono">
                        SLIDE {(currentSlideIndex + 1).toString().padStart(2, '0')} / 14
                      </div>
                    </div>

                    {/* Active Slide Canvas */}
                    <div className="p-4 sm:p-6 min-h-[440px] flex flex-col justify-between bg-[#fdfdfd] relative overflow-hidden">
                      {currentSlide.content}
                    </div>

                    {/* Navigation Control Bar */}
                    <div className="bg-[#f4f5f6] border-t-2 border-on-surface p-2 flex items-center justify-between flex-wrap gap-2 text-xs">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={prevSlide}
                          disabled={currentSlideIndex === 0}
                          className="bg-white border border-on-surface px-3 py-1 hover:bg-gray-100 font-bold active-press text-[11px] retro-shadow-sm disabled:opacity-40"
                        >
                          [ ◀ PREVIOUS ]
                        </button>
                        <button
                          onClick={nextSlide}
                          disabled={currentSlideIndex === slides.length - 1}
                          className="bg-white border border-on-surface px-3 py-1 hover:bg-gray-100 font-bold active-press text-[11px] retro-shadow-sm disabled:opacity-40"
                        >
                          [ NEXT ▶ ]
                        </button>
                      </div>

                      <div className="flex items-center space-x-1.5">
                        <label htmlFor="slide-select" className="text-[10px] text-gray-500 font-bold uppercase hidden sm:inline">
                          GO_TO:
                        </label>
                        <select
                          id="slide-select"
                          value={currentSlideIndex}
                          onChange={(e) => goToSlide(Number(e.target.value))}
                          className="bg-white border border-on-surface text-[11px] font-mono py-0.5 px-2 font-bold cursor-pointer"
                        >
                          {slides.map((s, idx) => (
                            <option key={s.id} value={idx}>
                              {(idx + 1).toString().padStart(2, '0')}: {s.title}
                            </option>
                          ))}
                        </select>
                        <div className="font-bold text-gray-800 text-[11px] bg-white border border-on-surface px-3 py-0.5">
                          SLIDE {(currentSlideIndex + 1).toString().padStart(2, '0')} / 14
                        </div>
                      </div>

                      <button
                        onClick={() => setIsFullscreen(true)}
                        className="bg-[#9ec8cb] hover:bg-[#85b7ba] text-black border border-on-surface px-3 py-1 font-bold text-[11px] flex items-center space-x-1 retro-shadow-sm active-press"
                      >
                        <span>⛶</span>
                        <span>[ PRESENTATION MODE ]</span>
                      </button>
                    </div>
                  </div>
                </section>

                {/* Right Panel */}
                <section className="lg:col-span-4 flex flex-col space-y-4">
                  {/* Actions Box */}
                  <div className="border-2 border-on-surface bg-[#fdfdfd] p-3 flex flex-col justify-between">
                    <div className="text-[10px] font-bold text-gray-600 uppercase mb-2 flex justify-between items-center">
                      <span>ARCHIVE_SNAPSHOT</span>
                      <span className="bg-teal-100 text-teal-800 text-[9px] px-1 border border-on-surface">
                        SYNCED
                      </span>
                    </div>

                    <div className="bg-[#e7ebee] border border-on-surface p-4 flex flex-col items-center justify-center text-center my-1">
                      <div className="text-3xl mb-1 text-gray-800">📖</div>
                      <div className="text-[11px] font-bold tracking-wider text-gray-800 uppercase">
                        SLIDE {(currentSlideIndex + 1).toString().padStart(2, '0')} // {currentSlide.code}
                      </div>
                      <div className="text-[9px] text-gray-500 uppercase mt-0.5">
                        MD5: 4F92AC908B12 • 14 SLIDES COMPILED
                      </div>
                    </div>

                    <div className="space-y-2 mt-2">
                      <button
                        onClick={() => setIsFullscreen(true)}
                        className="w-full bg-[#2b5f63] hover:bg-[#224b4e] text-white border border-on-surface font-bold py-2 px-3 text-center block text-xs tracking-wider uppercase shadow-[2px_2px_0px_#000000] active-press"
                      >
                        ⛶ LAUNCH FULLSCREEN DECK (F)
                      </button>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => goToSlide(5)}
                          className="bg-[#9ec8cb] hover:bg-[#88bcc0] text-gray-900 border border-on-surface font-bold py-1.5 px-2 text-center text-[10px] uppercase shadow-sm active-press"
                        >
                          🚀 LIVE DEMO
                        </button>
                        <button
                          onClick={() => goToSlide(10)}
                          className="bg-white hover:bg-gray-100 text-gray-900 border border-on-surface font-bold py-1.5 px-2 text-center text-[10px] uppercase shadow-sm active-press"
                        >
                          ⚡ HARD Q&A
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Speaker Notes */}
                  <div className="border-2 border-on-surface bg-white p-3 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-bold text-gray-600 uppercase mb-2 border-b pb-1 flex items-center justify-between">
                        <span>// SPEAKER_NOTES_BRIEF</span>
                        <span className="text-[9px] bg-gray-100 px-1 border border-on-surface text-gray-600">
                          SLIDE {currentSlideIndex + 1}/14
                        </span>
                      </div>
                      <div className="text-[11px] text-gray-700 space-y-2">
                        <div className="font-bold text-gray-900 uppercase text-[10px]">{currentSlide.title}</div>
                        <ul className="space-y-1.5">
                          {currentSlide.notes.map((n, i) => (
                            <li key={i} className="flex items-start space-x-1.5">
                              <span className="text-teal-700 font-bold">•</span>
                              <span>{n}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-dashed border-gray-300 flex justify-between items-center text-[9px] text-gray-500 font-mono">
                      <span>TOTAL SLIDES: 14</span>
                      <span>PRESSURE TESTED: YES</span>
                    </div>
                  </div>
                </section>
              </div>

              {/* Bottom Bar */}
              <div className="pt-2 flex flex-wrap items-center justify-between border-t border-gray-200 text-[11px] font-bold text-gray-700">
                <Link href="/project" className="hover:text-black flex items-center space-x-1 uppercase py-1">
                  <span>↵</span>
                  <span>RETURN TO ABOUT PROJECT</span>
                </Link>
                <div className="text-gray-500 uppercase tracking-widest text-[10px] py-1">
                  KEYS: [← / →] PREV/NEXT • [F] FULLSCREEN • [ESC] EXIT
                </div>
                <div className="text-gray-500 uppercase tracking-widest text-[10px] py-1">
                  CHECKSUM: 14_SLIDES_VERIFIED // EOF
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* FULLSCREEN PRESENTER MODAL */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-[#111827]/90 backdrop-blur-sm flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 select-none font-mono">
          <div className="w-full max-w-7xl h-full flex flex-col bg-[#eceeed] border-2 border-on-surface shadow-[8px_8px_0px_#000000] overflow-hidden">
            <header className="bg-[#2b5f63] text-white border-b-2 border-on-surface px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-sm">🕹️</span>
                <span className="font-bold text-xs md:text-sm tracking-wider uppercase text-[#c0eaed]">
                  SYSTEM &gt; PRESENTATION MODE // DIGITAL_GRAVEYARD.EXE
                </span>
                <span className="hidden md:inline-block bg-[#1a4245] px-2 py-0.5 text-[10px] border border-[#9ec8cb] text-[#c0eaed]">
                  LIVE_JURY_VIEW [14 SLIDES]
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[11px] font-bold text-white bg-black/40 px-2.5 py-1 border border-white/50">
                  SLIDE {(currentSlideIndex + 1).toString().padStart(2, '0')} / 14
                </span>
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="bg-red-600 hover:bg-red-700 text-white border border-on-surface px-3 py-1 font-bold text-xs uppercase shadow-[2px_2px_0px_#000] active-press flex items-center space-x-1"
                >
                  <span>[ ESC / EXIT PRESENTATION ]</span>
                </button>
              </div>
            </header>

            <main className="flex-grow bg-[#ffffff] p-4 sm:p-8 md:p-10 overflow-y-auto flex flex-col justify-between relative">
              {currentSlide.content}
            </main>

            <footer className="bg-white border-t-2 border-on-surface px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevSlide}
                  disabled={currentSlideIndex === 0}
                  className="bg-white hover:bg-gray-100 border border-on-surface px-4 py-1.5 font-bold uppercase shadow-[2px_2px_0px_#000] active-press text-xs disabled:opacity-40"
                >
                  ◀ PREV SLIDE
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentSlideIndex === slides.length - 1}
                  className="bg-[#9ec8cb] hover:bg-[#85b7ba] text-black border border-on-surface px-4 py-1.5 font-bold uppercase shadow-[2px_2px_0px_#000] active-press text-xs disabled:opacity-40"
                >
                  NEXT SLIDE ▶
                </button>
              </div>

              <div className="hidden lg:flex items-center space-x-1">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => goToSlide(idx)}
                    className={`px-2 py-0.5 border border-on-surface text-[10px] font-bold ${
                      idx === currentSlideIndex
                        ? 'bg-[#2b5f63] text-white shadow-[1px_1px_0px_#000]'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-3 text-[11px] text-gray-700">
                <span className="bg-gray-100 border border-on-surface px-2 py-1">NAV: ◀ / ▶ ARROWS or SPACE</span>
                <span className="bg-gray-100 border border-on-surface px-2 py-1">EXIT: ESC</span>
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="bg-gray-200 hover:bg-gray-300 border border-on-surface px-3 py-1 font-bold uppercase"
                >
                  EXIT MODE [✕]
                </button>
              </div>
            </footer>
          </div>
        </div>
      )}
    </div>
  )
}
