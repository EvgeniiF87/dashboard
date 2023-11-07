type ArrowBirdSvgProps = {
  direction: "up" | "down" | "left" | "right";
  fill?: string;
  onClick?: () => void;
};

const ArrowBirdSvg = ({ direction, fill, onClick }: ArrowBirdSvgProps) => {

  const rotateSide = {
    up: '90deg',
    down: '-90deg',
    left: '0deg',
    right: '-180deg',
  }

  return (
    <svg
      style={{ rotate: rotateSide[direction] }}
      onClick={onClick}
      stroke="#E8E7E7"
      fill={fill ? fill : "#E8E7E7"}
      strokeWidth="0"
      viewBox="0 0 256 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path>
    </svg>
  );
};

export { ArrowBirdSvg };
