import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = (props) => {
 const history = useHistory();
 const [password, setPassword] = useState("");
 const [email, setEmail] = useState("");
 const [loading, setLoading] = useState(false);

 const onSubmit = (e) => {
   e.preventDefault();
   
   setLoading(true);
   fetch("http://127.0.0.1:5000/signin", {
     method: "post",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
       email,
       password,
     }),
   })
     .then((res) => res.json())
     .then((data) => {
      //  console.log("Data rec ", data);
       props.open();
       if (data.error) {
         props.setText(data.error);
         setLoading(false);
       } else {
        //  props.setText(data.message);
        props.setText('Successfully Logged In');
         setLoading(false);
         console.log('Some DATA', data);
         localStorage.setItem("jwt", data.token)
         localStorage.setItem("user", JSON.stringify(data.user))
        //  localStorage.getItem("token")
         history.push("/");
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
              <label className="label has-text-centered is-size-4	">Login</label>
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
                {/* <label className="label">Label</label> */}
                <p className="help is-size-6">
                  Don't have account ? {" "}
                  <Link className="" to="/signup">
                    Create account here
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
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
