
import cow from "../assets/images/cow.png";
import electricalSignalHorizontal from "../assets/images/electrical-signal-horizontal-3.png";

const GameClose = () => {
  return (
    <main className="game_campaign_close">
    <img className="cow" src={cow} alt="" />
    <div className="inner_content_wrapper">
      <div className="inner_content">
        <h2>দুঃখিত !</h2>
        <p>
          স্পিড খাও গরু সামলাও ক্যাম্পেনটি’র সময়সীমা শেষ। তোমার আগ্রহের জন্য
          ধন্যবাদ! আগামী দিনগুলোতে তোমাদের জন্য স্পিড নিয়ে আসবে আরও দারুন সব
          কনটেস্ট।
        </p>
      </div>
    </div>
    <div className="pack_shot">
      <img src={electricalSignalHorizontal} alt="" />
    </div>
  </main>
  )
}

export default GameClose