const CheckmarkCircle = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={props.className}
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 9C17 4.85786 13.6421 1.5 9.5 1.5C5.35786 1.5 2 4.85786 2 9C2 13.1421 5.35786 16.5 9.5 16.5C13.6421 16.5 17 13.1421 17 9Z"
        stroke="black"
        stroke-width="1.125"
      />
      <path
        d="M6.5 9.375L8.375 11.25L12.5 6.75"
        stroke="black"
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CheckmarkCircle;
