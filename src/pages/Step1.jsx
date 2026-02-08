import Card from "../components/Card";
import Buttons from "../components/Buttons";
import TenorGif from "../components/TenorGif";

const Step1 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative z-10">
      <Card>
        <TenorGif postId="22885016" />
        <h1 className="text-3xl font-cursive font-bold mt-4 text-japan-red">
          Will you be mine? 🌹
        </h1>
        <p className="text-gray-600 mt-2">~ Prakhar Bhatnagar</p>

        <Buttons yesLink="/yes" noLink="/step2" />
      </Card>
    </div>
  );
};

export default Step1;
