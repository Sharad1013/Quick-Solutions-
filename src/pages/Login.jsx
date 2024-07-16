import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();
  const { storeTokenInLS, API } = useAuth();
  const URL = `${API}/api/auth/login`;

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user, // will preserve all the previously available data
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents the feature of reloading on submission
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        // storing the token in localStorage
        storeTokenInLS(res_data.token);

        setUser({ email: "", password: "" });
        toast.success("Login Successful");
        navigate("/");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        console.log(`Invalid Credentials`);
      }
    } catch (error) {
      console.log("Login", error);
    }
  };

  return (
    <>
      <section>
        <main className="Login-main">
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/login/QSlog2.png"
                  alt="Let's Login and connect with QS"
                  width="500"
                  height="500"
                />
              </div>

              {/* lets tackle Login From */}

              <div className="registration-form">
                <h1 className="main-heading mb-3">Login Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div className="inputs-holder">
                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your email"
                        id="email"
                        required
                        autoComplete="off"
                        value={user.email}
                        onChange={handleInput}
                      />
                    </div>
                    <div>
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        id="password"
                        required
                        autoComplete="off"
                        value={user.password}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
