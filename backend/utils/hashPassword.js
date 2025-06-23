const bcrypt = require("bcrypt");
const Users = require("../models/Users");
const hashPassword = async (password) =>{
    const salt = 10
    const hashedpassword = await bcrypt.hash(password,salt)
    return hashedpassword;
}

const comparePassword = async(password, hashedPassword)=>{
    const comparedPassword = bcrypt.compare(password, hashedPassword);
    return comparedPassword;

}
module.exports = {hashPassword, comparePassword};