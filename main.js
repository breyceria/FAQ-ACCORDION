const questions = document.querySelectorAll(".question")

questions.forEach(function(question){
    const quespanel = question.querySelector(".question-title")
    quespanel.addEventListener("click", function(){

        questions.forEach(function(tanong){
            if(tanong !== question){
                tanong.classList.remove("display-answer")
            }
        })
        question.classList.toggle("display-answer")
    })
})