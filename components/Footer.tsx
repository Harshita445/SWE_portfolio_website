export default function Footer() {
  return (
    <footer className="w-full bg-surface-container border-t-2 border-on-surface py-space-lg">
      <div className="max-w-7xl mx-auto px-gutter md:px-margin flex flex-col md:flex-row items-center justify-between gap-space-md">
        {/* Status */}
        <div className="flex items-center gap-space-xs text-on-surface"
          style={{ fontFamily: 'Space Mono, monospace', fontSize: '12px', lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '700' }}>
          <span className="w-2 h-2 bg-primary inline-block animate-pulse"></span>
          <span>STATUS: CONNECTED // SYSTEM_READY</span>
        </div>

        {/* Copyright */}
        <div className="text-on-surface-variant"
          style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', lineHeight: '16px', fontWeight: '400' }}>
          © 2025 TEAM ROCKET LABS. ALL RIGHTS RESERVED.
        </div>

        {/* System info */}
        <div className="flex items-center gap-space-sm text-on-surface-variant"
          style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '700' }}>
          <span className="px-space-xs py-[2px] bg-surface-container-lowest border border-outline">RAM: 640K OK</span>
          <span className="px-space-xs py-[2px] bg-surface-container-lowest border border-outline">PORT: 8080</span>
          <span className="px-space-xs py-[2px] bg-surface-container-lowest border border-outline">BUILD: STABLE</span>
        </div>
      </div>
    </footer>
  )
}
