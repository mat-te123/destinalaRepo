// Icon.tsx

interface IconProps {
  className?: string;
}

export const Icon = {
  Dashboard: ({ className = "w-6 h-6" }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className} // Menerima class Tailwind dari luar
    >
      <path
        d="M9 3H4C3.44772 3 3 3.44772 3 4V11C3 11.5523 3.44772 12 4 12H9C9.55228 12 10 11.5523 10 11V4C10 3.44772 9.55228 3 9 3Z"
        stroke="currentColor" // Menggunakan currentColor agar dinamis
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 3H15C14.4477 3 14 3.44772 14 4V7C14 7.55228 14.4477 8 15 8H20C20.5523 8 21 7.55228 21 7V4C21 3.44772 20.5523 3 20 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 12H15C14.4477 12 14 12.4477 14 13V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V13C21 12.4477 20.5523 12 20 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 16H4C3.44772 16 3 16.4477 3 17V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V17C10 16.4477 9.55228 16 9 16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Image: ({ className = "w-6 h-6" }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.99988 11C10.1044 11 10.9999 10.1046 10.9999 9C10.9999 7.89543 10.1044 7 8.99988 7C7.89531 7 6.99988 7.89543 6.99988 9C6.99988 10.1046 7.89531 11 8.99988 11Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 15.0002L17.914 11.9142C17.5389 11.5392 17.0303 11.3286 16.5 11.3286C15.9697 11.3286 15.4611 11.5392 15.086 11.9142L6 21.0002"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Document: ({ className = "w-6 h-6" }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M14.9999 2H5.99988C5.46944 2 4.96074 2.21071 4.58566 2.58579C4.21059 2.96086 3.99988 3.46957 3.99988 4V20C3.99988 20.5304 4.21059 21.0391 4.58566 21.4142C4.96074 21.7893 5.46944 22 5.99988 22H17.9999C18.5303 22 19.039 21.7893 19.4141 21.4142C19.7892 21.0391 19.9999 20.5304 19.9999 20V7L14.9999 2Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9609 7.78929 15.4696 8 16 8H20"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.0001 9H8.00012"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.0001 13H8.00012"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.0001 17H8.00012"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Services: ({ className = "w-6 h-6" }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.5861 2.586C12.2111 2.2109 11.7025 2.00011 11.1721 2H4.00009C3.46966 2 2.96095 2.21071 2.58588 2.58579C2.21081 2.96086 2.00009 3.46957 2.00009 4V11.172C2.0002 11.7024 2.21099 12.211 2.58609 12.586L11.2901 21.29C11.7446 21.7416 12.3593 21.9951 13.0001 21.9951C13.6408 21.9951 14.2556 21.7416 14.7101 21.29L21.2901 14.71C21.7417 14.2555 21.9952 13.6408 21.9952 13C21.9952 12.3592 21.7417 11.7445 21.2901 11.29L12.5861 2.586Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.49991 8C7.77605 8 7.99991 7.77614 7.99991 7.5C7.99991 7.22386 7.77605 7 7.49991 7C7.22377 7 6.99991 7.22386 6.99991 7.5C6.99991 7.77614 7.22377 8 7.49991 8Z"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  DataBase: ({ className = "w-6 h-6" }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 8C16.9706 8 21 6.65685 21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5C3 6.65685 7.02944 8 12 8Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 5V19C3 19.7956 3.94821 20.5587 5.63604 21.1213C7.32387 21.6839 9.61305 22 12 22C14.3869 22 16.6761 21.6839 18.364 21.1213C20.0518 20.5587 21 19.7956 21 19V5"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 12C3 12.7956 3.94821 13.5587 5.63604 14.1213C7.32387 14.6839 9.61305 15 12 15C14.3869 15 16.6761 14.6839 18.364 14.1213C20.0518 13.5587 21 12.7956 21 12"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Pages: ({ className = "w-6 h-6" }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 -1C21.3261 -1 22.5975 -0.472838 23.5352 0.464844C24.4728 1.40253 25 2.67392 25 4V20C25 21.3261 24.4728 22.5975 23.5352 23.5352C22.5975 24.4728 21.3261 25 20 25H4C2.67392 25 1.40253 24.4728 0.464844 23.5352C-0.472838 22.5975 -1 21.3261 -1 20V4L-0.994141 3.75195C-0.93281 2.51618 -0.41421 1.3439 0.464844 0.464844C1.40253 -0.472838 2.67392 -1 4 -1H20ZM12 7.66699C11.9116 7.66699 11.8272 7.70214 11.7646 7.76465C11.7021 7.82716 11.667 7.9116 11.667 8V11.667H8C7.9116 11.667 7.82716 11.7021 7.76465 11.7646C7.70214 11.8272 7.66699 11.9116 7.66699 12C7.66699 12.0884 7.70214 12.1728 7.76465 12.2354C7.82716 12.2979 7.9116 12.333 8 12.333H11.667V16C11.667 16.0884 11.7021 16.1728 11.7646 16.2354C11.8272 16.2979 11.9116 16.333 12 16.333C12.0884 16.333 12.1728 16.2979 12.2354 16.2354C12.2979 16.1728 12.333 16.0884 12.333 16V12.333H16C16.0884 12.333 16.1728 12.2979 16.2354 12.2354C16.2979 12.1728 16.333 12.0884 16.333 12C16.333 11.9116 16.2979 11.8272 16.2354 11.7646C16.1728 11.7021 16.0884 11.667 16 11.667H12.333V8C12.333 7.9116 12.2979 7.82716 12.2354 7.76465C12.1728 7.70214 12.0884 7.66699 12 7.66699Z"
        stroke="currentColor"
        stroke-width="2"
      />
    </svg>
  ),
  Package: ({ className = "w-6 h-6" }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M11 21.7299C11.304 21.9054 11.6489 21.9978 12 21.9978C12.3511 21.9978 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999V7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299Z"
        stroke="currentColor"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 22V12"
        stroke="currentColor"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.29004 7L12 12L20.71 7"
        stroke="currentColor"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.5 4.26953L16.5 9.41953"
        stroke="currentColor"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Star: ({ className = "w-6 h-6" }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 22 21"
      fill="none"
    >
      <path
        d="M21.6571 7.87468C21.5409 7.51591 21.3208 7.19969 21.0247 6.96605C20.7287 6.73241 20.37 6.59186 19.994 6.56218L14.6887 6.13374L12.6412 1.1828C12.4973 0.832891 12.2526 0.533634 11.9383 0.323036C11.624 0.112438 11.2542 0 10.8759 0C10.4975 0 10.1277 0.112438 9.81339 0.323036C9.49908 0.533634 9.25444 0.832891 9.11055 1.1828L7.06492 6.13468L1.75961 6.56218C1.38294 6.59324 1.02386 6.73494 0.727487 6.96948C0.431113 7.20401 0.210671 7.52091 0.093862 7.88035C-0.0229467 8.23979 -0.0309101 8.62574 0.0709725 8.98969C0.172855 9.35365 0.380038 9.67937 0.666485 9.92593L4.71461 13.4172L3.47711 18.6391C3.38685 19.0072 3.4082 19.3939 3.53845 19.7499C3.66869 20.1059 3.90193 20.4151 4.20847 20.6381C4.51501 20.8611 4.88098 20.9878 5.25977 21.0021C5.63857 21.0164 6.01306 20.9177 6.33555 20.7184L10.8759 17.9237L15.4162 20.7184C15.7386 20.9163 16.1124 21.0141 16.4904 20.9994C16.8685 20.9847 17.2336 20.8582 17.5397 20.6358C17.8457 20.4135 18.0789 20.1053 18.2097 19.7504C18.3406 19.3954 18.3631 19.0097 18.2746 18.6419L17.0371 13.42L21.0852 9.92874C21.3734 9.68158 21.5816 9.35437 21.6834 8.98864C21.7852 8.62292 21.7761 8.23519 21.6571 7.87468ZM15.0505 12.1591C14.8944 12.2936 14.7783 12.4685 14.7148 12.6646C14.6514 12.8607 14.6429 13.0704 14.6905 13.2709L15.899 18.3747L11.4655 15.6484C11.2882 15.5393 11.0841 15.4815 10.8759 15.4815C10.6676 15.4815 10.4635 15.5393 10.2862 15.6484L5.85274 18.3747L7.06117 13.2747C7.10877 13.0742 7.10037 12.8644 7.03688 12.6683C6.9734 12.4722 6.85727 12.2974 6.70117 12.1628L2.73836 8.74093L7.93211 8.32187C8.13879 8.30526 8.33687 8.23186 8.50446 8.10976C8.67205 7.98767 8.80263 7.82163 8.8818 7.62999L10.8759 2.80187L12.8699 7.62999C12.9491 7.82163 13.0797 7.98767 13.2473 8.10976C13.4149 8.23186 13.6129 8.30526 13.8196 8.32187L19.0134 8.74093L15.0505 12.1591Z"
        fill="currentColor"
      />
    </svg>
  ),
};
