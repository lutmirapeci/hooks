import { useInputValue } from "../hooks/useInputValue";

const LoginForm = () => {
  const email = useInputValue("");
  const password = useInputValue("");

  return (
    <div>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" {...email} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" {...password} />
        </div>
      </form>
      <div>
        <h3>Input Values</h3>
        <p>Email: {email.value}</p>
        <p>Password: {password.value}</p>
      </div>
    </div>
  );
};

export default LoginForm;
