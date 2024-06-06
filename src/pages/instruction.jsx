import enverment2 from "../assets/images/enverment-bg-2.jpg";
import envermentsm from "../assets/images/enverment-bg-sm.jpg";
import electricalSignalHorizontal from "../assets/images/electrical-signal-horizontal-3.png";
import { useNavigate } from "react-router-dom";
import { MakeGAEvent } from "../helpers";


const Instruction = () => {
    const navigate = useNavigate();

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
    <main className="main_contain terms_conditions_section">
      <div className="enverment_bg">
        <img src={enverment2} alt="" />
        <img src={envermentsm} alt="" />
      </div>

      <div className="terms_conditions_wrapper">
        <div className="my_btns_wrapper">
          <button className="btn_terms">নিয়ম ও শর্তাবলী:</button>
        </div>
        <a  className="btn_close" onClick={()=>navigate("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
          </svg>
        </a>
        <ul className="terms_conditions">
          <li>
            ১. &apos;স্পিড খাও, গরু সামলাও-সিজন ৩&apos; একটি মাইক্রোসাইট ভিত্তিক
            গেম। এই গেমটিতে বিজয়ী হতে হলে একটি ভার্চুয়াল গরুর হাট থেকে গরু নিয়ে
            বাসায় যাওয়ার সময় হাত থেকে দড়ি ছুটে যাওয়া গরুটিকে নির্দিষ্ট সময়ের
            মধ্যে ধরতে হবে এবং সামলাতে হবে।
          </li>
          <li>২. গেমটি খেলাকালীন সময়ে অবশ্যই ইন্টারনেট সচল রাখতে হবে।</li>
          <li>
            ৩. মূলত ৯০ সেকেন্ড সময়ের মধ্যে গরুটাকে দৌড়ে ধরে সামলাতে হবে। দৌড়ানোর
            সময় রাস্তায় আসা প্ৰতিবন্ধকতাগুলো, যেমন- রোডব্লক, ম্যানহোল ইত্যাদি
            পাশ কাটিয়ে অথবা লাফ দিয়ে এগিয়ে যেতে হবে। গেমটি চলাকালীন সময়ে রাস্তায়
            &apos;স্পিড&apos; ক্যান দেখা যাবে, সেগুলো সংগ্রহ করলে খেলার গতি বেড়ে
            যাবে এবং এটি গরু ধরতে সহায়তা করবে।
          </li>
          <li>
            ৪. হাত থেকে ছুটে যাওয়া গরুটিকে শেষ পর্যন্ত যিনি ধরতে পারবেন তিনি
            বিজয়ী হিসেবে গণ্য হবেন।
          </li>
          <li>
            ৫. ফেসবুক প্রোফাইল অথবা মোবাইল নাম্বার দ্বারা চিহ্নিত একজন
            প্রতিযোগিকে শুধুমাত্র একবারই বিজয়ী হিসেবে বিবেচনা করা হবে।
          </li>
          <li>
            ৬. কোনো অংশগ্রহণকারী/ প্রতিযোগি অসাধু উপায় অবলম্বন করলে তাকে বিজয়ী
            হিসেবে বিবেচনা করা হবে না।
          </li>
          <li>৭. প্রোগ্রাম চলাকালীন সময়ে প্রতিদিন সর্বোচ্চ ২০ জন বিজয়ী হবে।</li>
          <li>
            ৮. রাত ১২:০০ টা থেকে পরদিন রাত ১১ টা ৫৯ মিনিট পর্যন্ত একদিন হিসেবে
            বিবেচিত হবে। এ প্রোগ্রামটি। ১৯শে জুন থেকে। ২৮শে জুন জুন, ২০২৩
            পর্যন্ত চলবে।
          </li>
          <li>
            ৯. এই প্রোগ্রামের প্রতি বিজয়ী পুরস্কার হিসেবে পাবেন একটি Bluetooth
            Speaker
          </li>
          <li>
            ১০. প্রত্যেক বিজয়ীকে অবশ্যই এই প্রোগ্রাম শেষ হওয়ার ১০ দিনের মধ্যে
            তার মোবাইল নাম্বার ও বিস্তারিত ঠিকানা &apos;স্পিড বাংলাদেশ &apos; এর
            অফিসিয়াল ফেসবুক পেইজে (
            <a onClick={() => onfb()} style={{cursor:"pointer"}}>www.facebook.com/speed.BD.AFBL</a>) ইনবক্স
            করতে হবে। কুরিয়ার সার্ভিসের মাধ্যমে বিজয়ীদের কাছে পুরস্কার পৌঁছে
            দেওয়া হবে। অসম্পূর্ন ঠিকানা বা অন্য কোনো অনিবার্য কারণে পুরস্কার
            পৌঁছানো ব্যাহত হলে এ প্রোগ্রামের আয়োজক কর্তৃপক্ষ দায়ী থাকবে না।
          </li>
          <li>
            ১১. এই প্রোগ্রামের সাথে সংশ্লিষ্ট কেউই এই গেম এ অংশগ্রহণ করতে পারবে
            না এবং বিজয়ী হিসেবে বিবেচিত হবে না, যদি কোনোভাবে প্রমাণিত হয় তবে তা
            বাতিল বলে গণ্য হবে।
          </li>
          <li>
            ১২. আকিজ ফুড এন্ড বেভারেজ লিমিটেড যেকোনো সময় পূর্ববর্তী ঘোষণা ছাড়াই
            এ প্রোগ্রামটি পরিবর্তন, পরিমার্জন বা বাতিল করার সর্বস্বত্ব সংরক্ষণ
            করে।
          </li>
        </ul>

        <div className="bottom_line">
          <img src={electricalSignalHorizontal} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Instruction;
