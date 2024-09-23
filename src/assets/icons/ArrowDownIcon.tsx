interface IProps {
  className?: string;
}
function ArrowDownIcon({ className }: IProps): JSX.Element {
  return (
		<svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M5.56441 6.26036L5.00616 5.68182L4.44792 6.26036C4.75623 6.57988 5.2561 6.57988 5.56441 6.26036ZM5.00616 4.52473L1.35388 0.73964C1.04557 0.42012 0.545705 0.42012 0.237396 0.73964C-0.0709126 1.05916 -0.0709126 1.5772 0.237396 1.89672L4.44792 6.26036L5.00616 5.68182L5.56441 6.26036L9.77493 1.89672C10.0832 1.5772 10.0832 1.05916 9.77493 0.73964C9.46662 0.42012 8.96676 0.42012 8.65845 0.73964L5.00616 4.52473Z" fill="#1C3144"/>
    </svg>
  );
}
export default ArrowDownIcon;