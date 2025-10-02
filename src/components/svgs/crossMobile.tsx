const CrossMobile = ({ onClick,className }: {onClick: ()=> void ,className: string}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    onClick={onClick}
    className={className}
  >
    <path
      stroke="#444749"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 1 1 15M1 1l14 14"
    />
  </svg>
)
export default CrossMobile
