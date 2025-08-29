import { useState } from "react";
import { type Button } from "../Button/Button";
import Header from "../Header/Header";

import Display from "../Display/Display";
import Buttons from "../Buttons/Buttons";
import { buttons } from "./CalculatorButtonValues";

import { parseStringAsMath } from "../../utils/Math";

const Calculator = () => {
  const [operations, setOperations] = useState("");

  const onClickButtonHandler = (btn: Button) => {
    const { title } = btn;

    let result: number | string = "error";

    if (title === "reset") {
      setOperations("");
      return;
    }

    if (title === "del" && operations === "error") {
      setOperations("");
      return;
    }

    if (title === "del") {
      setOperations((val) => val.slice(0, -1));
      return;
    }

    setOperations((val) => `${val}${title}`);

    if (title === "=") {
      try {
        const updatedOperations = operations.replace(/x/gi, "*");
        result = parseStringAsMath(updatedOperations);

        if (isNaN(result)) {
          throw new Error("The string is not a valid math expression");
        }

        if (typeof result === "number" && !isNaN(result)) {
          result = result.toFixed(2);
        }

        result = (+result).toString();
        setOperations(result);
      } catch (e) {
        if (e instanceof Error) {
          console.error(e.message);
        }
        setOperations("error");
      }
    }
  };

  return (
    <div className="max-w-[20.375rem] mx-auto xs:max-w-[33.75rem]">
      <Header />
      <Display text={operations} />
      <Buttons onClickButton={onClickButtonHandler} values={buttons} />
    </div>
  );
};

export default Calculator;
