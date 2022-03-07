import React from "react";
import "./Home.css";
function Home(props) {
  const form = document.querySelector("form");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      email: email.value,
      password: password.value,
    };

    fetch("/Login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          window.location.href = "/";
        } else {
          // show error in the page
        }
      })
      .catch((err) => {
        console.log(err);
        // show error in the page
      });
  });
  return (
    <div>
      <img src="public\logo192.png" alt="image"></img>
      <body>
        <form class="container">
          <label for="email">
            Email:
            <input type="text" id="email"></input>
          </label>
          <label for="password">
            Password:
            <input type="password" id="password"></input>
          </label>
          <input type="submit" value="Submit!!!"></input>
          <a href="/signup">Signup here</a>
        </form>
        <script
          src="./login.j
        s"
        ></script>
      </body>

      {/* <div class="login">
        <h1>Login</h1>
        <form method="post">
          <input type="text" name="u" placeholder="eamil" required="required" />
          <input
            type="password"
            name="p"
            placeholder="Password"
            required="required"
          />
          <button type="submit" class="btn btn-primary btn-block btn-large">
            Let me in.
          </button>
          <p>
            (New here?) <a href="http://localhost:3000/Login">signup!</a>
          </p>
        </form>
      </div> */}
    </div>
  );
}

export default Home;
