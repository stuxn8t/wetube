export const homeController = (req, res) => res.render("home", { pageTitle: "Home", potato: 1234 }); 
export const searchController = (req, res) => res.render("search", { pageTitle: "Search"});
export const uploadController = (req, res) => res.render("upload", {pageTitle: "Upload"});
export const videoDetailController = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideoController = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideoController = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });

/* render 함수의 첫번째인자는 템플릿, 두번째인자는 템플릿에 추가할 정보가 담긴 객체*/