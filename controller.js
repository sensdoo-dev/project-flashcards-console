class controller {
    questionArr = []
    
    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    start(){
        const pathToFile = this.view.display()
        this.getData(pathToFile)
    }

    getData(pathToFile){
        questionsArr = this.model.readFile(pathToFile)
        
        let answer = this.view.display({question: questionsArr[0].question})
        for (let i = 1; i <= 5; i++) {
            answer = this.view.display({question:questionsArr[i].question, answer: answer === questionsArr[i - 1].answer})
        }
    }

    
}






module.exports = {
    start,
    getData,
} 