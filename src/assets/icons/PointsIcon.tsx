interface IProps {
  className?: string;
}
function PointsIcon({ className }: IProps): JSX.Element {
  return (
		<svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M2 1.96289V2.07859" stroke="#1C3144" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 8.90479V9.02049" stroke="#1C3144" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 15.8467V15.9624" stroke="#1C3144" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
export default PointsIcon;