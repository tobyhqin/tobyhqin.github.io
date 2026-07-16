import type { Pose } from './CharacterStage'

/**
 * Crude ink-line stand-in for the character duo, used until generated art
 * lands in public/media/characters/. Deliberately sketchy — it should look
 * like a placeholder doodle, not final art.
 */

const PROPS_BY_ACTIVITY: Record<Pose['activity'], { emoji: string; label: string }> = {
  tumble: { emoji: '💫', label: 'tumbling in…' },
  lounge: { emoji: '📖', label: 'lounging…' },
  wagon: { emoji: '🛷', label: 'wagon ride!' },
  spaceman: { emoji: '🚀', label: 'exploring strange new cards…' },
  explore: { emoji: '❄️', label: "let's go exploring!" },
}

type Props = {
  activity: Pose['activity']
}

export function StandInDuo({ activity }: Props) {
  const { emoji, label } = PROPS_BY_ACTIVITY[activity]
  return (
    <div className="standin-duo">
      <svg viewBox="0 0 120 90" width="140" height="105" role="presentation">
        {/* boy: spiky hair, striped shirt */}
        <g stroke="var(--ink)" strokeWidth="2" fill="none" strokeLinecap="round">
          <path d="M28 32 l4 -8 l4 8 l4 -8 l4 8" /> {/* spikes */}
          <circle cx="36" cy="40" r="10" />
          <path d="M36 50 v18 M36 54 h-10 M36 54 h10 M36 68 l-8 12 M36 68 l8 12" />
          <path d="M28 58 h16" stroke="var(--accent)" strokeWidth="3" /> {/* shirt stripe */}
        </g>
        {/* tiger: round body, stripes, tail */}
        <g stroke="var(--ink)" strokeWidth="2" fill="none" strokeLinecap="round">
          <ellipse cx="82" cy="60" rx="22" ry="18" />
          <circle cx="94" cy="42" r="9" />
          <path d="M90 34 l2 -5 l3 4 M98 33 l3 -4 l1 5" /> {/* ears */}
          <path d="M66 54 q4 6 0 12 M74 48 q4 8 0 16 M82 46 q4 9 0 18" stroke="var(--tiger)" strokeWidth="3" />
          <path d="M62 70 q-10 4 -8 -6" /> {/* tail */}
        </g>
      </svg>
      <p className="standin-caption">
        {emoji} {label}
      </p>
    </div>
  )
}
