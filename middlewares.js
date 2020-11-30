import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'WeTube';
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    };
    next();
};


// 이곳은 pug 템플릿에서 변수로 사용하기 위해 만든 변수들임. 