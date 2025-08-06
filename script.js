const questions = document.querySelectorAll(".accordion-question");


questions.forEach((question)=>{
    question.addEventListener(("click"), ()=>{
        const isActive = question.classList.contains("active")
        
        questions.forEach((q)=>{
            q.classList.remove("active");
            q.nextElementSibling.style.display = "none";
        }) // First closes all the active questions
        if(!isActive){
            question.classList.add("active");
            question.nextElementSibling.style.display = "block";
        }
    })
})