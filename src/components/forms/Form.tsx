import React, { ReactNode } from 'react';

interface Props {
  handleSubmit?: (event: React.FormEvent) => void;
  children: ReactNode
}

const Form: React.FC<Props> = ({ handleSubmit, children }) => {
  return (
    <form onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;