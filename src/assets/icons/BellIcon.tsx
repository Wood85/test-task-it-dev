interface IProps {
  className?: string;
}
function BellIcon({ className }: IProps): JSX.Element {
  return (
		<svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.02513 1.05442C8.68151 0.379285 9.57174 0 10.5 0C11.4283 0 12.3185 0.379285 12.9749 1.05442C13.5383 1.63398 13.8898 2.39081 13.9781 3.19746C15.2506 3.81383 16.3513 4.76008 17.1684 5.94922C18.1434 7.36795 18.6668 9.06264 18.6666 10.8C18.6666 10.8 18.6666 10.8 18.6666 10.8V14.5896C18.6666 14.7522 18.6977 14.9135 18.7582 15.0637C18.8187 15.214 18.9073 15.3505 19.0191 15.4655C19.0191 15.4654 19.0191 15.4655 19.0191 15.4655L20.6583 17.1515C20.9919 17.4947 21.0917 18.0108 20.9112 18.4592C20.7306 18.9076 20.3052 19.2 19.8333 19.2H15.1667C15.1667 20.473 14.675 21.6939 13.7998 22.5941C12.9247 23.4943 11.7377 24 10.5 24C9.26233 24 8.07535 23.4943 7.20018 22.5941C6.32501 21.6939 5.83335 20.473 5.83335 19.2H1.1667C0.694826 19.2 0.269418 18.9076 0.088841 18.4592C-0.0917362 18.0108 0.0080785 17.4947 0.341742 17.1515L1.9809 15.4655C2.20663 15.2333 2.33336 14.9181 2.33336 14.5908V10.8C2.33336 7.43913 4.25266 4.54103 7.02192 3.1977C7.1101 2.39095 7.46162 1.63404 8.02513 1.05442ZM17.0606 16.8C16.8744 16.5495 16.7202 16.2745 16.6024 15.9819C16.4247 15.5405 16.3333 15.0674 16.3333 14.5896C16.3333 14.5895 16.3333 14.5897 16.3333 14.5896V10.8C16.3335 9.55885 15.9595 8.34803 15.2631 7.33451C14.5666 6.32099 13.5817 5.55447 12.4442 5.14048C11.9782 4.97089 11.6667 4.51764 11.6667 4.0092V3.6C11.6667 3.28174 11.5437 2.97652 11.325 2.75147C11.1062 2.52643 10.8094 2.4 10.5 2.4C10.1906 2.4 9.89384 2.52643 9.67505 2.75147C9.45625 2.97652 9.33334 3.28174 9.33334 3.6V4.0092C9.33334 4.5177 9.02174 4.971 8.55565 5.14054C6.28867 5.96516 4.66669 8.19001 4.66669 10.8V14.5908C4.66669 15.3932 4.4085 16.169 3.9394 16.8H17.0606ZM8.16667 19.2C8.16667 19.8365 8.41251 20.447 8.85009 20.8971C9.28767 21.3471 9.88116 21.6 10.5 21.6C11.1188 21.6 11.7123 21.3471 12.1499 20.8971C12.5875 20.447 12.8333 19.8365 12.8333 19.2H8.16667Z" fill="#1C3144"/>
    </svg>
  );
}
export default BellIcon;