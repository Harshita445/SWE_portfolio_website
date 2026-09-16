import type { Metadata } from 'next'
import Link from 'next/link'
import TeamMemberCard from '@/components/TeamMemberCard'

export const metadata: Metadata = {
  title: 'Team Roster | Team Rocket Portfolio',
  description: 'Meet the Team Rocket crew — the software engineers behind Digital Graveyard.',
}

const teamMembers = [
  {
    id: '01',
    name: 'Lakshay',
    role: 'BACKEND DEVELOPER',
    description: 'Backend architecture, robust APIs, server runtime logic, and high-performance microservices.',
    skills: ['FastAPI', 'Node.js', 'Docker', 'REST APIs'],
    iconColor: { bg: '#d1fae5', border: '#065f46', icon: '#047857' },
    icon: 'terminal',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '02',
    name: 'Harshita',
    role: 'FRONTEND DEVELOPER',
    description: 'Responsive UI, retro styling, intuitive user interactions & modern frontend component systems.',
    skills: ['React', 'Tailwind', 'UI/UX', 'CSS Grid'],
    iconColor: { bg: '#ffe4e6', border: '#9f1239', icon: '#e11d48' },
    icon: 'brush',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '03',
    name: 'Parth',
    role: 'DATABASE ARCHITECT',
    description: 'Data modeling, relational schema architecture, query optimization, and reliable storage pipelines.',
    skills: ['PostgreSQL', 'SQL', 'Redis', 'Data Modeling'],
    iconColor: { bg: '#fef3c7', border: '#92400e', icon: '#d97706' },
    icon: 'database',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '04',
    name: 'Arshdeep',
    role: 'DOCUMENTATION & UML',
    description: 'UML diagrams, technical specs, system architecture documentation, and architectural blueprints.',
    skills: ['UML', 'System Design', 'Tech Specs', 'Architecture'],
    iconColor: { bg: '#e0e7ff', border: '#3730a3', icon: '#4f46e5' },
    icon: 'account_tree',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
]

const monoStyle = { fontFamily: 'Space Mono, monospace' }

export default function HomePage() {
  return (
    <div className="w-full px-gutter md:px-margin py-space-lg max-w-7xl mx-auto">
      <div className="flex flex-col w-full gap-space-lg fade-in-up">

        {/* TOP STATUS STRIP */}
        <div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low px-space-md py-space-xs border border-outline-variant text-on-surface">
          <div className="flex items-center gap-space-xs" style={{ ...monoStyle, fontSize: '12px', lineHeight: '16px', fontWeight: '700' }}>
            <span className="text-primary font-bold">DIR:\TEAM_ROCKET\</span>
            <span className="bg-primary-container px-space-xs py-[2px] text-on-primary-container font-bold">ROSTER.EXE</span>
            <span className="text-on-surface-variant font-normal hidden sm:inline">[READ-ONLY]</span>
          </div>
          <div className="flex items-center gap-space-md text-on-surface-variant" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              MEM: 4/4 SLOTS
            </span>
            <span className="hidden md:inline">CODEBASE: REVIVED</span>
            <span className="bg-surface-container-highest px-space-xs border border-outline">SYNC: OK</span>
          </div>
        </div>

        {/* MAIN RETRO WINDOW */}
        <div className="w-full bg-surface-container-lowest border-2 border-on-surface shadow-[4px_4px_0px_#1a1c1c] flex flex-col">

          {/* Window titlebar */}
          <div className="bg-primary-container border-b-2 border-on-surface px-space-md py-space-xs flex items-center justify-between select-none">
            <div className="flex items-center gap-space-sm">
              <span className="w-3.5 h-3.5 bg-on-surface inline-block"></span>
              <span className="font-bold uppercase text-on-primary-container tracking-wider" style={{ ...monoStyle, fontSize: '15px', lineHeight: '22px', letterSpacing: '0.04em' }}>
                TEAM_ROSTER.EXE
              </span>
              <span className="text-on-primary-container hidden sm:inline-block px-space-xs bg-white/60 border border-on-primary-container" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                OS::v1.0.4
              </span>
            </div>
            <div className="flex items-center gap-[3px]">
              {['_', '□', '✕'].map((btn, i) => (
                <button key={i} aria-label={['Minimize', 'Maximize', 'Close'][i]}
                  className={`w-5 h-5 flex items-center justify-center bg-surface-container-lowest border border-on-surface text-on-surface retro-shadow-sm active-press hover:bg-surface-container ${i === 2 ? 'hover:!bg-error-container hover:text-on-error-container' : ''}`}
                  style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', fontWeight: '700' }}>
                  {btn}
                </button>
              ))}
            </div>
          </div>

          {/* Window content */}
          <div className="p-space-md md:p-space-lg flex flex-col gap-space-lg bg-surface">

            {/* Welcome banner */}
            <div className="bg-surface-container-low border-2 border-on-surface p-space-md md:p-space-lg flex flex-col md:flex-row items-center gap-space-lg shadow-[2px_2px_0px_#1a1c1c]">
              <div className="flex-1 w-full relative">
                <div className="bg-surface-container-lowest border-2 border-on-surface p-space-md shadow-[2px_2px_0px_#1a1c1c] flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between flex-wrap gap-space-xs">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-2 h-2 bg-primary inline-block"></span>
                      <span className="text-primary font-bold uppercase tracking-wider" style={{ ...monoStyle, fontSize: '12px', lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '700' }}>
                        SYSTEM_PROMPT // WELCOME_LOG
                      </span>
                    </div>
                    <span className="text-on-surface-variant bg-surface-container px-space-xs border border-outline-variant" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                      TRANSMISSION_STABLE
                    </span>
                  </div>
                  <p className="text-on-surface font-normal py-space-xs" style={{ ...monoStyle, fontSize: '15px', lineHeight: '24px' }}>
                    Welcome to Team Rocket&apos;s Portfolio Website!!
                    <span className="pixel-blink ml-1 text-primary">▌</span>
                  </p>
                  <div className="pt-space-xs border-t border-outline-variant flex items-center justify-between text-on-surface-variant flex-wrap gap-space-xs" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                    <span>TEAM ID: #0087-ALPHA</span>
                    <div className="flex items-center gap-space-sm">
                      <span>BADGE: ACTIVE_BUILDERS</span>
                      <span>•</span>
                      <span>SPECIALTY: CODE REVIVAL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Roster header */}
            <div className="flex items-center justify-between border-b-2 border-on-surface pb-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>group</span>
                <h2 className="font-bold uppercase text-on-surface" style={{ ...monoStyle, fontSize: '18px', lineHeight: '26px', letterSpacing: '0.02em' }}>
                  ACTIVE_CREW_MEMBERS [4/4]
                </h2>
              </div>
              <div className="hidden sm:flex items-center gap-space-xs text-on-surface-variant" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                <span>SORT: ROLE</span>
                <span>//</span>
                <span>STATUS: ONLINE</span>
              </div>
            </div>

            {/* Team member grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} {...member} />
              ))}
            </div>

            {/* Project preview card */}
            <div className="bg-surface-container-low border-2 border-on-surface p-space-md md:p-space-lg shadow-[2px_2px_0px_#1a1c1c]">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2.5 h-2.5 bg-primary"></span>
                    <span className="text-primary font-bold uppercase tracking-wider" style={{ ...monoStyle, fontSize: '12px', lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '700' }}>
                      PROJECT_PREVIEW: DIGITAL GRAVEYARD
                    </span>
                    <span className="bg-primary-container text-on-primary-container px-space-xs border border-on-surface" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                      FLAGSHIP
                    </span>
                  </div>
                  <p className="text-on-surface" style={{ ...monoStyle, fontSize: '15px', lineHeight: '24px' }}>
                    Digital Graveyard revives abandoned open-source code and connects builders to give forgotten projects a second life. We turn abandoned repositories into thriving software commons.
                  </p>
                  <div className="flex items-center gap-space-md text-on-surface-variant pt-space-xs" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                    <span>STATUS: IN_BETA</span>
                    <span>•</span>
                    <span>INDEXED REPOS: 1,420+</span>
                    <span>•</span>
                    <span>CONTRIBUTORS: 380</span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-space-sm shrink-0">
                  <Link href="/project"
                    className="px-space-md py-space-sm bg-primary text-on-primary border-2 border-on-surface uppercase tracking-wider flex items-center justify-center gap-space-xs shadow-[2px_2px_0px_#1a1c1c] hover:bg-tertiary active-press transition-colors"
                    style={{ ...monoStyle, fontSize: '12px', lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '700' }}>
                    <span>VIEW PROJECT DETAILS</span>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                  </Link>
                  <Link href="/project#deck"
                    className="px-space-md py-space-sm bg-surface-container-lowest text-on-surface border-2 border-on-surface uppercase tracking-wider flex items-center justify-center gap-space-xs shadow-[2px_2px_0px_#1a1c1c] hover:bg-surface-container-high active-press transition-colors"
                    style={{ ...monoStyle, fontSize: '12px', lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '700' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>picture_as_pdf</span>
                    <span>ATTACH / VIEW PITCH DECK (PDF)</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Status ticker */}
            <div className="bg-surface-container border border-outline-variant p-space-xs px-space-sm flex flex-wrap items-center justify-between text-on-surface-variant" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
              <div className="flex items-center gap-space-md">
                <span>&gt; READY_FOR_EVALUATION</span>
                <span className="hidden sm:inline">&gt; BUILD_HASH: 0x9EC8CB</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span>PIXEL_GRID: 100% ALIGNED</span>
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
