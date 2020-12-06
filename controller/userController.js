import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getjoinController = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postjoinController = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("Join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getloginController = (req, res) =>
  res.render("login", { pageTitle: "Login" });

export const postloginController = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const logoutController = (req, res) => {
  // to do : process log out
  res.redirect(routes.home);
};

export const userDetailontroller = (req, res) => res.render("userDetail");
export const editProfileController = (req, res) => res.render("editProfile");
export const changePasswordController = (req, res) =>
  res.render("changePassword");
