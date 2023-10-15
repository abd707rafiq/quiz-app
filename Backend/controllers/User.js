

const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const createUser = async (req, res) => {
  const { userType,  userName, mail, password } = req.body;
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(password, salt)
  console.log(salt)
  console.log(hashedPassword)
  const user = new User({
    
    userType,
    
    userName,
    mail,
    password: hashedPassword,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



const loginUser = async (req, res) => {
  const { mail, password } = req.body;

  try {
    
    const user = await User.findOne({ mail });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

   
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    
    const token = generateAuthToken(user); 
    console.log('token',token)

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


function generateAuthToken(user) {
  const token = jwt.sign(
    {
      userId: user._id,
     
    },
    "my-secret-key", 
    {
      expiresIn: "1d", 
    }
  );

  return token;
}


module.exports={createUser,loginUser};