import routes from "../routes";
import Video from "../models/Video";
import Comment from "../models/Comment";

export const homeController = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 }); // find all videos
    res.render("home", { pageTitle: "Home", videos }); // and put this videos
  } catch (error) {
    //console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const searchController = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" },
    });
  } catch (error) {
    //console.log(error);
  }
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getuploadController = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postuploadController = async (req, res) => {
  const {
    body: { title, description }, // body 중 타이틀,설명만 정의
    file: { path }, // 파일 중 path만 정의
  } = req;
  //to do : upload and save video
  const newVideo = await Video.create({
    fileUrl: path, // url 값만 가져옴
    title,
    description,
    creator: req.user.id,
  });
  req.user.videos.push(newVideo.id);
  req.user.save();
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetailController = async (req, res) => {
  //console.log(req.params);
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id)
      .populate("creator")
      .populate("comments");
    //console.log(video);
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (error) {
    //console.log(error);
    res.redirect(routes.home);
  }
};

export const geteditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    if (video.creator !== req.user.id) {
      throw Error();
    } else {
      res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    }
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const posteditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteVideoController = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    if (video.creator !== req.user.id) {
      throw Error();
    } else {
      await Video.findOneAndRemove({ _id: id });
    }
  } catch (error) {
    //console.log(error);
  }
  res.redirect(routes.home);
};

/* render 함수의 첫번째인자는 템플릿, 두번째인자는 템플릿에 추가할 정보가 담긴 객체*/

// Register Video view

export const postRegisterView = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    video.views += 1;
    video.save();
    res.status(200);
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

// Add Comment

export const postAddComment = async (req, res) => {
  const {
    params: { id },
    body: { comment },
    user,
  } = req;
  try {
    const video = await Video.findById(id);
    const newComment = await Comment.create({
      text: comment,
      creator: user.id,
    });
    video.comments.push(newComment.id);
    video.save();
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};
