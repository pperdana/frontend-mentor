import { useState } from "react";
import Image from "./Image";
import Text from "./Text";

const App = () => {
  const [isHide, setIsHide] = useState(true);

  return (
    <main className="">
      <article className="article-card">
        <Image />
        <Text setIsHide={setIsHide} isHide={isHide} />
      </article>
    </main>
  );
};

export default App;
