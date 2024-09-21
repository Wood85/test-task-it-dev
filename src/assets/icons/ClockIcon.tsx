interface IProps {
  className?: string;
}
function ClockIcon({ className }: IProps): JSX.Element {
  return (
		<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00123 2.09382C6.30385 2.09513 4.6765 2.77067 3.4772 3.97183C2.27789 5.17299 1.60487 6.80138 1.60618 8.49876C1.60683 9.33922 1.77301 10.1713 2.09524 10.9476C2.41747 11.7238 2.88944 12.429 3.48419 13.0228C4.07895 13.6166 4.78484 14.0875 5.56157 14.4085C6.3383 14.7296 7.17066 14.8945 8.01112 14.8938C8.85158 14.8932 9.68368 14.727 10.4599 14.4048C11.2362 14.0825 11.9413 13.6106 12.5352 13.0158C13.129 12.421 13.5999 11.7152 13.9209 10.9384C14.2419 10.1617 14.4068 9.32933 14.4062 8.48887C14.4049 6.79149 13.7293 5.16414 12.5282 3.96484C11.327 2.76553 9.69862 2.09251 8.00123 2.09382ZM2.34496 2.84133C3.84409 1.33989 5.87827 0.495459 8 0.49382C10.1217 0.492181 12.1572 1.33346 13.6587 2.83259C15.1601 4.33173 16.0045 6.36591 16.0062 8.48764C16.007 9.53821 15.8009 10.5787 15.3996 11.5496C14.9983 12.5205 14.4097 13.4029 13.6674 14.1463C12.9251 14.8897 12.0437 15.4797 11.0734 15.8825C10.1031 16.2853 9.06293 16.493 8.01236 16.4938C6.96178 16.4946 5.92134 16.2885 4.95042 15.8872C3.97951 15.4859 3.09714 14.8973 2.3537 14.155C1.61025 13.4127 1.0203 12.5313 0.617509 11.561C0.214722 10.5907 0.00699197 9.55057 0.00618035 8.5C0.00454127 6.37827 0.845824 4.34278 2.34496 2.84133ZM8.00309 4.49382C8.44492 4.49348 8.80336 4.85137 8.80371 5.2932L8.80592 8.16183L10.9733 10.3258C11.2859 10.638 11.2863 11.1446 10.9742 11.4572C10.662 11.7699 10.1554 11.7703 9.84278 11.4581L7.44093 9.05994C7.29078 8.91003 7.20634 8.70661 7.20618 8.49444L7.20371 5.29444C7.20337 4.85261 7.56126 4.49416 8.00309 4.49382Z" fill="#1C3144"/>
    </svg>
  );
}
export default ClockIcon;