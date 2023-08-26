import React, { useState } from "react";
import './Quiz.css'

const questions = [
    {
        question: "Describe your current mood.",
        options: [
            { answer: "Pretty happy", points: 1 },
            { answer: "I am worried about some things", points: 2 },
            { answer: "Antisocial", points: 3 },
            { answer: "Terrible, I'm fed up", points: 4 }
        ]
    },
    {
        question: "Do you often feel restless or unable to sit still?",
        options: [
            { answer: "Never", points: 1 },
            { answer: "Sometimes", points: 2 },
            { answer: "Often", points: 3 },
            { answer: "Always", points: 4 }
        ]
    },
    {
        question: "Do you have trouble sleeping or staying asleep?",
        options: [
            { answer: "Never", points: 1 },
            { answer: "Sometimes", points: 2 },
            { answer: "Often", points: 3 },
            { answer: "Always", points: 4 }
        ]
    },
    {
        question: "Do you experience racing thoughts or have difficulty concentrating?",
        options: [
            { answer: "Never", points: 1 },
            { answer: "Sometimes", points: 2 },
            { answer: "Often", points: 3 },
            { answer: "Always", points: 4 }
        ]
    },
    {
        question: "Do you feel tired or lack energy on a regular basis?",
        options: [
            { answer: "Never", points: 1 },
            { answer: "Sometimes", points: 2 },
            { answer: "Often", points: 3 },
            { answer: "Always", points: 4 }
        ]
    },
    {
        question: "Do you feel a sense of hopelessness or despair?",
        options: [
            { answer: "Never", points: 1 },
            { answer: "Sometimes", points: 2 },
            { answer: "Often", points: 3 },
            { answer: "Always", points: 4 }
        ]
    },
    {
        question: "Choose a Quote",
        options: [
            { answer: "Always look on the bright side of life", points: 1 },
            { answer: "Worrying is as productive chewing gum", points: 2 },
            { answer: "Life's a bitch, then you die", points: 3 },
            { answer: "Hard times reveal true friends", points: 4 }
        ]
    },
    {
        question: "What's your role in your family?",
        options: [
            { answer: "The fun, sociable one", points: 1 },
            { answer: "The sensible one", points: 2 },
            { answer: "I don't have a role, I'm an outsider", points: 3 },
            { answer: "The quiet one", points: 4 }
        ]
    },
    {
        question: "Are you in control of your Emotions?",
        options: [
            { answer: "Yes, pretty much all of the time", points: 1 },
            { answer: "Not really, no", points: 2 },
            { answer: "I don't really have emotions", points: 3 },
            { answer: "Yes, I'd say so", points: 4 }
        ]
    },
    {
        question: "Do you find yourself engaging in compulsive or addictive behaviors like substance use, gambling, or excessive spending?",
        options: [
            { answer: "Never", points: 1 },
            { answer: "Sometimes", points: 2 },
            { answer: "Often", points: 3 },
            { answer: "Always", points: 4 }
        ]
    }
];


const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);

    const handleOptionClick = (points) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = points;
        setAnswers(newAnswers);
    };

    const handleNextClick = () => {
        if (currentQuestion === questions.length - 1) {
            let totalScore = 0;
            for (let i = 0; i < answers.length; i++) {
                totalScore += answers[i];
            }

            if (totalScore >= 10 && totalScore <= 16) {
                setScore("DISORDER FREE: No indication of mental health issues");
            } else if (totalScore >= 17 && totalScore <= 24) {
                setScore("ANXIETY: Mild indication of mental health issues");
            } else if (totalScore >= 25 && totalScore <= 32) {
                setScore("Moderate indication of mental health issues");
            } else {
                setScore("DEPRESSION: Severe indication of mental health issues");
            }
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    return (
        <div className="quiz-container">
            <div className="quiz-background">
                <div className="quiz">
                    <div className="question">
                        <h3 className="quesBox">{questions[currentQuestion].question}</h3>
                        {questions[currentQuestion].options.map((option, index) => (
                            <div className="row" key={index}>
                                <input
                                    type="radio"
                                    id={`option${index}`}
                                    name="answer"
                                    value={option.points}
                                    onChange={() => handleOptionClick(option.points)}
                                />
                                <label className="options" htmlFor={`option${index}`}>{option.answer}</label>
                            </div>
                        ))}
                    </div>
                    {score ? (
                        <div className="result">
                            <h3>Your result:</h3>
                            <p>{score}</p>
                        </div>
                    ) : (
                        <button className="btn" onClick={handleNextClick}>Next</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quiz;
