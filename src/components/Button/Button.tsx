export type Button = {
  title: string | number;
  bgColor: string;
  textColor: string;
  spansTwoColumns?: boolean;
  callback?: (text: string) => void;
};

const Button = ({
  title,
  bgColor,
  textColor,
  spansTwoColumns,
  callback,
}: Button) => {
  const onClickHandler = () => {
    if (typeof callback === "function") {
      callback("");

      return;
    }

    // do something with the number
  };

  return (
    <button
      onClick={onClickHandler}
      className={`bg-${bgColor} text-${textColor} ${
        spansTwoColumns ? "col-span-2" : ""
      }
      grid place-items-center cursor-pointer min-h-[3.75rem]
      `}
    >
      <span className="hidden text-bg-ternary"></span>
      <span className="hidden bg-bg-danger"></span>
      {title}
    </button>
  );
};

export default Button;
