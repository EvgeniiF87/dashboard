const PaymentMethodsSvg = ({
  width = "19px",
  height = "18px",
}: {
  width?: string;
  height?: string;
}) => {
  return (
    <svg
      fill="#1C274C"
      height={height}
      width={width}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M493.714,66.178h-69.66H197.661h-69.663c-10.099,0-18.286,8.187-18.286,18.286v69.659v30.475H18.286
       C8.187,184.598,0,192.785,0,202.884v224.653c0,10.099,8.187,18.286,18.286,18.286H335.24c10.099,0,18.286-8.187,18.286-18.286
       v-63.565h70.528h69.66c10.099,0,18.286-8.186,18.286-18.286v-69.66V154.122V84.464C512,74.364,503.813,66.178,493.714,66.178z
        M146.285,102.75h29.729c-5.214,13.642-16.084,24.511-29.729,29.725V102.75z M316.954,409.249H36.572V294.311h280.383V409.249z
        M316.954,257.74H36.572v-36.571h280.383V257.74z M475.428,327.4h-29.727c5.213-13.642,16.082-24.511,29.727-29.725V327.4z
        M475.428,259.667c-33.843,7.186-60.548,33.891-67.735,67.734h-54.169v-71.918h0.001c14.81-9.817,23.609-24.527,23.607-40.409
       c0-29.475-29.112-52.564-66.276-52.564c-21.971,0-42.032,8.405-54.207,22.088H146.285v-14.114
       c33.844-7.186,60.55-33.891,67.737-67.734h193.672c7.188,33.842,33.892,60.545,67.735,67.734V259.667z M475.428,132.475
       c-13.644-5.214-24.513-16.082-29.727-29.725h29.727V132.475z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M152.383,330.883H91.429c-10.099,0-18.286,8.187-18.286,18.286c0,10.099,8.187,18.286,18.286,18.286h60.954
       c10.099,0,18.286-8.187,18.286-18.286C170.668,339.07,162.481,330.883,152.383,330.883z"
          />
        </g>
      </g>
    </svg>
  );
};

export { PaymentMethodsSvg };
