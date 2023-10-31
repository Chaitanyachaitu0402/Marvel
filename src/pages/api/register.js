app.post('/api/register', (req, res) => {
    const { email, password } = req.body;
  
    // Check if the email already exists
    User.findOne({ email: email }, (err, existingUser) => {
      if (err) return res.status(500).json({ message: 'Server error.' });
      if (existingUser) return res.status(400).json({ message: 'Email already in use.' });
  
      // Create a new user
      const newUser = new User({ email, password });
  
      // Save the user to the database (make sure to hash the password)
      newUser.save((err) => {
        if (err) return res.status(500).json({ message: 'Server error.' });
        return res.status(201).json({ message: 'Registration successful.' });
      });
    });
  });
  