import { Form } from "react-router-dom";
import Input from "./UI/Input";
import { RoundedButton } from "./UI/Button";

export default function SignUpForm() {
  return (
    <Form method="post" action="/auth" className="space-y-6">
      <input type="hidden" name="formType" value="signup" />
      <h2 className="text-2xl font-bold text-gray-800 text-center">Sign Up</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="text"
          label="First Name"
          id="first_name"
          name="first_name"
          required
        />
        <Input
          type="text"
          label="Last Name"
          id="last_name"
          name="last_name"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="text"
          label="Phone Number"
          id="phone_no"
          name="phone_no"
          required
        />
        <Input type="email" label="E-mail" id="e_mail" name="e_mail" required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="password"
          label="Password"
          id="password"
          name="password"
          required
        />
        <Input
          type="password"
          label="Confirm Password"
          id="confirm_passward"
          name="confirm_passward"
          required
        />
      </div>
      <label htmlFor="address">Address</label>
      <textarea
        name="address"
        id="address"
        className="w-full p-2 border border-primary-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-700 focus:border-transparent"
        required
      />
      <RoundedButton>Sign Up</RoundedButton>
    </Form>
  );
}
