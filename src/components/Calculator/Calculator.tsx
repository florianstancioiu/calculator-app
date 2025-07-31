import Header from "../Header/Header";
import Display from "../Display/Display";
import Buttons from "../Buttons/Buttons";
import { buttons } from "./CalculatorButtonValues";

const Calculator = () => {
  return (
    <div className="max-w-[20.375rem] mx-auto">
      <Header />
      <Display text="399.981" />
      <Buttons values={buttons} />
    </div>
  );
};

export default Calculator;
