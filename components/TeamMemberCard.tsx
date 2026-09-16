'use client'

import Link from 'next/link'

interface TeamMemberCardProps {
  id: string
  name: string
  role: string
  description: string
  skills: string[]
  iconColor: { bg: string; border: string; icon: string }
  icon: string
  github: string
  linkedin: string
}

const monoStyle = { fontFamily: 'Space Mono, monospace' }

export default function TeamMemberCard({
  id, name, role, description, skills, iconColor, icon, github, linkedin
}: TeamMemberCardProps) {
  return (
    <div className="bg-surface-container-lowest border-2 border-on-surface p-space-md flex flex-col justify-between shadow-[2px_2px_0px_#1a1c1c] hover:-translate-y-[2px] transition-transform">
      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-space-sm mb-space-sm">
          <div className="flex items-center gap-space-sm">
            <div
              className="w-12 h-12 flex items-center justify-center shadow-[1px_1px_0px_#1a1c1c]"
              style={{ backgroundColor: iconColor.bg, border: `2px solid ${iconColor.border}` }}
            >
              <span className="material-symbols-outlined" style={{ color: iconColor.icon, fontSize: '24px' }}>{icon}</span>
            </div>
            <div>
              <h3 className="font-bold uppercase text-on-surface" style={{ ...monoStyle, fontSize: '15px', lineHeight: '22px', letterSpacing: '0.04em' }}>
                {name}
              </h3>
              <p className="text-primary font-bold" style={{ ...monoStyle, fontSize: '12px', lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '700' }}>
                {role}
              </p>
            </div>
          </div>
          <span className="bg-surface-container-high px-space-xs py-[2px] border border-on-surface" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
            #{id}
          </span>
        </div>

        {/* Description */}
        <p className="text-on-surface-variant mb-space-md" style={{ ...monoStyle, fontSize: '13px', lineHeight: '20px' }}>
          {description}
        </p>

        {/* Skills */}
        <div className="mb-space-md">
          <span className="uppercase text-on-surface-variant block mb-space-xs" style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
            SKILLSET:
          </span>
          <div className="flex flex-wrap gap-space-xs">
            {skills.map((skill) => (
              <span key={skill} className="px-space-xs py-[2px] bg-surface-container border border-on-surface text-on-surface"
                style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="pt-space-sm border-t border-outline-variant flex items-center gap-space-sm">
        <a href={github} rel="noopener noreferrer" target="_blank"
          className="flex-1 py-space-xs px-space-sm bg-surface-container-low border border-on-surface text-on-surface text-center uppercase shadow-[1px_1px_0px_#1a1c1c] active-press hover:bg-primary-container transition-colors"
          style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
          [ GITHUB ]
        </a>
        <a href={linkedin} rel="noopener noreferrer" target="_blank"
          className="flex-1 py-space-xs px-space-sm bg-surface-container-low border border-on-surface text-on-surface text-center uppercase shadow-[1px_1px_0px_#1a1c1c] active-press hover:bg-primary-container transition-colors"
          style={{ ...monoStyle, fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
          [ LINKEDIN ]
        </a>
      </div>
    </div>
  )
}
