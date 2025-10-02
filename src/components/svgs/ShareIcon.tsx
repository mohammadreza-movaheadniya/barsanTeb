const ShareIcon = ({className}:{className:string}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={className}   
  >
    <path
      fill="#C4C7C8"
      d="M19 4.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM7 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19 15.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <path
      stroke="#444749"
      strokeWidth={1.5}
      d="M19 4.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM7 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19 15.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.729 8.75l6.5-3m-6.5 5.5 6.5 3"
    />
  </svg>
)
export default ShareIcon
