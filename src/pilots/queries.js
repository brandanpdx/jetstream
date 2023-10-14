const getPilots = "SELECT * FROM pilots";

const getPilotById = "SELECT * FROM pilots WHERE pilot_id = $1";

const checkEmailExists = "SELECT * FROM pilots WHERE email = $1";

const addPilot =
  "INSERT INTO pilots (first_name, last_name, email, phone) VALUES ($1, $2, $3, $4)";

const deletePilot = "DELETE FROM pilots WHERE email = $1";

module.exports = {
  getPilots,
  getPilotById,
  checkEmailExists,
  addPilot,
  deletePilot,
};
