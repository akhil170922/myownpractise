import React, { useCallback, useState } from "react";
import Title from "./Title";
import CountAgeSal from "./CountAgeSal";
import Button from "./Button";

const ParentCompo = () => {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(10000);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);
  return (
    <div>
      <Title />
      <CountAgeSal text="Age" count={age}></CountAgeSal>
      <Button handleClick={incrementAge}>IncreaseAge</Button>
      <CountAgeSal text="Salary" count={salary}></CountAgeSal>
      <Button handleClick={incrementSalary}>IncreaseSalary</Button>
    </div>
  );
};

export default React.memo(ParentCompo);
