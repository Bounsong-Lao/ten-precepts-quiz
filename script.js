document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Quiz Logic
    const questions = [
        {
            question: "ສີນຂໍ້ທີໜຶ່ງ 'ປານາຕິປາຕາ ເວຣະມະນີ' ໝາຍຄວາມວ່າແນວໃດ?",
            options: [
                "ເວັ້ນຈາກການເວົ້າຕົວະ",
                "ເວັ້ນຈາກການລັກຊັບ",
                "ເວັ້ນຈາກການຂ້າສັດ",
                "ເວັ້ນຈາກການດື່ມສິ່ງມຶນເມົາ"
            ],
            answer: "ເວັ້ນຈາກການຂ້າສັດ",
            explanation: "ປານາຕິປາຕາ ເວຣະມະນີ ຄືການເວັ້ນຈາກການທຳລາຍຊີວິດ ຫຼື ຂ້າສັດ."
        },
        {
            question: "ສີນຂໍ້ໃດກ່າວເຖິງການລະເວັ້ນຈາກການເອົາສິ່ງທີ່ເຈົ້າຂອງບໍ່ໄດ້ໃຫ້?",
            options: [
                "ອະພຣົມມະຈະຣິຍາ ເວຣະມະນີ",
                "ອະທິນນາທານາ ເວຣະມະນີ",
                "ມຸສາວາທາ ເວຣະມະນີ",
                "ວິການະໂພຊະນາ ເວຣະມະນີ"
            ],
            answer: "ອະທິນນາທານາ ເວຣະມະນີ",
            explanation: "ອະທິນນາທານາ ເວຣະມະນີ ຄືການເວັ້ນຈາກການລັກຊັບ ຫຼື ການເອົາສິ່ງທີ່ຄົນອື່ນບໍ່ໄດ້ໃຫ້ດ້ວຍຄວາມເຕັມໃຈ."
        },
        {
            question: "ການຮັກສາພົມມະຈັນ ແມ່ນກົງກັບສີນຂໍ້ໃດ?",
            options: [
                "ສຸຣາເມຣະຍະ...",
                "ນັດຈະຄີຕະ...",
                "ອະພຣົມມະຈະຣິຍາ ເວຣະມະນີ",
                "ມາລາຄັນທະ..."
            ],
            answer: "ອະພຣົມມະຈະຣິຍາ ເວຣະມະນີ",
            explanation: "ອະພຣົມມະຈະຣິຍາ ເວຣະມະນີ ຄືການເວັ້ນຈາກການປະພຶດຜິດໃນກາມ ຫຼື ການຮັກສາຄວາມບໍລິສຸດ."
        },
        {
            question: "ສີນຂໍ້ທີສີ່ 'ມຸສາວາທາ ເວຣະມະນີ' ເນັ້ນໜັກເຖິງເລື່ອງໃດ?",
            options: [
                "ການບໍ່ເວົ້າຄຳຫຍາບ",
                "ການບໍ່ເວົ້າສໍ່ສຽດ",
                "ການບໍ່ເວົ້າຕົວະ",
                "ການບໍ່ເວົ້າເພີ້ເຈີ້"
            ],
            answer: "ການບໍ່ເວົ້າຕົວະ",
            explanation: "ມຸສາວາທາ ເວຣະມະນີ ຄືການເວັ້ນຈາກການເວົ້າບໍ່ຈິງ ຫຼື ການຕົວະ."
        },
        {
            question: "ການລະເວັ້ນຈາກການດື່ມສິ່ງມຶນເມົາ ເຊັ່ນ ສຸລາ ແລະ ເມົາ ແມ່ນສີນຂໍ້ໃດ?",
            options: [
                "ວິການະໂພຊະນາ ເວຣະມະນີ",
                "ອຸຈຈາສະຍະນະ...",
                "ສຸຣາເມຣະຍະມັດຊະປະມາທັດຖານາ ເວຣະມະນີ",
                "ຊາຕະຣູປະຣະຊະຕະ..."
            ],
            answer: "ສຸຣາເມຣະຍະມັດຊະປະມາທັດຖານາ ເວຣະມະນີ",
            explanation: "ສີນຂໍ້ນີ້ກ່າວເຖິງການລະເວັ້ນຈາກເຄື່ອງດື່ມທີ່ເຮັດໃຫ້ຂາດສະຕິ."
        },
        {
            question: "ສີນຂໍ້ທີຫົກ 'ວິການະໂພຊະນາ ເວຣະມະນີ' ກ່ຽວຂ້ອງກັບຫຍັງ?",
            options: [
                "ການບໍ່ກິນຊີ້ນ",
                "ການກິນອາຫານພຽງຄັ້ງດຽວຕໍ່ມື້",
                "ການບໍ່ກິນອາຫານຫຼັງທ່ຽງ",
                "ການບໍ່ກິນອາຫານໃນວັນພຣະ"
            ],
            answer: "ການບໍ່ກິນອາຫານຫຼັງທ່ຽງ",
            explanation: "ວິການະໂພຊະນາ ເວຣະມະນີ ຄືການເວັ້ນຈາກການກິນອາຫານໃນເວລາທີ່ບໍ່ເໝາະສົມ ຄືຫຼັງຈາກທ່ຽງວັນໄປແລ້ວ."
        },
        {
            question: "ສີນຂໍ້ໃດທີ່ຫ້າມການເບິ່ງການຟ້ອນລຳ ແລະ ການຫຼິ້ນຕ່າງໆ?",
            options: [
                "ມາລາຄັນທະ...",
                "ອຸຈຈາສະຍະນະ...",
                "ນັດຈະຄີຕະວາທິຕະວິສູກະທັສສະນາ ເວຣະມະນີ",
                "ຊາຕະຣູປະຣະຊະຕະ..."
            ],
            answer: "ນັດຈະຄີຕະວາທິຕະວິສູກະທັສສະນາ ເວຣະມະນີ",
            explanation: "ສີນຂໍ້ນີ້ຫ້າມການເຂົ້າຮ່ວມ ຫຼື ເບິ່ງການສະແດງທີ່ເປັນການມ່ວນຊື່ນທາງໂລກ."
        },
        {
            question: "ການບໍ່ໃຊ້ເຄື່ອງຫອມ ແລະ ເຄື່ອງປະດັບ ແມ່ນສອດຄ່ອງກັບສີນຂໍ້ໃດ?",
            options: [
                "ວິການະໂພຊະນາ ເວຣະມະນີ",
                "ອະພຣົມມະຈະຣິຍາ ເວຣະມະນີ",
                "ມາລາຄັນທະວິເລປະນະທາຣະນະມະນ̣ດ̣ນະວິພູສະນັฏຖານາ ເວຣະມະນີ",
                "ມຸສາວາທາ ເວຣະມະນີ"
            ],
            answer: "ມາລາຄັນທະວິເລປະນະທາຣະນະມະນ̣ດ̣ນະວິພູສະນັฏຖານາ ເວຣະມະນີ",
            explanation: "ສີນຂໍ້ນີ້ກ່າວເຖິງການລະເວັ້ນຈາກການຕົກແຕ່ງຮ່າງກາຍດ້ວຍເຄື່ອງຫອມ ແລະ ເຄື່ອງປະດັບ."
        },
        {
            question: "ສີນຂໍ້ທີເກົ້າ 'ອຸຈຈາສະຍະນະມະຫາສະຍະນາ ເວຣະມະນີ' ຫ້າມຫຍັງ?",
            options: [
                "ການນອນໃນບ່ອນທີ່ງຽບສະຫງົບເກີນໄປ",
                "ການນອນຄົນດຽວ",
                "ການນອນເທິງຕຽງທີ່ສູງ ແລະ ຟູຟອຍ",
                "ການນອນຫຼາຍກວ່າ 8 ຊົ່ວໂມງຕໍ່ມື້"
            ],
            answer: "ການນອນເທິງຕຽງທີ່ສູງ ແລະ ຟູຟອຍ",
            explanation: "ສີນຂໍ້ນີ້ກ່າວເຖິງການລະເວັ້ນຈາກການໃຊ້ບ່ອນນອນທີ່ຫຼູຫຼາເກີນໄປ."
        },
        {
            question: "ສີນຂໍ້ສຸດທ້າຍ 'ຊາຕະຣູປະຣະຊະຕະປະຕິຄຄະຫະນາ ເວຣະມະນີ' ຫ້າມການຮັບສິ່ງໃດ?",
            options: [
                "ອາຫານ ແລະ ເຄື່ອງນຸ່ງຫົ່ມ",
                "ຢາປົວພະຍາດ",
                "ຄຳ ແລະ ເງິນ",
                "ໜັງສື ແລະ ອຸປະກອນການຮຽນ"
            ],
            answer: "ຄຳ ແລະ ເງິນ",
            explanation: "ສີນຂໍ້ນີ້ກ່າວເຖິງການລະເວັ້ນຈາກການຮັບເງິນ ແລະ ຄຳ."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const quizContainer = document.getElementById('quiz-container');
    const quizResults = document.getElementById('quiz-results');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const scoreSpan = document.getElementById('score');
    const totalQuestionsSpan = document.getElementById('total-questions');

    startQuizBtn.addEventListener('click', startQuiz);
    restartQuizBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizResults.style.display = 'none';
        quizContainer.style.display = 'block';
        totalQuestionsSpan.textContent = questions.length;
        displayQuestion();
    }

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const q = questions
            quizContainer.innerHTML = `
                <div class="quiz-question">
                    <h3>${q.question}</h3>
                    <ul class="quiz-options">
                        ${q.options.map(option => `<button>${option}</button>`).join('')}
                    </ul>
                    <div class="feedback"></div>
                    <button id="next-question-btn" style="display:none;">ຄຳຖາມຕໍ່ໄປ</button>
                </div>
            `;
            const optionButtons = quizContainer.querySelectorAll('.quiz-options button');
            optionButtons.forEach(button => {
                button.addEventListener('click', selectAnswer);
            });
        } else {
            showResults();
        }
    }

    function selectAnswer(event) {
        const selectedButton = event.target;
        const userAnswer = selectedButton.textContent;
        const currentQuestion = questions
        const feedbackDiv = quizContainer.querySelector('.feedback');
        const nextBtn = document.getElementById('next-question-btn');
        const optionButtons = quizContainer.querySelectorAll('.quiz-options button');

        optionButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === currentQuestion.answer) {
                button.classList.add('correct');
            } else {
                button.classList.add('wrong');
            }
        });

        if (userAnswer === currentQuestion.answer) {
            score++;
            feedbackDiv.textContent = "ຖືກຕ້ອງ! 👍";
            feedbackDiv.classList.remove('wrong');
            feedbackDiv.classList.add('correct');
        } else {
            feedbackDiv.textContent = `ຜິດ! ຄຳຕອບທີ່ຖືກຕ້ອງແມ່ນ: "${currentQuestion.answer}". ${currentQuestion.explanation}`;
            feedbackDiv.classList.remove('correct');
            feedbackDiv.classList.add('wrong');
        }
        nextBtn.style.display = 'block';
        nextBtn.addEventListener('click', nextQuestion);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        displayQuestion();
    }

    function showResults() {
        quizContainer.style.display = 'none';
        quizResults.style.display = 'block';
        scoreSpan.textContent = score;
    }

    // Initial load: show start button
    quizContainer.innerHTML = `
        <p>ກົດປຸ່ມ "ເລີ່ມທົດສອບ" ເພື່ອເລີ່ມຕົ້ນ!</p>
        <button id="start-quiz-btn">ເລີ່ມທົດສອບ</button>
    `;
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
});
