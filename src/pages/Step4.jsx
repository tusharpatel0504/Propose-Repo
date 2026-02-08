import { useEffect } from "react";
import Card from "../components/Card";
import Buttons from "../components/Buttons";
import TenorGif from "../components/TenorGif";

const Step4 = () => {
  useEffect(() => {
    const btn = document.getElementById("move-random");

    const move = () => {
      btn.style.position = "fixed";
      // Ensure the button stays within the viewport with some padding
      const maxLeft = window.innerWidth - btn.offsetWidth - 20;
      const maxTop = window.innerHeight - btn.offsetHeight - 20;
      
      btn.style.left = Math.max(10, Math.random() * maxLeft) + "px";
      btn.style.top = Math.max(10, Math.random() * maxTop) + "px";
    };

    btn.addEventListener("mouseenter", move);
    // Also add touch/click events for mobile potentially
    btn.addEventListener("click", (e) => { e.preventDefault(); move(); });

    return () => {
        btn.removeEventListener("mouseenter", move);
        btn.removeEventListener("click", move); // Cleanup but click acts like handler
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative z-10 overflow-hidden">
      <Card blur={false}>
        <TenorGif postId="15974530976611222074" />
        <h1 className="text-3xl font-cursive font-bold mt-4 text-japan-red">
          Don't do this to me... 😔
        </h1>
        <p className="text-gray-600 mt-2">
          Please give me a chance.
        </p>
        <Buttons yesLink="/yes" noLink="#" noId="move-random" />
      </Card>
    </div>
  );
};

export default Step4;
