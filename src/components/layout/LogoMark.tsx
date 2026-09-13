type LogoMarkProps = {
  size?: number;
};

export default function LogoMark({ size = 60 }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      role="img"
      aria-label="KamerBites logo"
    >
      <circle
        cx="30"
        cy="30"
        r="29"
        className="fill-charcoal stroke-copper-dark"
        strokeWidth="1.5"
      />
      <path
        d="M 30,8
           C 32,14 36,17 41,15
           C 45,21 46,28 44,35
           C 41,44 32,48 24,45
           C 17,42 13,34 15,26
           C 16,21 19,17 22,14
           C 21,19 24,22 26,20
           C 28,18 27,12 30,8 Z"
        className="fill-copper"
      />
      <path
        d="M 23,28 L 23,40 M 27.5,24 L 27.5,40 M 32.5,24 L 32.5,40 M 37,28 L 37,40"
        className="stroke-charcoal"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 21,39 C 21,44 39,44 39,39"
        className="stroke-charcoal"
        strokeWidth="2"
        fill="none"
      />
      <line
        x1="30"
        y1="43"
        x2="30"
        y2="52"
        className="stroke-charcoal"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}