import React, { useState } from "react";

interface FormState {
  vl = string;
  de = string;
  para = string;
}

const Formulario: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    vl: ' ',
    de: ' ',
    para: ' ',
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  

}