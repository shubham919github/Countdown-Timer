const questions = [{
    'que': 'Which is the following is a markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'C++',
    'correct': 'a'
},

{
    'que': 'what year was JavaScript launched?',
    'a': '1994',
    'b': '1995',
    'c': '1996',
    'd': '1997',
    'correct': 'b'
},

{
    'que': 'Which is the following is a javaScript libery?',
    'a': 'React js',
    'b': 'CSS',
    'c': 'JAVA',
    'd': 'Golang',
    'correct': 'a'
},

]
let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total) {
        return endQuiz()
    }
    reset();
    const data = questions[index]
    console.log(data)
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}
    
   const  reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
   }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h3> Thank You For Playing The Quiz </h3>
    <h2> ${right} / ${total} are correct </h2>
    `
}
// Initial call
loadQuestion();