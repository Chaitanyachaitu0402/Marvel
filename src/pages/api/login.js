app.post('/api/login', passport.authenticate('local'), (req, res) => {
    // Successful login response
    res.json(req.user);
  });
  