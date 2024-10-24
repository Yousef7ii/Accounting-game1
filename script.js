let num1, num2, operation;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    operation = Math.random() < 0.5 ? '+' : '-';

    const questionText = `${num1} ${operation} ${num2} = ?`;
    document.getElementById('question').textContent = questionText;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').textContent = '';
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    let correctAnswer;
    
    if (operation === '+') {
        correctAnswer = num1 + num2;
    } else {
        correctAnswer = num1 - num2;
    }

    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = 'إجابة صحيحة!';
    } else {
        document.getElementById('feedback').textContent = 'إجابة خاطئة، حاول مرة أخرى.';
    }
}

// إنشاء السؤال الأول عند تحميل الصفحة
window.onload = generateQuestion;
