import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Project | Team Rocket Portfolio',
  description: 'Digital Graveyard — a platform that preserves abandoned digital projects and connects them with enthusiastic developers.',
}

const monoStyle = { fontFamily: 'Space Mono, monospace' }

export default function ProjectPage() {
  return (
    <div className="w-full px-gutter md:px-margin py-space-lg max-w-7xl mx-auto">
      <div className="flex flex-col w-full gap-space-lg fade-in-up">

        {/* Breadcrumb */}
        <div className="flex items-center justify-between gap-space-sm">
          <Link href="/"
            className="inline-flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container-lowest text-on-surface uppercase tracking-wider shadow-md hover:bg-surface-container-high transition-transform active-press"
            style={{ ...monoStyle, fontSize: '12px', lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '700' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_back</span>
            <span>Back to Team Roster</span>
          </Link>
          <div className="flex items-center gap-space-xs text-tertiary" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>SYS_NODE://PROJECT_VIEW</span>
          </div>
        </div>

        {/* Main window */}
        <div className="w-full bg-surface-container-lowest shadow-xl flex flex-col border-2 border-on-surface">

          {/* Window title bar */}
          <div className="w-full bg-primary-container px-space-md py-space-sm flex items-center justify-between select-none border-b-2 border-on-surface">
            <div className="flex items-center gap-space-sm min-w-0">
              <span className="text-[20px]">🚀</span>
              <span className="font-bold uppercase text-on-primary-container tracking-wider truncate" style={{ ...monoStyle, fontSize: '15px', lineHeight: '22px', letterSpacing: '0.04em' }}>
                ABOUT_PROJECT.EXE
              </span>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="px-space-xs py-[2px] bg-surface-container-lowest text-on-surface" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                PID: 4082
              </span>
              <div className="w-4 h-4 bg-surface-container-lowest flex items-center justify-center text-on-surface shadow-sm" style={{ ...monoStyle, fontSize: '10px', fontWeight: '700' }}>_</div>
              <div className="w-4 h-4 bg-surface-container-lowest flex items-center justify-center text-on-surface shadow-sm" style={{ ...monoStyle, fontSize: '10px', fontWeight: '700' }}>✕</div>
            </div>
          </div>

          {/* Window body */}
          <div className="p-space-lg md:p-space-xl flex flex-col gap-space-xl">

            {/* Project identity */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-md bg-surface-container-low p-space-md">
              <div className="flex items-center gap-space-md">
                <div className="w-12 h-12 bg-primary-container flex items-center justify-center text-on-primary-container shadow-md flex-shrink-0">
                  <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>rocket_launch</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold uppercase text-on-surface tracking-tight" style={{ ...monoStyle, fontSize: '24px', lineHeight: '32px', letterSpacing: '-0.01em' }}>
                    DIGITAL GRAVEYARD.EXE
                  </span>
                  <span className="text-tertiary" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                    REGISTRY_ID: DG-EXP-2025-ALPHA
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-xs self-start px-space-md py-space-xs bg-surface-container-lowest text-on-surface shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="uppercase" style={{ ...monoStyle, fontSize: '12px', lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '700' }}>
                  Status: In Development (Prototype Sprint)
                </span>
              </div>
            </div>

            {/* Mission brief */}
            <div className="flex flex-col gap-space-xs">
              <span className="uppercase text-secondary tracking-widest" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                // MISSION_BRIEF
              </span>
              <p className="text-on-surface leading-relaxed max-w-3xl" style={{ ...monoStyle, fontSize: '15px', lineHeight: '24px' }}>
                Thousands of valuable repositories are abandoned every year. Digital Graveyard is a platform that preserves abandoned digital projects and connects them with enthusiastic developers to continue their journey.
              </p>
            </div>

            {/* Tech stack */}
            <div className="flex flex-col gap-space-sm">
              <span className="uppercase text-secondary tracking-widest" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                // DEPLOYED_STACK
              </span>
              <div className="flex flex-wrap gap-space-xs">
                {['Next.js', 'React', 'FastAPI', 'Python', 'PostgreSQL'].map((tech) => (
                  <span key={tech} className="px-space-md py-space-xs bg-surface-container text-on-surface uppercase shadow-sm"
                    style={{ ...monoStyle, fontSize: '12px', lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '700' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
              {[
                { label: 'INDEXED REPOS', value: '1,420+' },
                { label: 'CONTRIBUTORS', value: '380' },
                { label: 'REVIVED PROJECTS', value: '94' },
                { label: 'COMMIT RATE', value: '99.7%' },
              ].map((stat) => (
                <div key={stat.label} className="bg-surface-container-low border-2 border-on-surface p-space-md shadow-[2px_2px_0px_#1a1c1c] flex flex-col gap-1">
                  <span className="text-primary font-bold" style={{ ...monoStyle, fontSize: '24px', lineHeight: '32px', letterSpacing: '-0.01em', fontWeight: '700' }}>
                    {stat.value}
                  </span>
                  <span className="text-on-surface-variant" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Pitch deck section */}
            <div id="deck" className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="uppercase text-secondary tracking-widest" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                  // PRESENTATION_DECK_SLOT
                </span>
                <span className="text-primary uppercase font-bold" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                  READY_TO_EVALUATE
                </span>
              </div>

              <div className="bg-surface-container-low p-space-md md:p-space-lg flex flex-col gap-space-md shadow-inner">
                {/* File info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm bg-surface-container-lowest p-space-md shadow-sm">
                  <div className="flex items-center gap-space-md min-w-0">
                    <div className="w-10 h-10 bg-surface-container flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                      <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>save</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-bold text-on-surface truncate" style={{ ...monoStyle, fontSize: '15px', lineHeight: '22px', letterSpacing: '0.04em' }}>
                        TEAM_ROCKET_PITCH_DECK.PPTX / .PDF
                      </span>
                      <span className="text-outline" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                        FILE_SIZE: 14.8 MB • REVISION 3.2
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs bg-primary-container text-on-primary-container self-start sm:self-auto shadow-sm">
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>verified</span>
                    <span className="uppercase" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                      Ready for Presentation Tomorrow
                    </span>
                  </div>
                </div>

                {/* Preview + actions */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-stretch">

                  {/* Slide preview */}
                  <div className="md:col-span-8 bg-surface-container-lowest p-space-md flex flex-col justify-between shadow-sm min-h-[220px]">
                    <div className="flex items-center justify-between pb-space-xs bg-surface-container-high px-space-sm py-space-xs">
                      <div className="flex items-center gap-space-xs text-on-surface" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>slideshow</span>
                        <span>PREVIEW_CONTAINER.VIEW</span>
                      </div>
                      <span className="text-tertiary" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>SLIDE 01/12</span>
                    </div>

                    <div className="my-auto py-space-lg flex flex-col items-center justify-center text-center gap-space-xs">
                      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container mb-space-xs">
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>co_present</span>
                      </div>
                      <h3 className="font-bold text-on-surface uppercase tracking-wide" style={{ ...monoStyle, fontSize: '18px', lineHeight: '26px', letterSpacing: '0.02em' }}>
                        Digital Graveyard - Pitch Deck
                      </h3>
                      <p className="text-tertiary" style={{ ...monoStyle, fontSize: '11px', lineHeight: '16px' }}>
                        (Ready for judge evaluation)
                      </p>
                      <div className="mt-space-sm flex items-center gap-space-xs text-outline" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                        <span>PRESENTER: TEAM ROCKET</span>
                        <span>•</span>
                        <span>ROOM: MAIN STAGE A</span>
                      </div>
                    </div>

                    <div className="w-full bg-surface-container-high h-1.5 flex overflow-hidden">
                      <div className="bg-primary h-full w-full"></div>
                    </div>
                  </div>

                  {/* Deck actions */}
                  <div className="md:col-span-4 bg-surface-container-lowest p-space-md flex flex-col justify-between gap-space-md shadow-sm">
                    <div className="flex flex-col gap-space-xs">
                      <span className="uppercase text-secondary" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                        ARCHIVE_SNAPSHOT
                      </span>
                      <div className="w-full h-24 overflow-hidden bg-surface-container relative shadow-inner">
                        <div className="w-full h-full flex flex-col items-center justify-center bg-surface-container-high text-tertiary gap-space-xs">
                          <span className="material-symbols-outlined text-primary" style={{ fontSize: '28px' }}>auto_stories</span>
                          <span className="uppercase text-secondary" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                            DECK_PREVIEW_v3.2
                          </span>
                        </div>
                        <div className="absolute bottom-1 right-1 px-space-xs bg-surface-container-lowest border border-outline" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                          SYNCED
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-space-xs">
                      <button
                        className="w-full py-space-sm px-space-md bg-primary text-on-primary font-bold uppercase tracking-wide shadow-md hover:bg-tertiary active-press flex items-center justify-center gap-space-xs"
                        style={{ ...monoStyle, fontSize: '15px', lineHeight: '22px', letterSpacing: '0.04em' }}
                        type="button">
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
                        <span>Open Deck (.PDF)</span>
                      </button>
                      <button
                        className="w-full py-space-xs px-space-md bg-surface-container-high text-on-surface uppercase tracking-wide shadow-sm hover:bg-surface-variant active-press flex items-center justify-center gap-space-xs"
                        style={{ ...monoStyle, fontSize: '12px', lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '700' }}
                        type="button">
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>upload_file</span>
                        <span>Replace Slide Deck</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Footer nav */}
            <div className="pt-space-md flex items-center justify-between">
              <Link href="/"
                className="inline-flex items-center gap-space-xs text-primary font-bold uppercase hover:underline"
                style={{ ...monoStyle, fontSize: '15px', lineHeight: '22px', letterSpacing: '0.04em' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>keyboard_return</span>
                <span>Return to Team Roster</span>
              </Link>
              <span className="text-outline uppercase tracking-widest" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                CHECKSUM: VALIDATED // EOF
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
