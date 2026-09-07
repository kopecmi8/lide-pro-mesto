interface ProgramIconProps {
  id: string
  className?: string
}

const commonProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export default function ProgramIcon({ id, className }: ProgramIconProps) {
  switch (id) {
    case 'bydleni':
      return (
        <svg {...commonProps} className={className}>
          <path d="M3.5 11 12 4l8.5 7" />
          <path d="M5.5 9.7V20a1 1 0 0 0 1 1h4.2v-6.2h2.6V21h4.2a1 1 0 0 0 1-1V9.7" />
        </svg>
      )
    case 'seniori':
      return (
        <svg {...commonProps} className={className}>
          <path d="M12 20.5c-.3 0-.6-.1-.8-.3C7 16.8 3 13.4 3 9.3 3 6.4 5.2 4 8 4c1.6 0 3 .8 4 2 1-1.2 2.4-2 4-2 2.8 0 5 2.4 5 5.3 0 4.1-4 7.5-8.2 10.9-.2.2-.5.3-.8.3Z" />
        </svg>
      )
    case 'doprava':
      return (
        <svg {...commonProps} className={className}>
          <rect x="4" y="5" width="16" height="12" rx="2.5" />
          <path d="M4 11.5h16" />
          <circle cx="8" cy="19" r="1.4" />
          <circle cx="16" cy="19" r="1.4" />
        </svg>
      )
    case 'sport':
      return (
        <svg {...commonProps} className={className}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 8.2 15 10.4l-1.1 3.6h-3.8L9 10.4 12 8.2Z" />
          <path d="M12 8.2V4.5M15 10.4l3.4-1.6M13.9 14l1.9 3.3M10.1 14l-1.9 3.3M9 10.4 5.6 8.8" />
        </svg>
      )
    case 'vzdelavani-a-kultura':
      return (
        <svg {...commonProps} className={className}>
          <path d="M12 4 2 9l10 5 10-5-10-5Z" />
          <path d="M6 11.5V16c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4.5" />
          <path d="M20 9v6" />
        </svg>
      )
    case 'zivotni-prostredi':
      return (
        <svg {...commonProps} className={className}>
          <path d="M12 2 7 9h2.8L6 14.5h3.2V21h5.6v-6.5H18L14.2 9H17L12 2Z" />
        </svg>
      )
    case 'participace':
      return (
        <svg {...commonProps} className={className}>
          <circle cx="9" cy="9" r="3.2" />
          <circle cx="16" cy="10.5" r="2.6" />
          <path d="M3.5 20c.5-3.3 2.9-5.5 5.9-5.5s5.1 1.9 5.8 4.7" />
          <path d="M14.8 14.2c2.3.2 4.2 1.9 4.7 4.6" />
        </svg>
      )
    case 'mesto':
      return (
        <svg {...commonProps} className={className}>
          <path d="M3 9 12 3l9 6" />
          <rect x="4" y="9" width="16" height="10" />
          <path d="M7 12v6M10.3 12v6M13.7 12v6M17 12v6" />
          <path d="M2.5 19h19" />
        </svg>
      )
    default:
      return (
        <svg {...commonProps} className={className}>
          <circle cx="12" cy="12" r="8.5" />
        </svg>
      )
  }
}
