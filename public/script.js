let progression = 0;
const progress = document.getElementById('progress');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');
nextButton.addEventListener('click', () =>{
    progression++;
    if(progression >= circles.length){
        progression = circles.length-1;
    }
  update();
})
console.log(progress);
prevButton.addEventListener('click', () =>{
    progression--;
    if(progression<0){
        progression = 0;
    }
    update();
})

function update(){
    circles.forEach((circle,id)=>{
        if(id <= progression ){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    })
  progress.style.width = (progression/(circles.length-1))*100 + '%';
  if(progression == 0){
    prevButton.disabled = true;
  }
  else if(progression ==circles.length-1){
    nextButton.disabled = true;
  }
  else{
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}