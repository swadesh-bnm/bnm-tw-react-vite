

function FeaturedVideo(){

let video = "https://bnm-media.s3.us-east-1.amazonaws.com/video/featured_video.mp4";

//let video1 = "https://www.youtube.com/watch?v=Uqmc0891L2U";

 return  <center><video controls width="70%" className="videoPlayer" src={video}></video></center>

}

export default FeaturedVideo;