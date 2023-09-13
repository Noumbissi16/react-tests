import { fireEvent, render, screen } from "@testing-library/react";
import Calculator from "components/Calculator";

describe("Calculator", () => {
  it("It has 'calculator' displayed somewhere", () => {
    render(<Calculator />);

    const textElement = screen.getByText("Calculator");
    expect(textElement.textContent).toBe("Calculator");
  });
  it("has an h1 that contains 'calculator'", () => {
    render(<Calculator />);

    const titleEl = screen.getByRole("heading", { level: 1 });
    expect(titleEl.textContent).toBe("Calculator");
  });
  it("performs 0+0 by default", () => {
    render(<Calculator />);

    const inputAValue = screen.getByTestId("inputA").value;
    const inputBValue = screen.getByTestId("inputB").value;
    const operator = screen.getByTestId("operator").value;
    const result = screen.getByTestId("result").textContent;

    expect(inputAValue).toBe("0");
    expect(inputBValue).toBe("0");
    expect(operator).toBe("+");
    expect(result).toBe("0");
  });

  const { getOperator, getResult, getValueA, getValueB } = getCalculator();
  it("uses correctly the default values", () => {
    render(<Calculator defaultA={12} defaultB={"10"} defaultOperator={"*"} />);

    expect(getValueA()).toBe("12");
    expect(getValueB()).toBe("10");
    expect(getOperator()).toBe("*");
    expect(getResult()).toBe("120");
  });
  it("calculates correctly when the user updates an input", () => {
    render(<Calculator defaultA={12} defaultB={"10"} defaultOperator={"*"} />);
    fireEvent.change(screen.getByTestId("inputA"), { target: { value: "3" } });
    expect(getResult()).toBe("30");
    fireEvent.change(screen.getByTestId("inputB"), { target: { value: "3" } });
    expect(getResult()).toBe("9");
    fireEvent.change(screen.getByTestId("operator"), {
      target: { value: "-" },
    });
    expect(getResult()).toBe("0");
  });

  it("displays an error when we divide by zero", () => {
    render(<Calculator defaultA={12} defaultB={"0"} defaultOperator={"/"} />);
    expect(getResult()).toBe("You can't divide by zero");
  });
  it("display a message when no operator is provided", () => {
    render(<Calculator defaultA={12} defaultB={"0"} defaultOperator={"/"} />);
    fireEvent.change(screen.getByTestId("operator"), {
      target: { value: "" },
    });
    expect(getResult()).toBe("No operator provided");
  });

  it("returns 0 when the inputs are not provided", () => {
    render(<Calculator defaultA={12} defaultB={"0"} defaultOperator={"*"} />);
    fireEvent.change(screen.getByTestId("inputA"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByTestId("inputB"), {
      target: { value: "" },
    });
    expect(getResult()).toBe("0");
  });
});

function getCalculator() {
  return {
    getValueA: () => screen.getByTestId("inputA").value,
    getValueB: () => screen.getByTestId("inputB").value,
    getOperator: () => screen.getByTestId("operator").value,
    getResult: () => screen.getByTestId("result").textContent,
  };
}
