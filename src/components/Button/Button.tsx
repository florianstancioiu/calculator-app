export type Button = {
  title: string | number;
  bgColor: string;
  textColor: string;
  spansTwoColumns?: boolean;
  isNumber: boolean;
  onClickButton?: (btn: Button) => void;
};

const Button = ({
  title,
  bgColor,
  textColor,
  spansTwoColumns,
  isNumber,
  onClickButton,
}: Button) => {
  return (
    <button
      onClick={() => {
        if (onClickButton) {
          return onClickButton({
            title,
            bgColor,
            textColor,
            spansTwoColumns,
            isNumber,
            onClickButton,
          } as Button);
        }
      }}
      className={`bg-${bgColor} text-${textColor} ${
        spansTwoColumns ? "col-span-2" : ""
      }
      grid place-items-center cursor-pointer min-h-[3.75rem] capitalize
      `}
    >
      <span className="hidden text-bg-ternary"></span>
      <span className="hidden bg-bg-danger"></span>
      {title}
    </button>
  );
};

export default Button;
