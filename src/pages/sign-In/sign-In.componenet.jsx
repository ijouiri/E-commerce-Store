import { signInWithGooglePopup, createUserDocument } from "../../utils/firebase"

const SignIn = () => {
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocument(user);
  }

  return (
    <div>
      <button onClick={signInWithGoogle} > Sign in With Google Account</button>

    </div>
  )
}

export default SignIn;
