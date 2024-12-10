import { useState } from "react";

export const useInputValue = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};
