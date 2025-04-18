<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SafeMe - Emergency Safety App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 0;
      padding: 0;
      background-color: #212f96;
    }
    .container {
      padding: 20px;
      display: none;
    }
    #safe-button {
      background-color: #73d483;
      color: white;
      font-size: 24px;
      padding: 20px 40px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }
    #map {
      height: 300px;
      width: 100%;
      margin-top: 20px;
    }
    .menu {
      margin-top: 20px;
    }
    .menu button {
      padding: 10px 20px;
      margin: 5px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .screen {
      display: none;
      margin-top: 20px;
    }
    .active {
      display: block;
    }
    #login-screen {
      padding: 50px;
    }
    #login-screen input {
      padding: 10px;
      font-size: 16px;
      width: 80%;
      max-width: 300px;
    }
    #login-screen button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  
  <div id="login-screen">
    <h2>Login to SafeMe</h2>
    <input type="text" id="username" placeholder="Username" /><br /><br />
    <input type="password" id="password" placeholder="Password" /><br /><br />
    <button onclick="login()">Login</button>
    <p id="login-error" style="color: red; display: none;">Invalid credentials. Try again.</p>
  </div>

  
  <div class="container">
    <h1>SafeMe Emergency Safety App</h1>

    <div class="menu">
      <button onclick="showScreen('home')">Home</button>
      <button onclick="showScreen('contacts')">Contacts</button>
      <button onclick="showScreen('history')">Alert History</button>
      <button onclick="showScreen('settings')">Settings</button>
      <button onclick="showScreen('contactForm')">Contact Form</button>
    </div>

    
    <div id="home" class="screen active">
      <button id="safe-button">Safe Me</button>
      <div id="map"></div>
    </div>

    
    <div id="contacts" class="screen">
      <h2>Contacts</h2>
      <p>+ Add/Edit/Delete emergency contacts here.</p>
    </div>

    
    <div id="history" class="screen">
      <h2>Alert History</h2>
      <p>List of past alerts will appear here.</p>
    </div>

    
    <div id="settings" class="screen">
      <h2>Settings</h2>
      <p>Update profile, notification settings, and more.</p>
    </div>

    
    <div id="contactForm" class="screen">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required /><br /><br />
        <input type="email" placeholder="Your Email" required /><br /><br />
        <textarea placeholder="Your Message" rows="4"></textarea><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>

  <script>
    function showScreen(screenId) {
      document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
      });
      document.getElementById(screenId).classList.add("active");
    }

    function initMap() {
      navigator.geolocation.getCurrentPosition(position => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        const map = new google.maps.Map(document.getElementById("map"), {
          center: userLocation,
          zoom: 15
        });
        new google.maps.Marker({
          position: userLocation,
          map: map,
          title: "You are here"
        });
      }, () => {
        alert("Geolocation failed. Please enable location access.");
      });
    }

    function login() {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const errorMsg = document.getElementById("login-error");

      if (username === "bob" && password === "bobpass") {
        document.getElementById("login-screen").style.display = "none";
        document.querySelector(".container").style.display = "block";
      } else {
        errorMsg.style.display = "block";
      }
    }
  </script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxuxZk_macRUgpXSwjApDZdM2HXMMjYi4&callback=initMap" async defer></script>
</body>
</html>
