<script>
    let currentForm = "signin"; // Track the current active form (signin, signup, forgot-password)
  
    const handleFormSwitch = (form) => {
      currentForm = form;
    };
  
    const handleSignIn = (e) => {
      e.preventDefault();
  
      // Fetch values from the input fields
      const email = e.target.elements["email"].value;
      const password = e.target.elements["password"].value;
  
      if (email === "aliara331@gmail.com" && password === "1234") {
        window.location.href = "welcome.html"; // Change "welcome.html" to your target page
      } else {
        alert("Invalid email or password.");
      }
    };
  </script>
  
  <style>
    /* Add styles as provided in the original CSS */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  
    body {
      font-family: Papyrus, fantasy;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #ddd;
      font-size: 15px;
    }
  
    .container {
      background-color: #fff;
      width: 760px;
      max-width: 100vw;
      height: 480px;
      position: relative;
      overflow-x: hidden;
      border-radius: 100px;
      display: flex;
      flex-direction: row;
    }
  
    .forms-container {
      width: 50%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .form-control {
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 480px;
      transition: all 0.5s ease-in;
    }
  
    .form-control h2 {
      font-size: 2rem;
      text-align: center;
    }
  
    .form-control form {
      display: flex;
      flex-direction: column;
      margin: 0 30px;
    }
  
    .form-control form input,
    .form-control form button {
      margin: 10px 0;
      border: none;
      padding: 15px;
      border-radius: 5px;
    }
  
    .form-control form input {
      background-color: #efefef;
    }
  
    .form-control form button {
      background-color: #059669;
      color: #fff;
      cursor: pointer;
    }
  
    .intros-container {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      background: linear-gradient(170deg, #34d399, #059669);
    }
  
    .intros-container button {
      border: none;
      padding: 15px 30px;
      background-color: #10b981;
      border-radius: 50px;
      color: #fff;
      margin: 10px 0;
      cursor: pointer;
    }
  
    .hidden {
      display: none;
    }
  
    @media screen and (max-width: 600px) {
      .container {
        flex-direction: column;
        height: 100vh;
      }
  
      .forms-container,
      .intros-container {
        width: 100%;
      }
  
      .forms-container {
        order: 2;
        height: 50vh;
      }
  
      .intros-container {
        order: 1;
        height: 40vh;
      }
    }
  </style>
  <div class="bg-primary">
  <div class="container">
    <div class="forms-container">
      <div class="form-control" class:hidden={currentForm !== "signup"}>
        <form on:submit|preventDefault={() => handleFormSwitch("signin")}> 
          <h2>Signup</h2>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm password" required />
          <button>Signup</button>
        </form>
      </div>
  
      <div class="form-control" class:hidden={currentForm !== "signin"}>
        <form on:submit={handleSignIn}>
          <h2>Signin</h2>
          <input type="text" name="email" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <a href="#" on:click|preventDefault={() => handleFormSwitch("forgot-password")}>Forgot your password?</a>
          <button>Signin</button>
        </form>
      </div>
  
      <div class="form-control" class:hidden={currentForm !== "forgot-password"}>
        <form on:submit|preventDefault={() => handleFormSwitch("signin")}> 
          <h2>Reset Password</h2>
          <input type="email" placeholder="Enter your email" required />
          <button>Send Reset Link</button>
          <a href="#" on:click|preventDefault={() => handleFormSwitch("signin")}>Back to Sign In</a>
        </form>
      </div>
    </div>
  
    <div class="intros-container">
      {#if currentForm === "signin"}
        <h2>Welcome back!</h2>
        <button on:click={() => handleFormSwitch("signup")}>No account yet? Signup.</button>
      {:else if currentForm === "signup"}
        <h2>Come join us!</h2>
        <button on:click={() => handleFormSwitch("signin")}>Already have an account? Signin.</button>
      {/if}
    </div>
  </div></div>
  