import bcrypt from "bcrypt";

// more rounds means more computation power needed, can be between 8-14
const SALT_ROUNDS = 12;

export const hashPassword = (plainPassword) => {
    return new Promise((resolve, reject) => {

       bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
           if(err) {
               return reject(err);
           }else {
               bcrypt.hash(plainPassword, salt, (err, hash) => {
                   if(err) {
                       return reject(err);
                   } else {
                       return resolve(hash);
                   }
               })
           }
       })
    });
};

export const comparePassword = async (password, hashed) => {
    return bcrypt.compare(password, hashed);
}