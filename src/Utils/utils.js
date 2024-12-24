const bcrypt = require('bcryptjs');
exports.encryptPassword = (password)=>{
    const gen = bcrypt.genSaltSync(15);
    return bcrypt.hashSync(password,gen);
}

exports.comparePassword = (pass, hash)=>{
    return bcrypt.compareSync(pass, hash);
}