const users = require("../users");
const findUsers = async (req, res) => {
  const { findall } = req.params;
  try {
    const findallusers = await users.find(findall);
    res.status(200).send(findall);
  } catch (error) {}
};
module.exports = findUsers;
