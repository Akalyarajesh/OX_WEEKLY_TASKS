// async function fetchData() {
//   const fetchApi = await fetch(
//     "https://6969d1fc3a2b2151f8464c46.mockapi.io/profileCard",
//   );

//   const data = await fetchApi.json();

//   const profile = data[0];

//   //   DOM Manipulation
//   document.getElementById("profileimg").src = profile.img;
//   document.getElementById("profileName").textContent = profile.name;
//   document.getElementById("role").textContent = profile.role;
//   document.getElementById("exp").textContent = profile.experience;
//   document.getElementById("empid").textContent = profile.employeeId;
//   console.log(data);
// }
// fetchData();

async function fetchData() {
  const response = await fetch(
    "https://6969d1fc3a2b2151f8464c46.mockapi.io/profileCard",
  );

  const datas = await response.json();

  const container = document.getElementById("profiles");

  container.innerHTML = "";

  datas.forEach((data) => {
    const card = document.createElement("div");

    card.className =
      "group bg-white w-[280px] p-5 rounded-2xl shadow-lg text-center transition duration-300 hover:scale-105";

    card.innerHTML = `
      <img
        src="${data.img}"
        alt="profile"
        class="w-28 h-28 mx-auto rounded-full border-4 border-blue-600"
      />

      <h2 class="text-xl text-gray-800 font-semibold mt-4">
        ${data.name}
      </h2>

      <p class="text-blue-500 mt-1 font-medium">
        ${data.role}
      </p>

      <div class="mt-4 space-y-2 text-sm">
        <p>Experience : ${data.experience}</p>
        <p>Employee Id : ${data.employeeId}</p>
      </div>

      <button onclick="viewProfile(${data.id})"
        class="mt-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full cursor-pointer"
      >
        View Profile
      </button>
    `;

    container.appendChild(card);
  });
}

fetchData();
function viewProfile(id) {
  window.location.href = `employee.html?id=${id}`;
}
