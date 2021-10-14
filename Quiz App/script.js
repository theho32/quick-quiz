const quizData = [
    {
        question: 'Random question 1',
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
        correct: 'a'
    },
    {
        question: 'Random question 2',
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
        correct: 'b'
    },
    {
        question: 'Random question 3',
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
        correct: 'c'
    },
    {
        question: 'Random question 4',
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
        correct: 'd'
    },
    {
        question: 'Random question 5',
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
        correct: 'a'
    },
]
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
 
let currentQuestion = 0

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    currentQuestion++
}

submitBtn.addEventListener('click', () => {
    currentQuestion++

    loadQuiz();
})