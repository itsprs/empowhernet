interface IconProps extends React.SVGProps<SVGSVGElement> {}

export function SiteIcon({ ...props }: IconProps) {
  return <img src="/favicon.ico" alt="SiteIcon" />
}

export function MinecraftHeartIcon({ ...props }: IconProps) {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      {...props}
    >
      <g>
        <polygon
          points="114,34 114,24 104,24 104,14 74,14 74,24 64,24 54,24 54,14 24,14 24,24 14,24 14,34 4,34 4,64 14,64 14,74 24,74 24,84 34,84 34,94 44,94 44,104 54,104 54,114 64,114 124,54 124,34"
          className="fill-[#FF5050]"
        />
      </g>
      <g>
        <rect x="24" y="34" width="10" height="10" className="fill-white" />
      </g>
      <g>
        <rect
          x="64"
          y="104"
          width="10"
          height="10"
          className="fill-[#9B0270]"
        />
        <rect x="74" y="94" width="10" height="10" className="fill-[#9B0270]" />
        <rect x="84" y="84" width="10" height="10" className="fill-[#9B0270]" />
        <rect x="94" y="74" width="10" height="10" className="fill-[#9B0270]" />
        <rect
          x="104"
          y="64"
          width="10"
          height="10"
          className="fill-[#9B0270]"
        />
        <rect
          x="114"
          y="54"
          width="10"
          height="10"
          className="fill-[#9B0270]"
        />
      </g>
    </svg>
  )
}

export function StarFilled({ ...props }: IconProps) {
  return (
    <svg viewBox="0.00143361 -0.000231624 12 12" {...props}>
      <path d="m6.958.713a1 1 0 00-1.916 0l-.999 3.33-3.33 1a1 1 0 000 1.915l3.33.999 1 3.33a1 1 0 001.915 0l.999-3.33 3.33-1a1 1 0 000-1.915l-3.33-.999-1-3.33" />
    </svg>
  )
}
