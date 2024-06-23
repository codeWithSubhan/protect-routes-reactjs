import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./features/AuthSlice";
const BASE_API = "https://teccs.nssplindia.com/backend";

function Login() {
  const [password, setPassword] = useState("1");
  const [email, setEmail] = useState("suvhan13@gmail.com");
  const [isLoading, setIsLoading] = useState(false);
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputData = [
    {
      type: "email",
      name: "email",
      placeholder: "email",
      value: email,
      handleChange: (e) => setEmail(e.target.value),
    },
    {
      type: "text",
      name: "password",
      placeholder: "password",
      value: password,
      handleChange: (e) => setPassword(e.target.value),
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.post(`${BASE_API}/auth/login`, {
        email: email,
        password: password,
        deviceType: "android",
      });
      setIsLoading(false);

      dispatch(login(res));
      navigate("/");
      alert("User successfully logged in");
    } catch (err) {
      setIsLoading(false);
      alert(err.message);
    }
  }

  useEffect(() => {
    if (isAuth) {
      navigate("/", { replace: true });
    }
  }, [isAuth, navigate]);

  if (isAuth) return;
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {inputData.map((item) => (
            <input
              key={item.name}
              style={{ width: "200px" }}
              type={item.type}
              placeholder={item.placeholder}
              name={item.name}
              value={item.value}
              onChange={item.handleChange}
            />
          ))}
          <button style={{ width: "200px", cursor: "pointer" }}>login</button>
        </>
      )}
    </form>
  );
}

export default Login;
