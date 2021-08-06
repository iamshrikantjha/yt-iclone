import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const SignUp = (props) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("http://127.0.0.1:5000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data rec ", data);
        props.open();
        if (data.error) {
          props.setText(data.error);
          setLoading(false);
        } else {
          props.setText(data.message);
          setLoading(false);

          history.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="columns is-centered">
        <div className="column is-4">
          <form className="box m-5 ">
            <div className="field">
              <label className="label has-text-centered is-size-4	">
                Sign Up
              </label>
            </div>


            {/* NAME FIELD */}
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="John Doe"
                />
              </div>
            </div>

            
            {/* EMAIL FIELD */}
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="e.g. alex@example.com"
                />
              </div>
            </div>

            {/* PASSWORD FIELD */}
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="********"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="block">
              <div className="field">
                <p className="help is-size-6">
                  Already have an account ?{" "}
                  <Link className="" to="/login">
                    Login here
                  </Link>
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <button
              className={`button is-dark has-text-bold is-fullwidth ${
                loading === true ? "is-loading" : ""
              }`}
              onClick={(e) => onSubmit(e)}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
