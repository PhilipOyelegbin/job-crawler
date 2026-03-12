const jobServices = require("../services/jobServices");

const getHiddenJobs = async (req, res) => {
  try {
    const { title } = req.query;
    const hiddenJobs = await jobServices.fetchHiddenJobs(title);
    res.json({ message: "Hidden jobs fetched successfully", data: hiddenJobs });
  } catch (err) {
    console.error("Error fetching hidden jobs:", err);
    res.status(err?.status || 500).json({
      error: err?.response.statusText || "Failed to fetch hidden jobs",
    });
  }
};

const getRTIJobs = async (req, res) => {
  try {
    const { title } = req.query;
    const rtiJobs = await jobServices.fetchRTIJobs(title);
    res.json({ message: "RTI jobs fetched successfully", data: rtiJobs });
  } catch (err) {
    res.status(err?.status || 500).json({
      error: err?.response?.statusText || "Failed to fetch RTI jobs",
    });
  }
};

const getRTIJobDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const rtiJobDetails = await jobServices.fetchRTIJobDetails(id);
    res.json({
      message: "RTI job details fetched successfully",
      data: rtiJobDetails,
    });
  } catch (err) {
    console.error("Error fetching RTI job details:", err);
    res.status(err?.status || 500).json({
      error: err?.response?.statusText || "Failed to fetch RTI job details",
    });
  }
};

module.exports = {
  getHiddenJobs,
  getRTIJobs,
  getRTIJobDetails,
};
