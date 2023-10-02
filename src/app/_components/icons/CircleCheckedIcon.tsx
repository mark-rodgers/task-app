export default function CircleCheckedIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10.243 16.314L6 12.07l1.414-1.414 2.829 2.828 5.656-5.657 1.415 1.415-7.071 7.07z"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm11 9a9 9 0 110-18 9 9 0 010 18z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
