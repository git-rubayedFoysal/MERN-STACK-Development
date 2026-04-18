import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  console.log("Render");

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name can't be empty." })}
          />
          {errors.name && <div id="error-mess">{errors.name.message}</div>}
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            {...register("age", {
              min: {
                value: 18,
                message: "Age must be greater than 18.",
              },
              max: {
                value: 65,
                message: "Age must be less than 65",
              },
            })}
          />
          {errors.age && <div id="error-mess">{errors.age.message}</div>}
        </div>
        <div>
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            id="pass"
            {...register("password", {
              minLength: {
                value: 4,
                message: "Password length must be greater than 4.",
              },
              maxLength: {
                value: 20,
                message: "Password length must be less than 20.",
              },
            })}
          />
          {errors.password && (
            <div id="error-mess">{errors.password.message}</div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
