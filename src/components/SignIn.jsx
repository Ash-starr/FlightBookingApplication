import { Form } from "react-router-dom";
import Input from "./UI/Input";
import { RoundedButton } from "./UI/Button";

export default function SignInForm() {
  return (
    <Form method="post" action="/auth" className="space-y-6">
      <input type="hidden" name="formType" value="signin" />
      <h2 className="text-2xl font-bold text-gray-800 text-center">Sign In</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input type="email" label="E-mail" id="e_mail" name="e_mail" />
        <Input type="password" label="Password" id="password" name="password" />
      </div>
      <RoundedButton>Sign In</RoundedButton>
    </Form>
  );
}
