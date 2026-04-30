"use client";
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { router } from "better-auth/api";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";


const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,
      callbackURL: "/",
    });
    if (data) {
      toast.success("Login successful");
    }

    if (error) {
      toast.error(error.message);
    }
  };

  const handleWithGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    if (data) {
      toast.success("Login successful");
      router.push('/')
    }

    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center mt-5">
      <Form
        className="flex w-96 flex-col gap-4 border border-gray-300 p-5 rounded-xl"
        onSubmit={onSubmit}
      >
        <h3 className="text-center text-2xl font-bold">LogIn Now</h3>
        {/* google */}
        <div
          onClick={handleWithGoogle}
          className="flex items-center justify-center gap-3 border border-gray-300 px-6 py-3 rounded-2xl cursor-pointer 
        hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 
        hover:shadow-lg transition-all duration-300 ease-in-out group"
        >
          <FcGoogle className="text-3xl transition-transform duration-300 group-hover:scale-110" />

          <span className="font-medium text-gray-700 group-hover:text-black">
            Continue with Google
          </span>
        </div>

        {/* email */}

        <TextField
          isRequired
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input name="email" placeholder="Your Email" />
          <FieldError />
        </TextField>

        {/* password */}
        <TextField className="w-full ">
          <Label>Password</Label>
          <InputGroup>
            <InputGroup.Input
              name="password"
              className="w-full max-w-[280px]"
              type={isVisible ? "text" : "password"}
              placeholder="Your Password"
            />
            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Log in
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        <p className="font-semibold">
          No account?
          <Link href={"/register"}>
            <Button
              className={"text-purple-500 font-medium text-lg bg-transparent"}
            >
              Create one
            </Button>
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default LoginPage;
