import { default as ButtonComponent } from "../Button/Button";
import { type Button } from "../Button/Button";

export type Buttons = {
  values: Button[];
};

const Buttons = ({ values }: Buttons) => {
  return (
    <div className="grid grid-cols-4 gap-[0.75rem] bg-bg-ternary p-[1.5rem]">
      {values.map((val) => (
        <ButtonComponent key={val.title} {...val} />
      ))}
    </div>
  );
};

export default Buttons;
