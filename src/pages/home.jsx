
import Logo from "../assets/images/logo.png";
import SpeedCan from "../assets/images/speed-can-image.png";
import InstructionImage from "../assets/images/instruction-image.png";
import MobInstructionImage from "../assets/images/mob-instruction-image.png";
import Button from "../assets/images/button.png";
import { MakeGAEvent } from "../helpers";

import { useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [instructionPopup, setInstructionPopup] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 576);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 576);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(isSmallScreen);

  const onClickHandler = () => {
    MakeGAEvent({
      action: "GAME_START",
      category: "GAME",
      label: "gameStart",
    });
    window.location.href = "https://speedkhawgorushamlao.com/game/";
  };

  const onHandleNavigation = () => {
    MakeGAEvent({
      action: "GOTO_INSTRUCTION",
      category: "NAVIGATION",
      label: "gotoInstruction",
    });

    setInstructionPopup(true);
    // navigate("/instruction");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const onfb = () => {
    MakeGAEvent({
      action: "GOTO_FACEBOOK",
      category: "NAVIGATION",
      label: "gotoFacebook",
    });
    window.location.href =
      "https://www.facebook.com/speed.BD.AFBL?mibextid=ZbWKwL";
  };
  return (
    <>
      {!instructionPopup ? (
        <main className="main_contain">
          {loading ? (
            <div className="loading-image"></div>
          ) : (
            <>
              <div className="home-bg">
                <div className="container-section">
                  <div className="page-wrapper">
                    <div className="logo-wrapper">
                      <img src={Logo} alt="" />
                    </div>
                    <div className="instruction-wrapper">
                      {isSmallScreen ? (
                        <img
                          className="instruction-image"
                          src={MobInstructionImage}
                          alt=""
                        />
                      ) : (
                        <img
                          className="instruction-image"
                          src={InstructionImage}
                          alt=""
                        />
                      )}
                      <p className="instruction-text">
                        বিস্তারিত নিয়মাবলী জানতে &nbsp;
                        <a onClick={() => onHandleNavigation()}>ক্লিক করুন</a>
                      </p>
                      <div className="instruction-btn-wrapper" onClick={()=>onClickHandler()}>
                        
                          <img src={Button} alt="" className="instruction-btn"/>
                       
                      </div>
                    </div>
                  </div>
                  <div className="speed-can">
                    <img src={SpeedCan} alt="" />
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
      ) : (
        <main className="main_contain">
          <div className="home-bg">
            <button
              className="btn_close"
              onClick={() => setInstructionPopup(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
              >
                <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
              </svg>
            </button>
            <div className="container-section">
              <div className="page-wrapper">
                <div className="logo-wrapper">
                  <img src={Logo} alt="" />
                </div>
                <div className="instruction-wrapper">
                  <h2>নিয়ম ও শর্তাবলী: </h2>
                  <ul className="terms_conditions">
                    <li>
                      ১. &apos;স্পিড খাও, গরু সামলাও-সিজন ৪&apos; একটি
                      মাইক্রোসাইট ভিত্তিক গেম। এই গেমটিতে বিজয়ী হতে হলে একটি
                      ভার্চুয়াল গরুর হাট থেকে গরু নিয়ে বাসায় যাওয়ার সময় হাত থেকে
                      দড়ি ছুটে যাওয়া গরুটিকে নির্দিষ্ট সময়ের মধ্যে ধরতে হবে এবং
                      সামলাতে হবে।
                    </li>
                    <li>
                      ২. গেমটি খেলাকালীন সময়ে অবশ্যই ইন্টারনেট সচল রাখতে হবে।
                    </li>
                    <li>
                      ৩. মূলত ৯০ সেকেন্ড সময়ের মধ্যে গরুটাকে দৌড়ে ধরে সামলাতে
                      হবে। দৌড়ানোর সময় রাস্তায় আসা প্ৰতিবন্ধকতাগুলো, যেমন-
                      রোডব্লক, ম্যানহোল ইত্যাদি পাশ কাটিয়ে অথবা লাফ দিয়ে এগিয়ে
                      যেতে হবে। গেমটি চলাকালীন সময়ে রাস্তায় &apos;স্পিড&apos;
                      ক্যান দেখা যাবে, সেগুলো সংগ্রহ করলে খেলার গতি বেড়ে যাবে
                      এবং এটি গরু ধরতে সহায়তা করবে।
                    </li>
                    <li>
                      ৪. হাত থেকে ছুটে যাওয়া গরুটিকে শেষ পর্যন্ত যিনি ধরতে
                      পারবেন তিনি বিজয়ী হিসেবে গণ্য হবেন।
                    </li>
                    <li>
                      ৫. ফেসবুক প্রোফাইল অথবা মোবাইল নাম্বার দ্বারা চিহ্নিত একজন
                      প্রতিযোগিকে শুধুমাত্র একবারই বিজয়ী হিসেবে বিবেচনা করা হবে।
                    </li>
                    <li>
                      ৬. কোনো অংশগ্রহণকারী/ প্রতিযোগি অসাধু উপায় অবলম্বন করলে
                      তাকে বিজয়ী হিসেবে বিবেচনা করা হবে না।
                    </li>
                    <li>
                      ৭. রাত ১২:০০ টা থেকে পরদিন রাত ১১ টা ৫৯ মিনিট পর্যন্ত
                      একদিন হিসেবে বিবেচিত হবে। এ প্রোগ্রামটি ৭ই জুন থেকে ১৬ই
                      জুন ২০২৪ পর্যন্ত চলবে।
                    </li>
                    <li>
                      ৮. এই প্রোগ্রামের প্রতি বিজয়ী পুরস্কার হিসেবে পাবেন একটি
                      Wireless Earbuds.
                    </li>
                    <li>
                      ৯. প্রত্যেক বিজয়ীকে অবশ্যই এই প্রোগ্রাম শেষ হওয়ার ১০ দিনের
                      মধ্যে তার মোবাইল নাম্বার ও বিস্তারিত ঠিকানা &apos;স্পিড
                      বাংলাদেশ &apos; এর অফিসিয়াল ফেসবুক পেইজে (
                      <a onClick={() => onfb()} style={{ cursor: "pointer" }}>
                        www.facebook.com/speed.BD.AFBL
                      </a>
                      ) ইনবক্স করতে হবে। বিজয়ীদেরকে আকিজ ফুড এন্ড বেভারেজ লিঃ
                      কর্তৃক নির্ধারিত স্থান থেকে এবং নির্ধারিত সময়ের মধ্যে
                      পুরুষ্কার সংগ্রহ করতে হবে।
                    </li>
                    <li>
                      ১০. এই প্রোগ্রামের সাথে সংশ্লিষ্ট কেউই এই গেম এ অংশগ্রহণ
                      করতে পারবে না এবং বিজয়ী হিসেবে বিবেচিত হবে না, যদি
                      কোনোভাবে প্রমাণিত হয় তবে তা বাতিল বলে গণ্য হবে।
                    </li>
                    <li>
                      ১১. আকিজ ফুড এন্ড বেভারেজ লিমিটেড যেকোনো সময় পূর্ববর্তী
                      ঘোষণা ছাড়াই এ প্রোগ্রামটি পরিবর্তন, পরিমার্জন বা বাতিল
                      করার সর্বস্বত্ব সংরক্ষণ করে।
                    </li>
                  </ul>
                </div>
              </div>
              <div className="speed-can">
                <img src={SpeedCan} alt="" />
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
