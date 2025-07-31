import { type Button } from "../Button/Button";

import {
  deleteExpression,
  addExpression,
  subtractExpression,
  multiplyExpression,
  divideExpression,
  resetExpression,
  equalsExpression,
} from "../../utils/MathExpressions";

export const buttons: Button[] = [
  {
    title: 7,
    bgColor: "primary",
    textColor: "bg-ternary",
  },
  {
    title: 8,
    bgColor: "primary",
    textColor: "bg-ternary",
  },
  {
    title: 9,
    bgColor: "primary",
    textColor: "bg-ternary",
  },
  {
    title: "Del",
    bgColor: "bg-primary",
    textColor: "primary",
    callback: deleteExpression,
  },
  {
    title: 4,
    bgColor: "primary",
    textColor: "bg-ternary",
  },
  {
    title: 5,
    bgColor: "primary",
    textColor: "bg-ternary",
  },
  {
    title: 6,
    bgColor: "primary",
    textColor: "bg-ternary",
  },
  {
    title: "+",
    bgColor: "primary",
    textColor: "bg-ternary",
    callback: addExpression,
  },
  {
    title: 1,
    bgColor: "primary",
    textColor: "bg-ternary",
  },
  {
    title: 2,
    bgColor: "primary",
    textColor: "bg-ternary",
  },
  {
    title: 3,
    bgColor: "primary",
    textColor: "bg-ternary",
  },
  {
    title: "-",
    bgColor: "primary",
    textColor: "bg-ternary",
    callback: subtractExpression,
  },
  {
    title: ".",
    bgColor: "primary",
    textColor: "bg-ternary",
  },
  {
    title: 0,
    bgColor: "primary",
    textColor: "bg-ternary",
  },
  {
    title: "/",
    bgColor: "primary",
    textColor: "bg-ternary",
    callback: divideExpression,
  },
  {
    title: "x",
    bgColor: "primary",
    textColor: "bg-ternary",
    callback: multiplyExpression,
  },
  {
    title: "Reset",
    bgColor: "bg-primary",
    textColor: "primary",
    spansTwoColumns: true,
    callback: resetExpression,
  },
  {
    title: "=",
    bgColor: "bg-danger",
    textColor: "primary",
    spansTwoColumns: true,
    callback: equalsExpression,
  },
];
