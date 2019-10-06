import React, { FC } from "react";
import RegisterView from "./view/RegisterView";

export interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  const dummySubmit = (values: any) => {
    console.log(values);

    return Promise.resolve(values);
  };

  return (
    <section>
      <RegisterView submit={dummySubmit} />
    </section>
  );
};

export default Register;
