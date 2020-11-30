import routes from "../routes";
import Video from "../models/Video";

export const homeController = async(req, res) => {
    try{
        const videos = await Video.find({}); // find all videos 
        res.render("home", { pageTitle: "Home", videos }); // and put this videos  
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos : [] });
    }
};

export const searchController = (req, res) => {
    const {
        query: { term: searchingBy }} = req;  
    res.render("search", { pageTitle: "Search", searchingBy, videos});
};

export const getuploadController = (req, res) => res.render("upload", {pageTitle: "Upload"});
export const postuploadController = async(req, res) => {
    const {
        body: { title, description }, // body 중 타이틀,설명만 정의
        file : { path } // 파일 중 path만 정의
    }= req;
    //to do : upload and save video 
    const newVideo = await Video.create({
        fileUrl : path,    // url 값만 가져옴
        title,
        description
    });
        res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetailController = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideoController = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideoController = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });

/* render 함수의 첫번째인자는 템플릿, 두번째인자는 템플릿에 추가할 정보가 담긴 객체*/