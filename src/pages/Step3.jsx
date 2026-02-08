import Card from "../components/Card";
import Buttons from "../components/Buttons";
import TenorGif from "../components/TenorGif";

const Step3 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative z-10 p-4">
      <Card>
        <TenorGif postId="15195810" />
        <h1 className="text-2xl md:text-3xl font-cursive font-bold mt-4 text-japan-red">
          Please reconsider... 💔
        </h1>
        <p className="text-gray-600 mt-2">
          You mean everything to me.
        </p>
        <Buttons yesLink="/yes" noLink="/step4" />
      </Card>
    </div>
  );
};

export default Step3;
