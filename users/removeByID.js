const users = require("../users");
const removeuser = async (req, res) => {
  const { id } = req.query;
  try {
    const finduser = await users.findByIdAndRemove({ _id: id });
    if (finduser) {
      res.json({ massage: "deleted user" });
    }
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = removeuser;
