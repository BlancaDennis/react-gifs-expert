import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["puppy"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gift Expert App</h1>
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((categories) => (
        <GifGrid key={categories} category={categories} />
      ))}
    </>
  );
};
