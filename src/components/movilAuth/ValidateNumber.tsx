import React from 'react';
import Form from '../forms/Form';

interface Props {
  phoneNumber: string;
  handleError: Function;
  handleValidNumber: Function;
}

const ValidateNumber: React.FC<Props> = (): JSX.Element => {

  const submit = () => {

  }
  return (
    <Form handleSubmit={submit}>

    </Form>
  );
};

export default ValidateNumber;