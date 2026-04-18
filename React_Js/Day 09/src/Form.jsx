import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function Form() {
  const formSchema = z
    .object({
      name: z
        .string()
        .min(3, "Name must be greater than 2 character.")
        .max(20, "Name must be less than 21 character."),
      email: z.email("Invalid Email!"),
      age: z.coerce
        .number()
        .min(18, "Age must be greater than 18.")
        .max(65, "Age must be less than 65"),
      password: z
        .string()
        .min(4, "Password length must be greater than 3")
        .max(20, "Password length must be less than 21"),
      confirm: z.string(),
    })
    .refine((data) => data.password === data.confirm, {
      message: "Password don't match.",
      path: ["confirm"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <h1>Sign Up</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" {...register("name")} />
          {errors.name && <div id="error-mess">{errors.name.message}</div>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register("email")} />
          {errors.email && <div id="error-mess">{errors.email.message}</div>}
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" {...register("age")} />
          {errors.age && <div id="error-mess">{errors.age.message}</div>}
        </div>
        <div>
          <label htmlFor="pass">Password:</label>
          <input type="password" id="pass" {...register("password")} />
          {errors.password && (
            <div id="error-mess">{errors.password.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="con-pass">Confirm Password:</label>
          <input type="password" id="con-pass" {...register("confirm")} />
          {errors.confirm && (
            <div id="error-mess">{errors.confirm.message}</div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
