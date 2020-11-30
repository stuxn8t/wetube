import routes from "../routes";

export const getjoinController = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};

export const postjoinController = (req, res) => {
    const {
        body: {name, email, password, password2 }
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("Join", { pageTitle: "Join" });
    } else {
    // to do : register User
    // to do : log user in
        res.redirect(routes.home);
    }
    res.render("join", { pageTitle: "Join" });
};



export const getloginController = (req, res) => res.render("login", { pageTitle: "Login"});
export const postloginController = (req, res) => {
    res.redirect(routes.home);
}


export const logoutController = (req, res) => {
    // to do : process log out
    res.redirect(routes.home);
}

export const userDetailontroller = (req, res) => res.render("userDetail");
export const editProfileController = (req, res) => res.render("editProfile");
export const changePasswordController = (req, res) => res.render("changePassword");

