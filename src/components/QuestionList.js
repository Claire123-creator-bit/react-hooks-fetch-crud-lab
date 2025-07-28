import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, removeQuestion, updateQuestion }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((q) => (
          <QuestionItem key={q.id} question={q} removeQuestion={removeQuestion} updateQuestion={updateQuestion} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
