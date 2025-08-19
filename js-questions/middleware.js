// Custom middleware
function logger(req, res, next) {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next(); // Important: call next() to continue
}

// Authentication middleware
function authenticate(req, res, next) {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  // Verify token logic here
  req.user = { id: 1, name: 'John' }; // Mock user
  next();
}

app.use(logger);
app.use('/protected', authenticate);

app.get('/protected/profile', (req, res) => {
  res.json({ user: req.user });
});