// "use client"
const HamberMenu = ({ onClick,className }: {onClick: ()=> void ,className: string}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    onClick={onClick}
    className={className}
  >
    <g
      stroke="#1C1B1B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <path d="M28 20H18M28 13H12M28 27H12" />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={40} height={40} fill="#fff" rx={8} />
      </clipPath>
    </defs>
  </svg>
)
export default HamberMenu
