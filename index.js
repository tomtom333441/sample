const quiz =[
  {
    question: "ガーナの首都は？",
    answers:[
           "ヴィリニュス",
           "アンカラ",
           "アテネ",
           "アクラ"
         ],
   correct:"アクラ"
  },{
    question: "ジンバブエの首都は？",
    answers:[
      "東京",
      "ハラレ",
      "ニコシア",
      "バクー"
    ],
   correct:"ハラレ"
  },{
    question: "ウクライナの首都は？",
    answers:["ナイロビ",
           "ニコシア",
           "キエフ",
           "原宿"
         ],
   correct:"キエフ"
 }
];



const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button= document.getElementsByTagName("button")
let buttonLength = $button.length;
  //ボタンにanswersを代入する命令をsetupQuizという関数でかこったもの↓
  //問題文、選択しを表示させる
const setupQuiz = () =>{
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;

  while( buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
    }
  }

setupQuiz();

const clickHandler = (e) =>{
  if( quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！")
    score++;
  }else{
    window.alert("不正解！")
  }

  quizIndex++;
  if(quizIndex < quizLength){
    //問題数がまだある
    setupQuiz();
  }else{
    //問題数もうない
    window.alert("終了。"+ quizLength+ "問中、" + score + "問正解です");
  }
};

//ボタンクリックで正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e)=>{
    clickHandler (e);
    });
    handlerIndex++;
}
