const axios = require("axios");

exports.fetchHiddenJobs = async (title) => {
  const response = await axios.get(`https://api.serply.io/${title}`, {
    headers: { "X-Api-Key": process.env.SERPLY_API_KEY },
  });

  return response.data.results.map((job) => ({
    title: job.title,
    company: job.company,
    url: job.link,
    source: "Google-ATS-Index",
  }));
};

exports.fetchRTIJobs = async (title) => {
  const result = await axios.get(
    `https://api.openwebninja.com/jsearch/search?query=${title}&country=ng&date_posted=3days`,
    {
      headers: { "x-api-key": process.env.OWNINJA_API_KEY },
    },
  );

  return result.data;
};

exports.fetchRTIJobDetails = async (id) => {
  const result = await axios.get(
    `https://api.openwebninja.com/jsearch/job-details?job_id=${id}`,
    {
      headers: { "x-api-key": process.env.OWNINJA_API_KEY },
    },
  );

  return result.data;
};
