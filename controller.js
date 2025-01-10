class Controller {
    questionArr = []
    
    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    async start(){
        const pathToFile = await this.view.display()
        this.getData(pathToFile)
    }

    async getData(pathToFile){
        this.questionArr = await this.model.readFile(pathToFile)
        
        let answer = await this.view.display({question: this.questionArr[0].question})
        for (let i = 1; i <= 5; i++) {
            answer = await this.view.display({question:this.questionArr[i].question, answer: answer === this.questionArr[i - 1].answer})
        }
    }

    
}






module.exports = Controller
