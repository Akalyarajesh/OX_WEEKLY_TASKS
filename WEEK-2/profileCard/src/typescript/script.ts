interface Profile {
  id: string;
  name: string;
  role: string;
  experience: string;
  employeeId: string;
  img: string;
}

async function fetchData1(): Promise<void> {
  const response: Response = await fetch(
    "https://6969d1fc3a2b2151f8464c46.mockapi.io/profileCard",
  );

  const data: Profile[] = await response.json();

  const profile: Profile = data[0];

  const profileImg = document.getElementById("profileimg") as HTMLImageElement;
  const profileHead = document.getElementById("profileName") as HTMLHeadElement;
  const profileRole = document.getElementById("role") as HTMLParagraphElement;
  const profileExp = document.getElementById("exp") as HTMLSpanElement;
  const profileEmpId = document.getElementById("empid") as HTMLSpanElement;

  profileImg.src = profile.img;
  profileHead.textContent = profile.name;
  profileRole.textContent = profile.role;
  profileExp.textContent = profile.experience;
  profileEmpId.textContent = profile.employeeId;

  console.log(data);
}

fetchData1();
