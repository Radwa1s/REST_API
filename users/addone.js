const users = require("../users");
const adduser = async (req, res) => {
  const { add } = req.body;
  try {
    const addone = await new users(add);
    res.status(200).send(addone);
    addone.save();
  } catch (error) {
    console.log(error);
  }
};
module.exports = adduser;
