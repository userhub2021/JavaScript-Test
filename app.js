const quiz= [
    {
        question:'ゲーム市場最も売れたゲーム機は次の内どれ',
        answers:[
            'スパーファミコン',
            'プレステーション２',
            'ニンテンドースイッチ',
            'ニンテンドーDS',
        ],
        correct: 'ニンテンドーDS',
    },{
        question:'糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        answers:[
            'MOTHER2',
            'スパーマリオブラザーズ３',
            'スパードンキーコング',
            '星のカービィ',
        ],
        correct: 'MOTHER2',
    },{
        question:'ファイナルファンタジーⅣの主人公の名前は？',
        answers:[
            'フリオニール',
            'クラウド',
            'ティーダ',
            'セシル',
        ],
        correct: 'セシル',
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

document.getElementById('js-question').textContent = quiz[quizIndex].question;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義

const setupQuiz = () =>{
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

function clickHandler(e) {
    if (quiz[quizIndex].correct == e.target.textContent) {
        window.alert('正解です');
        score++;
    } else {
        window.alert('不正解です');
    }

    quizIndex++;
    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('終了！あなたの正解は' + score + '/' + quizLength + 'です！');
    }
}

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e) =>{
        clickHandler(e);
    });
    handlerIndex++;
}
