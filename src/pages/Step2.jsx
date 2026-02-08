import Card from "../components/Card";
import Buttons from "../components/Buttons";
import TenorGif from "../components/TenorGif";

const Step2 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative z-10">
      <Card>
        <TenorGif postId="22050818" />
        <h1 className="text-3xl font-cursive font-bold mt-4 text-japan-red">
          Are you sure? 🥺
        </h1>
        <p className="text-gray-600 mt-2">
          Take a moment to consider.
        </p>
        <Buttons yesLink="/yes" noLink="/step3" />
      </Card>
    </div>
  );
};

export default Step2;
