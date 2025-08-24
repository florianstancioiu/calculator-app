import { useState } from "react";
import { type Button } from "../Button/Button";
import Header from "../Header/Header";

import Display from "../Display/Display";
import Buttons from "../Buttons/Buttons";
import { buttons } from "./CalculatorButtonValues";

import { mathOperations, isNumeric } from "../../utils/Math";

const Calculator = () => {
  const [primaryNumber, setPrimaryNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [secondaryNumber, setSecondaryNumber] = useState("");
  const primaryText = `${primaryNumber} ${operator ?? ""} ${
    secondaryNumber ?? ""
  }`;

  const onClickButtonHandler = (btn: Button) => {
    const { title, isNumber } = btn;

    if (operator === "" && secondaryNumber === "") {
      setPrimaryNumber((val) => {
        const newNumber = `${val ?? ""}${title}`;

        return isNumeric(newNumber) ? newNumber : val;
      });
    } else {
      setSecondaryNumber((val) => {
        const newNumber = `${val ?? ""}${title}`;

        return isNumeric(newNumber) ? newNumber : val;
      });
    }

    if (title === "reset") {
      setPrimaryNumber("");
      setOperator("");
      setSecondaryNumber("");
    }

    if (!isNumber && primaryNumber === "") {
      return;
    }

    if (isNumber) {
      return;
    }

    if (title === "del") {
      if (secondaryNumber !== "") {
        setSecondaryNumber((val) => val.slice(0, -1));
        return;
      }

      if (operator !== "") {
        setOperator((val) => val.slice(0, -1));
        return;
      }

      if (primaryNumber !== "") {
        setPrimaryNumber((val) => val.slice(0, -1));
        return;
      }
    }

    if (title === "=") {
      if (primaryNumber === "" || secondaryNumber === "") {
        return;
      }

      let result = mathOperations[operator](
        primaryNumber,
        secondaryNumber
      ).toFixed(2);
      result = (+result).toString();

      setPrimaryNumber(result);
      setOperator("");
      setSecondaryNumber("");
    }

    if (operator === "") {
      if (title !== "reset" && title !== "del") {
        setOperator(title.toString());
      }
      return;
    }
  };

  return (
    <div className="max-w-[20.375rem] mx-auto min-w-[20.375rem] xs:max-w-[33.75rem]">
      <Header />
      <Display text={primaryText.trim()} />
      <Buttons onClickButton={onClickButtonHandler} values={buttons} />
    </div>
  );
};

export default Calculator;
