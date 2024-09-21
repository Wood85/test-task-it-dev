interface IProps {
  className?: string;
}
function WorldIcon({ className }: IProps): JSX.Element {
  return (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15174 2.26562C4.53763 2.57162 3.97112 2.97715 3.4772 3.47183C2.46788 4.48271 1.83131 5.79619 1.65573 7.19872L3.63394 7.1972C3.76122 5.38105 4.31257 3.74844 5.00789 2.51237C5.05502 2.4286 5.10299 2.34631 5.15174 2.26562ZM8 -0.00618035C5.87827 -0.00454122 3.84409 0.839885 2.34496 2.34133C0.845824 3.84278 0.00454122 5.87827 0.00618035 8C0.00781949 10.1217 0.852246 12.1559 2.3537 13.655C3.85514 15.1542 5.89063 15.9955 8.01236 15.9938C10.1341 15.9922 12.1683 15.1477 13.6674 13.6463C15.1665 12.1448 16.0078 10.1094 16.0062 7.98764C16.0045 5.86591 15.1601 3.83173 13.6587 2.33259C12.1572 0.833463 10.1217 -0.00781949 8 -0.00618035ZM7.20168 2.16837C6.94014 2.45216 6.66434 2.83116 6.4024 3.29682C5.83047 4.31353 5.3629 5.67509 5.23862 7.19596L7.20556 7.19444L7.20168 2.16837ZM7.2068 8.79444L5.23986 8.79595C5.36649 10.3166 5.83616 11.6775 6.40966 12.6933C6.67232 13.1585 6.94871 13.5371 7.21068 13.8205L7.2068 8.79444ZM5.16059 13.7264C5.11172 13.6458 5.06362 13.5636 5.01637 13.4799C4.31913 12.2449 3.76526 10.6131 3.63518 8.79719L1.65697 8.79872C1.83471 10.201 2.47331 11.5135 3.48419 12.5228C3.97887 13.0167 4.54601 13.4214 5.16059 13.7264ZM10.8606 13.722C11.4747 13.416 12.0412 13.0105 12.5352 12.5158C13.5445 11.5049 14.181 10.1914 14.3566 8.78891L12.3784 8.79044C12.2511 10.6066 11.6998 12.2392 11.0045 13.4753C10.9573 13.559 10.9094 13.6413 10.8606 13.722ZM10.7737 8.79168L8.8068 8.7932L8.81068 13.8193C9.07221 13.5355 9.34801 13.1565 9.60996 12.6908C10.1819 11.6741 10.6495 10.3125 10.7737 8.79168ZM10.7725 7.19168L8.80556 7.1932L8.80168 2.16714C9.06365 2.45052 9.34004 2.82909 9.6027 3.29434C10.1762 4.31017 10.6459 5.67101 10.7725 7.19168ZM12.3772 7.19044C12.2471 5.3745 11.6932 3.74274 10.996 2.50774C10.9487 2.42404 10.9006 2.34183 10.8518 2.26121C11.4663 2.56627 12.0335 2.97092 12.5282 3.46484C13.539 4.47416 14.1776 5.78665 14.3554 7.18891L12.3772 7.19044Z" fill="#1C3144"/>
    </svg>
  );
}
export default WorldIcon;