import { useState } from "react";
import QuestionList from "./QuestionList";
import Title from "./Title";

import data from "./data";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main className="min-h-screen	flex items-center	justify-center">
      <div className="card p-[1.5rem] shadow-[0px_30px_100px_-50px_black] bg-[hsl(0,0%,100%)] rounded-[1rem]">
        <Title />
        <QuestionList questions={questions} />
      </div>
    </main>
  );
}

export default App;
