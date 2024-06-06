import Logo from "../assets/images/logo.png";
import HomeBtn from "../assets/images/home-btn.png";
import SuccessImage from "../assets/images/success.png";
import SuccessWinner from "../assets/images/success_winer.png";
import SuccessText from "../assets/images/success-text.png";
import LinkText from "../assets/images/link-text.png";
import ShareButton from "../assets/images/share-button.png";
import { Link } from "react-router-dom";

const Share = () => {
  return (
    // <main className="success_contain">
    //   <div className="success_overlay_content">
    //     <div className="success_winer_wrapper">
    //       <img className="success_winer" src={successWinner} alt="" />
    //       <img className="success_img" src={success} alt="" />
    //     </div>
    //     <p className="success_text">
    //       অভিনন্দন আপনি গরুটিকে সামলাতে পেরেছেন। <br />
    //       আপনি ভাগ্যবান বিজয়ী । <br />
    //     </p>
    //   </div>
    //   <div className="speed_can">
    //     <img src={speedCan} alt="" />
    //   </div>
    // </main>
    <main className="main_contain">
      <div className="home-bg congrats-bg">
        <div className="container-section remove-bottom-padding">
          <div className="share-wrapper">
            <div className="logo-wrapper">
              <img src={Logo} alt="" />
            </div>
            <div className="home-btn">
              {/* <Link to="/">
                <img src={HomeBtn} alt="" />
              </Link> */}
            </div>
            <div className="success-image">
              <img src={SuccessImage} alt="" />
            </div>
            <div className="success-image-2">
              <img src={SuccessText} alt="" />
            </div>
            <div className="success-image-3">
              <img src={LinkText} alt="" />
            </div>
          </div>
         
        </div>
      </div>
    </main>
  );
};

export default Share;
