// loginMiddleware.js
function loginValidator(req, res, next) {
  const { username, password } = req.body;

  // Check if fields exist
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required." });
  }

  // Simple validation (you can add regex or stronger checks)
  if (username.length < 3) {
    return res.status(400).json({ error: "Username must be at least 3 characters." });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters." });
  }

  // If validation passes, go to next middleware/route
  next();
}

module.exports = loginValidator;
