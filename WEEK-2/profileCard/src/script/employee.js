const params = new URLSearchParams(window.location.search);
const employeeId = params.get("id");

async function fetchEmployee() {
  const response = await fetch(
    `https://6969d1fc3a2b2151f8464c46.mockapi.io/profileCard/${employeeId}`,
  );

  const data = await response.json();

  document.getElementById("empImg").src = data.img;
  document.getElementById("empName").textContent = data.name;
  document.getElementById("empRole").textContent = data.role;
  document.getElementById("empId").textContent = data.employeeId;
  document.getElementById("empExp").textContent = data.experience;
  document.getElementById("empEmail").textContent =
    data.email || "employee@email.com";
  document.getElementById("empLocation").textContent = data.location || "India";
}

function goBack() {
  window.history.back();
}

fetchEmployee();
