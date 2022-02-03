const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken");
const DashboardService = require("../services/dashboard.service");

const login = async (req, res) => {
  //   console.log(req.body);
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  //just for demo, this id will be provided through database
  const id = new Date().getDate();

  //secret should be long unguessable strings
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "User created", token });
};

const dashboard = async (req, res) => {
  //   console.log(req.headers);
  const authHeader = req.headers.authorization;

  const { username } = await new DashboardService().getDashboard(authHeader);
  //   console.log(data);

  res.status(200).json({
    msg: `Accessed : Welcome ${username}, take you gift : 💩`,
  });
};

module.exports = { login, dashboard };
