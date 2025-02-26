const express = require("express");
const { signup, login } = require("../controller/AccountController");
const { validationResult, body } = require("express-validator");

const AccountRouter = express.Router();
 
// body,params,query
function validator() {
  return [
    //notEmpty(),isInt,escape(),optional(),withMessage('Not a valid e-mail address'),isJSON(),isLength({ max: 100 })
    body("name")
      .matches(/^[a-zA-Z\s]+$/)
      .withMessage("Name must contain only alphabets and spaces"),
    body("email")
      .trim()
      .isEmail()
      .custom(async () => {
        return true;
      }),
    body("password")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
      .withMessage(
        "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, and one number"
      ),
    (req, res, next) => {
      const result = validationResult(req);
      if (!result.isEmpty()) {
       return res.json({ errors: result.array() });
      }
      next();
    },
  ];
}

AccountRouter.post("/signup", validator(), signup);
AccountRouter.post("/login", login);

module.exports = AccountRouter;
