const { UnauthenticatedError } = require("../errors");
const jwt = require("jsonwebtoken");

class DashboardService {
  getDashboard = async (authHeader) => {
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      throw new UnauthenticatedError("No token provided");
    }

    const token = authHeader.split(" ")[1];
    // console.log(token);
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //   console.log("deocdec", decoded);
      return { username: decoded.username };
    } catch (error) {
      throw new UnauthenticatedError("Not authorized");
    }
  };
}

module.exports = DashboardService;
