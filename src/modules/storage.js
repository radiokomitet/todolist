function save() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

function load() {
  const data = JSON.parse(localStorage.getItem("projects"));
  if (data) projects.push(...data);
}
