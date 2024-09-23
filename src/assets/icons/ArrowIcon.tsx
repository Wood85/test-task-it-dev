interface IProps {
  className?: string;
}
function ArrowIcon({ className }: IProps): JSX.Element {
  return (
		<svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M5 14.8333L8 17.5L11 14.8333M8 1.5V17.5V1.5Z" stroke="#1C3144" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
export default ArrowIcon;