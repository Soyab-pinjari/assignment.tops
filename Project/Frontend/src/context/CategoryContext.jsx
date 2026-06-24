import { createContext, useState } from "react";

export const CategoryContext = createContext({
  catname: "",
  setCatName: () => {},
});

export const CategoryProvider = ({ children }) => {
  const [catname, setCatName] = useState("");

  return (
    <CategoryContext.Provider value={{ catname, setCatName }}>
      {children}
    </CategoryContext.Provider>
  );
};