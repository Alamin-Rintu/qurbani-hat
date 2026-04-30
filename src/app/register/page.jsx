"use client";
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

const RegisterPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ name, image, email, password });

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
      callbackURL: "/",
    });
    console.log(data, error);
  };

  return (
    <div className="flex justify-center mt-5">
      <Form
        className="flex w-96 flex-col gap-4 border border-gray-300 p-5 rounded-xl"
        onSubmit={onSubmit}
      >
        <h3 className="text-center text-2xl font-bold">Register Now</h3>
        {/* name */}
        <TextField
          isRequired
          validate={(value) => {
            if (value.length < 3) {
              return "Name must be at least 3 characters";
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input name="name" placeholder="Your Name" />
          <FieldError />
        </TextField>

        {/* image URL */}
        <TextField isRequired type="text">
          <Label>Image URL</Label>
          <Input name="image" placeholder="Image URL" />
          <FieldError />
        </TextField>

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
        <TextField className="w-full " name="password">
          <Label>Password</Label>
          <InputGroup>
            <InputGroup.Input
              className="w-full max-w-[280px]"
              type={isVisible ? "text" : "password"}
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
            Register Now
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        <p className="font-semibold">
          Already have an account?
          <Link href={"/login"}>
            <Button
              className={"text-purple-500 font-medium text-lg bg-transparent"}
            >
              Log in
            </Button>
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default RegisterPage;
