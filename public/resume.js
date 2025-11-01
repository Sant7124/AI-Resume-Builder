document.getElementById("resumeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const education = document.getElementById("education").value;
  const skills = document.getElementById("skills").value;
  const experience = document.getElementById("experience").value;

  const output = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <h3>Education</h3><p>${education}</p>
    <h3>Skills</h3><p>${skills}</p>
    <h3>Experience</h3><p>${experience}</p>
  `;

  document.getElementById("resumeOutput").innerHTML = output;
});
