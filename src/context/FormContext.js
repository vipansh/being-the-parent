import React, { useState, useContext } from "react";

export const FormContext = React.createContext();

export function useForm() {
  return useContext(FormContext);
}

export const FormProvider = ({ children }) => {
  var ID = function () {
    let id = Math.random().toString(36).substr(2, 9);
    return id;
  };

  const [formData, setFormData] = useState({
    uniqueID: ID(),
    name: "",
    email: "",
    password: "",
    phoneNo: "",
    businessType: "",
    panNo: "",
    businesscategory: "",
    parentinggroup: [],
    title: "",
    displaypicture: "",
    businessPhoneNo: "",
    businessEmail: "",
    businessPin: "",
    businessAddress: "",
    businessAres: "",
    businessCity: "",
  });
  console.log(formData)

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
