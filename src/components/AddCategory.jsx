import { useState } from "react";

// export const AddCategory = (props) => {
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
    // console.log(event.target.value, 0);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // console.log(inputValue, "inputValue");
    // props.setCategoriesAHijo((cualquierNombre) => [inputValue, ...cualquierNombre,]);
    // setCategoriesAHijo((cualquierNombre) => [inputValue, ...cualquierNombre]);
    setInputValue("");
    onNewCategory(inputValue.trim());
  };
  return (
    <form
      //   onSubmit={(e) => {onSubmit(e)}}
      onSubmit={onSubmit}
    >
      <input
        type={"text"}
        placeholder={"Buscar gifs :)"}
        value={inputValue}
        // onChange={(event) => onInputChange(event)}
        onChange={onInputChange}
      />
    </form>
  );
};
