import { default as ButtonComponent } from "../Button/Button";
import { type Button } from "../Button/Button";

export type Buttons = {
  values: Button[];
  onClickButton: (btn: Button) => void;
};

const Buttons = ({ values, onClickButton }: Buttons) => {
  return (
    <div className="grid grid-cols-4 gap-[0.75rem] bg-bg-ternary p-[1.5rem]">
      {values.map((val) => (
        <ButtonComponent
          onClickButton={onClickButton}
          key={val.title}
          {...val}
        />
      ))}
    </div>
  );
};

export default Buttons;
