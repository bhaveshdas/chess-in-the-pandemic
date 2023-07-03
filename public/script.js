const folded = document.querySelectorAll('.folded');

folded.forEach(fold =>{
    fold.addEventListener('click', () =>{
        removeActiveClasses()
        fold.classList.add('active')
    });
});

function removeActiveClasses(){
    folded.forEach(fold =>{
        fold.classList.remove('active')
    });
};