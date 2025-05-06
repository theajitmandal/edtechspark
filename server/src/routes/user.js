app.post('/register', async(req, res) => {
    console.log(req.body);
    let {email, password} = req.body;
    const hashPassword = await bcrypt.hash(password, saltRounds)
    req.body.password = hashPassword
    //left side email is from db and right side is of req.body.email
    const userExist = await User.exists({email: email})
    if(userExist){
      return res.status(409).json({msg: "Email Already Exists"})
    }
    await User.create(req.body)
    return res.status(200).json({msg: "User Registered Successfully"})
  })
  
  app.post('/login', async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email: email})
    if(user){
      const isMatched = await bcrypt.compare(password, user.password);
      if(isMatched){
        const token = jwt.sign({ email: email }, process.env.SECRET_KEY);
        res.json({msg: "Authorized", token})
      }else{
        res.status(401).json({msg: "Invalid Password"})
      }
    }else{
      res.status(409).json({msg: "Email not registered"})
    }
  })