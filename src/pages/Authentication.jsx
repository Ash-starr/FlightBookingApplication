import { redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export default function Authentication() {
  return <AuthForm />;
}

async function signUpAction(userSignUpData) {
  console.log("Sign Up Data:", userSignUpData);

  // TODO: Send `userSignUpData` to your backend API for registration
  // Example:
  // const response = await fetch("/api/signup", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(userSignUpData),
  // });
  // if (!response.ok) throw new Error("Sign Up Failed");

  return redirect("/"); // Redirect after successful sign-up
}

async function signInAction(userSignInData) {
  console.log("Sign In Data:", userSignInData);

  // TODO: Send `userSignInData` to your backend API for authentication
  // Example:
  // const response = await fetch("/api/signin", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(userSignInData),
  // });
  // if (!response.ok) throw new Error("Sign In Failed");

  return redirect("/"); // Redirect after successful sign-in
}

export async function action({ request }) {
  const formData = await request.formData();
  const formType = formData.get("formType");

  const userData = {
    firstName: formData.get("first_name"),
    lastName: formData.get("last_name"),
    phoneNumber: formData.get("phone_no"),
    email: formData.get("e_mail"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirm_passward"),
    address: formData.get("address"),
  };

  if (formType === "signup") {
    return signUpAction(userData); // Pass the form data directly to signUpAction
  } else if (formType === "signin") {
    return signInAction({
      email: formData.get("e_mail"),
      password: formData.get("password"),
    }); // Pass only the relevant data to signInAction
  }

  throw new Error("Invalid form type");
}
