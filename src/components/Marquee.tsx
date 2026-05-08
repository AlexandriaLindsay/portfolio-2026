import { STACK } from '@/lib/data'

export default function Marquee() {
  const items = [...STACK, ...STACK]

  return (
    <div className="border-y border-accent/15 py-4 overflow-hidden bg-accent">
      <div className="marquee-track flex whitespace-nowrap">
        {items.map((t, i) => (
          <div
            key={i}
            className="font-display text-[12px] tracking-[0.45em] text-white/85 uppercase px-11 flex-shrink-0 flex items-center gap-11"
          >
            {t}
            <span className="w-1 h-1 rounded-full bg-white/50 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  )
}
