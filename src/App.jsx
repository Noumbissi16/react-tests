// import Calculator from "components/Calculator";
import s from "./App.module.css";
import { RandomUser } from "components/RandomUser/RandomUser";
export function App() {
  return (
    <div className={s.root}>
      {/* <Calculator defaultA={25} defaultB={"15"} defaultOperator={"/"} /> */}
      <RandomUser />
    </div>
  );
}
