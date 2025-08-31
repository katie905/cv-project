document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const loginError = document.getElementById("login-error");
  const loginScreen = document.getElementById("login-screen");
  const bookingScreen = document.getElementById("booking-screen");
  const logoutBtn = document.getElementById("logout-btn");
  let userBookedClasses = [];


  const validUsername = "testuser";
  const validPassword = "password123";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
      loginError.textContent = "";
      loginError.classList.add("hidden");
      loginScreen.style.display = "none";
      bookingScreen.style.display = "block";
      initializeBookingScreen();
    } else {
      loginError.textContent = "Incorrect username or password.";
      loginError.classList.remove("hidden");
    }
  });

  logoutBtn.addEventListener("click", () => {
    bookingScreen.style.display = "none";
    loginScreen.style.display = "flex";

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    document.getElementById("booking-confirmation").classList.add("hidden");
  });

  const classList = [
    { date: "Monday 18 Aug", time: "6:00 AM", instructor: "Alex", spots: 5 },
    { date: "Tuesday 19 Aug", time: "7:30 AM", instructor: "Jamie", spots: 12 },
    { date: "Wednesday 20 Aug", time: "6:00 PM", instructor: "Sammy", spots: 18 }
  ];

  function populateClassTable() {
    const tbody = document.getElementById("class-list");
    tbody.innerHTML = "";

    classList.forEach((cls, index) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
      <td data-label="Date">${cls.date}</td>
      <td data-label="Time">${cls.time}</td>
      <td data-label="Instructor">${cls.instructor}</td>
      <td data-label="Spots Left" id="spots-${index}">${cls.spots}</td>
      <td data-label="Action"><button onclick="bookClass(${index})" ${cls.spots === 0 ? 'disabled' : ''}>Book</button></td>
    `;

      tbody.appendChild(tr);
    });
  }

  window.bookClass = function (index) {
    const errorBox = document.getElementById("booking-error");
    const confirmationBox = document.getElementById("booking-confirmation");


    if (userBookedClasses.includes(index)) {
      errorBox.classList.remove("hidden");
      errorBox.querySelector("p").textContent = "⚠️ You have already booked this class.";

      setTimeout(() => {
        errorBox.classList.add("hidden");
      }, 5000);

      return;
    }

    if (classList[index].spots > 0) {
      classList[index].spots--;
      userBookedClasses.push(index);

      populateClassTable();
      confirmationBox.classList.remove("hidden");
      errorBox.classList.add("hidden");

      setTimeout(() => {
        confirmationBox.classList.add("hidden");
      }, 10000);
    }
  };

  function initializeBookingScreen() {
    populateClassTable();
  }
});

