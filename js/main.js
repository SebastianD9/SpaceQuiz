


const createStars = () => {
    const starsContainer = document.getElementById("stars");
    const fragment = document.createDocumentFragment();
    const starCount = 200;
  
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.opacity = `${Math.random() * 0.5}`;
      fragment.appendChild(star);
    }
  
    starsContainer.appendChild(fragment);
  };
  
  createStars();

  const start = document.querySelector('.btnStart');
  const startQuestions = document.querySelector('.btnStartQuest');
  const RANGE = document.querySelector('.RANGEwrapper');
  const RANGEtext = document.querySelector('.range');
  const finalmax = document.querySelector('.maximum');
  const container = document.querySelector('.container');
  const first = document.querySelector('.container-Firstquestion');
  const last = document.querySelector('.container-End');
  const text=document.querySelector(".text");
  const quest = document.querySelector('.quest');
  const endtext = document.querySelector('.endtext');
  const answer = document.querySelector('.answer');
  const oncemore = document.querySelector('.oncemore');
  let score = 0;
  let runda = 1;
  let per='';
  let check = false;
  let randomIndex = Math.floor(Math.random() * myQuestions.length);
  const lenght = [];

  const range = () => {
    RANGE.style.display="flex";
    container.style.animation = "opacityon 1s forwards";
    setTimeout( () => {
      RANGEtext.style.display="flex";
      RANGEtext.style.animation = "opacityoff 1s forwards";
      ;}, 2000);
  }
  const firstquest = () => {
    console.log(RangeNumber);
    first.style.display ="flex";
    RANGE.style.border = "none";
    RANGEtext.style.animation = "opacityon 1s forwards";
    showQuestions();
    showAnswers();
    lenght.push(randomIndex);
    myQuestions.splice(randomIndex, 1);
  }
  
  const showQuestions = () => {
    quest.innerHTML =`${runda}. ${myQuestions[randomIndex].question}`;
   // console.log(myQuestions[randomIndex].correctAnswer);
    per = myQuestions[randomIndex].correctAnswer;
    //console.log(myQuestions[randomIndex].question);
  }
  const showAnswers = () => {
    const a = (myQuestions[randomIndex].answers);
    let ans = '';
    for (let key in a) {
    ans += `<p><strong>${key}:</strong> ${a[key]}</p>`;
    answer.innerHTML = ans;
    
    answer.addEventListener('click', nextquest);
}

}

const checkAnswer = e => {
  if (check==false){
  const a = (lenght.length);
  b = (runda);
  console.log("runda: " + runda);
  OK = e.target.closest("p").textContent;
  console.log(OK);
  console.log(per);
    if (per == OK[0] && a==b){
      score+=1;
    }
  }
}
const nextquest =(e) =>{
  checkAnswer(e);
  if (check==false){
  check=true;
  text.style.animation = "opacityon 1s forwards";
  console.log(runda);
  if(runda == RangeNumber){
    console.log(score);
    TheEnd();
  }
  else {
  runda+=1;
  setTimeout( () => {
  let b=Math.floor(Math.random() * myQuestions.length);
  randomIndex=b;
  showAnswers();
  showQuestions();
  
  myQuestions.splice(randomIndex, 1);
  lenght.push(randomIndex);
  check=false;

  text.style.animation = "opacityoff 1s forwards";}, 1000);}
  }
  else {console.log('chwila!');}
  }
const TheEnd = ()=> {
  setTimeout( () => {
  oncemore.style.display="flex";
  oncemore.style.animation = "opacityoff 1s forwards";
  ;}, 2000);
  last.style.display="flex";
  text.style.display="none";
  first.style.border = "none";
  END = `<p>Punkty: ${score}`;
  endtext.innerHTML = END;
  MaxPoints = `<p>Maksymalna ilość punktów: ${RangeNumber}`;
  finalmax.innerHTML = MaxPoints;
  //console.log("XD");

}
  
  start.addEventListener('click', range);
  startQuestions.addEventListener('click', firstquest);
