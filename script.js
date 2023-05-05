
  const form = document.getElementById("login-form");
  const errorMessage = document.getElementById("error-message");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (username === "" || password === "") {
      errorMessage.textContent = "Please fill in all fields";
    } else if (username !== "user123" || password !== "password123") {
      errorMessage.textContent = "Incorrect username or password";
    } else {
      // Login successful
      window.location.href = "dashboard.html";
    }
  });
  
  
  
  
  
  
  