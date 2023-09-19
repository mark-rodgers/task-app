export default function AddIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" d="M17 9H7V7h10v2zM7 13h10v-2H7v2z"></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 18V2h20v16h-6v4h-2a4 4 0 01-4-4H2zm10-2v2a2 2 0 002 2v-4h6V4H4v12h8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
