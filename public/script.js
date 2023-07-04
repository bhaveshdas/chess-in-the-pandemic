// simple working js code
// const folds = document.querySelectorAll('.fold');
// folds.forEach(fold =>{
//     fold.addEventListener('mouseenter',()=>{
//         removeActiveClasses();
//         fold.classList.add('active');
//     })
// })

// function removeActiveClasses(){
//     folds.forEach(fold =>{
//          fold.classList.remove('active');
//     })
// }

// jquery code for the same
$('.fold1').mouseenter(function(){
    $('.fold1').addClass('active');
    $('.fold2').removeClass('active');
})

$('.fold2').mouseenter(() =>{
    $('.fold2').addClass('active');
    $('.fold1').removeClass('active');
});