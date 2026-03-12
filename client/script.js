const searchBtn = document.getElementById("searchBtn");
const results = document.getElementById("results");
const themeToggle = document.getElementById("themeToggle");

/* SEARCH EVENT */
searchBtn.addEventListener("click", fetchJobs);

/* DARK MODE */
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

/* FETCH JOBS */
async function fetchJobs() {
  const query = document.getElementById("jobInput").value;
  if (!query) {
    return;
  }

  /* LOADING SKELETON */
  results.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    const skeleton = document.createElement("div");
    skeleton.className = "skeleton";
    results.appendChild(skeleton);
  }

  try {
    //   `https://remotive.com/api/remote-jobs?search=${query}`,
    const response = await fetch(
      `https://job-crawler-psi.vercel.app/api/v1/jobs/rti?title=${query}`,
    );
    const result = await response.json();
    displayJobs(result.data.data);
  } catch (err) {
    results.innerHTML = `<p class="empty">Failed to load jobs ${err}</p>`;
  }
}

/* DISPLAY JOBS */
function displayJobs(jobs) {
  results.innerHTML = "";
  if (jobs.length === 0) {
    results.innerHTML = `<p class="empty">No jobs found</p>`;
    return;
  }

  jobs.map((job) => {
    const card = document.createElement("div");
    card.id = job.job_id;
    card.className = "job-card";
    card.innerHTML = `
    <h3 class="job-title">${job.job_title}</h3>
    <p class="company">${job.employer_name}</p>
    <p class="location">${job.job_location}</p>
    <a class="website" href="${job.employer_website}" target="_blank">${job.employer_website}</a>
    <p class="description">${job.job_description.replace(/<[^>]+>/g, "").substring(0, 200) + "..."}</p>

    <a class="apply-btn" href="${job.job_apply_link}" target="_blank">Apply</a>
    `;

    results.appendChild(card);
  });
}
