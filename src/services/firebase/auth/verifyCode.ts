import firebase from 'firebase';

const verifyCode = async (code: string, confirmationResult: firebase.auth.ConfirmationResult): Promise<boolean> => {
  console.log(code);
  const user = await confirmationResult.confirm(code);
  console.log("🚀 ~ file: verifyCode.ts ~ line 6 ~ verifyCode ~ user", user)

  return user ? true : false;
}

export default verifyCode;