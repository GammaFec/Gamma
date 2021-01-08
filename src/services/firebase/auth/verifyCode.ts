import firebase from 'firebase';

const verifyCode = async (code: string, confirmationResult: firebase.auth.ConfirmationResult): Promise<boolean> => {
  const user = await confirmationResult.confirm(code);

  return user ? true : false;
}

export default verifyCode;