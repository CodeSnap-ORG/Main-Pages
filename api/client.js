const express = require('express');
const router = express.Router();

let users = [];
router.use(express.json());

router.post('/api/join', (req, res) => {
  const { username, password, img, email } = req.body;
  if(req.headers.Authorisation === process.env.AUTH_CODE) {
    user = [ 
      "username": username 
      "password": password
      "image-link": img 
      "email": email
    ] 
    users.push(user);
} else {
    res.json({ "Invalid Auth Key" });
   } 
 });

router.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if(user.includes(username) && user.includes(password)) {
    res.json({ "Logged In" });
 } else {
    res.json({ "Invalid Password Or Username" });
   }
 });

module.exports = router;
