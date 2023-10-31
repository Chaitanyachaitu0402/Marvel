app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
  