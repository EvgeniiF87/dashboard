const InputEyeSvg = ({ onClick }: { onClick?: () => void }) => {
  return (
    <svg
      onClick={onClick}
      style={{ cursor: "pointer" }}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0001 13.6083C8.00839 13.6083 6.39172 11.9917 6.39172 10C6.39172 8.00833 8.00839 6.39167 10.0001 6.39167C11.9917 6.39167 13.6084 8.00833 13.6084 10C13.6084 11.9917 11.9917 13.6083 10.0001 13.6083ZM10.0001 7.64167C8.70006 7.64167 7.64172 8.7 7.64172 10C7.64172 11.3 8.70006 12.3583 10.0001 12.3583C11.3001 12.3583 12.3584 11.3 12.3584 10C12.3584 8.7 11.3001 7.64167 10.0001 7.64167Z"
        fill="black"
      />
      <path
        d="M10 17.5167C6.86669 17.5167 3.90836 15.6833 1.87502 12.5C0.991691 11.125 0.991691 8.88333 1.87502 7.5C3.91669 4.31667 6.87502 2.48333 10 2.48333C13.125 2.48333 16.0834 4.31667 18.1167 7.5C19 8.875 19 11.1167 18.1167 12.5C16.0834 15.6833 13.125 17.5167 10 17.5167ZM10 3.73333C7.30836 3.73333 4.73336 5.35 2.93336 8.175C2.30836 9.15 2.30836 10.85 2.93336 11.825C4.73336 14.65 7.30836 16.2667 10 16.2667C12.6917 16.2667 15.2667 14.65 17.0667 11.825C17.6917 10.85 17.6917 9.15 17.0667 8.175C15.2667 5.35 12.6917 3.73333 10 3.73333Z"
        fill="black"
      />
    </svg>
  );
};

export { InputEyeSvg };
