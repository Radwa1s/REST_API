const users = require("../users");
const findAndUpdate = async (req, res) => {
  try {
    const updateAge = await users.findById(req.params.id);
    Object.assign(updateAge, req.body);
    updateAge.save();
    res.status(200).send(updateAge);
  } catch (err) {
    console.log(err);
  }
};
module.exports = findAndUpdate;
