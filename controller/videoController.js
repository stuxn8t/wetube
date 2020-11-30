import {videos} from "../db";
import routes from "../routes";
export const homeController = (req, res) => {
    res.render("home", { pageTitle: "Home", videos }); 
};

export const searchController = (req, res) => {
    const {
        query: { term: searchingBy }} = req;  
    res.render("search", { pageTitle: "Search", searchingBy, videos});
};

export const getuploadController = (req, res) => res.render("upload", {pageTitle: "Upload"});
export const postuploadController = (req, res) => {
    const {
        body: { file, title, description } 
    }= req;
    //to do : upload and save video 
    res.redirect(routes.videoDetail(3313));
};

export const videoDetailController = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideoController = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideoController = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });

/* render 함수의 첫번째인자는 템플릿, 두번째인자는 템플릿에 추가할 정보가 담긴 객체*/