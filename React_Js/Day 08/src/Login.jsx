import { useRef } from "react";

function Login() {
  const emailRef = useRef(null);
  const passRef = useRef(null);

  //   const [email, setEmail] = useState("");
  //   const [pass, setPass] = useState("");

  console.log("Render");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(emailRef.current.value);
    console.log(passRef.current.value);
    e.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input type="email" placeholder="Enter your email: " ref={emailRef} />
        <input
          type="password"
          placeholder="Enter your password:"
          ref={passRef}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
