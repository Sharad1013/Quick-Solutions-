const { z } = require("zod");

//Login Schema for zod Validation
const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email must be atleast of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  password: z
    .string({ required_error: "Password is Required" })
    .min(7, { message: "Password must be atleast of 7 characters" })
    .max(1024, { message: "Password can't be greater than 1024 chracters" }),
});

// creating an object schema
const signupSchema = loginSchema.extend({
  username: z
    .string({
      required_error: "Name is required",
    })
    .trim()
    .min(3, { message: "Name must be atleast of 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" }),
  phone: z
    .string({ required_error: "Phone is Required" })
    .trim()
    .min(10, { message: " Phone must be atleast of 10 characters" })
    .max(20, { message: "Phone must not be more than 20 characters" }),
});

module.exports = { signupSchema, loginSchema };
