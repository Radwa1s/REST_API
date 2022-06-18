const users = require("../users");

const createUsers = async (req, res) => {
  const { user } = req.body;
  try {
    const arr = await users.create(user);
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = createUsers;
