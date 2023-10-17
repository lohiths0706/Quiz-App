import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: "Who is the founder of Amazon?",
			answerOptions: [
			  { answerText: "Jeff Bezos", isCorrect: true },
			  { answerText: "Elon Musk", isCorrect: false },
			  { answerText: "Bill Gates", isCorrect: false },
			  { answerText: "Mark Zuckerberg", isCorrect: false }
			]
		  },
		  {
			questionText: "What is the capital of France?",
			answerOptions: [
			  { answerText: "Berlin", isCorrect: false },
			  { answerText: "Madrid", isCorrect: false },
			  { answerText: "Rome", isCorrect: false },
			  { answerText: "Paris", isCorrect: true }
			]
		  },
		  {
			questionText: "Which planet is known as the 'Red Planet'?",
			answerOptions: [
			  { answerText: "Jupiter", isCorrect: false },
			  { answerText: "Mars", isCorrect: true },
			  { answerText: "Venus", isCorrect: false },
			  { answerText: "Saturn", isCorrect: false }
			]
		  },
		  {
			questionText: "What is the largest mammal in the world?",
			answerOptions: [
			  { answerText: "Elephant", isCorrect: false },
			  { answerText: "Blue Whale", isCorrect: true },
			  { answerText: "Giraffe", isCorrect: false },
			  { answerText: "Lion", isCorrect: false }
			]
		  },
		  {
			questionText: "Who wrote the play 'Romeo and Juliet'?",
			answerOptions: [
			  { answerText: "William Shakespeare", isCorrect: true },
			  { answerText: "Jane Austen", isCorrect: false },
			  { answerText: "George Orwell", isCorrect: false },
			  { answerText: "J.K. Rowling", isCorrect: false }
			]
		  },
		  {
			questionText: "What is the chemical symbol for gold?",
			answerOptions: [
			  { answerText: "Au", isCorrect: true },
			  { answerText: "Ag", isCorrect: false },
			  { answerText: "Fe", isCorrect: false },
			  { answerText: "Hg", isCorrect: false }
			]
		  },
		  {
			questionText: "Which gas do plants absorb from the atmosphere?",
			answerOptions: [
			  { answerText: "Oxygen", isCorrect: false },
			  { answerText: "Carbon Dioxide", isCorrect: true },
			  { answerText: "Nitrogen", isCorrect: false },
			  { answerText: "Methane", isCorrect: false }
			]
		  },
		  {
			questionText: "What is the largest organ in the human body?",
			answerOptions: [
			  { answerText: "Heart", isCorrect: false },
			  { answerText: "Brain", isCorrect: false },
			  { answerText: "Liver", isCorrect: true },
			  { answerText: "Lung", isCorrect: false }
			]
		  },
		  {
			questionText: "Which gas makes up the majority of Earth's atmosphere?",
			answerOptions: [
			  { answerText: "Oxygen", isCorrect: false },
			  { answerText: "Carbon Dioxide", isCorrect: false },
			  { answerText: "Nitrogen", isCorrect: true },
			  { answerText: "Methane", isCorrect: false }
			]
		  },
		  {
			questionText: "In which year did the Titanic sink?",
			answerOptions: [
			  { answerText: "1907", isCorrect: false },
			  { answerText: "1912", isCorrect: true },
			  { answerText: "1923", isCorrect: false },
			  { answerText: "1931", isCorrect: false }
			]
		  }
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [wantToSeeScore, setWantToSeeScore] = useState(false);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {

			setWantToSeeScore(true);
		}
	};
	const showScoreClick = () => {
		setShowScore(true);
	  };
	
	const restartQuiz = () => {
		setCurrentQuestion(0);
		setScore(0);
		setShowScore(false);
    setWantToSeeScore(false);

		
	  };
// 	return (
// 		<div className='app'>
// 			{showScore ? (
// 				<div className='score-section'>
// 					You scored {score} out of {questions.length}
// 					<button onClick={restartQuiz}>Restart Quiz</button>
// 				</div>
// 			) : (
// 				<>
// 					<div className='question-section'>
// 						<div className='question-count'>
// 							<span>Question {currentQuestion + 1}</span>/{questions.length}
// 						</div>
// 						<div className='question-text'>{questions[currentQuestion].questionText}</div>
// 					</div>
// 					<div className='answer-section'>
// 						{questions[currentQuestion].answerOptions.map((answerOption) => (
// 							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
// 						))}
// 					</div>
// 				</>
// 			)}
// 		</div>
// 	);
// }

return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          <p>You scored {score} out of {questions.length}.</p>
		  <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : wantToSeeScore ? (
        <div className='score-section'>
          <h1 >Do you want to see your score?</h1>
          <button onClick={showScoreClick}>Show Score</button>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

