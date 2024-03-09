import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import quiz_questions from "../../../assets/quizJson/quiz_questions.json"

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})

export class QuizzComponent {
  
  questions:any;
  questaoSelecionada:any;
  respostas:string []=[];
  respostaSelecionada:string=""
   
  questionIndex=0;
  questionMaxIndex=0;

  mostrarResults:boolean=true;

  titulo:string="";

 constructor(){}
 ngOnInit(): void {
  if(quiz_questions){
    this.mostrarResults=false;
    this.titulo= quiz_questions.title
    this.questions=quiz_questions.questions
    this.questaoSelecionada= this.questions[this.questionIndex]
    this.questionMaxIndex= this.questions.length
 }

 }

 
 playerChose(value:string){
  this.respostas.push(value);
  this.nextsttep();

 }


async nextsttep(){
  this.questionIndex+=1;
  if(this.questionMaxIndex>this.questionIndex){
this.questaoSelecionada=this.questions[this.questionIndex]
  }
  else{ 

    const respostaFinal:string = await this.checkResult(this.respostas)
    this.mostrarResults=true;
      this.respostaSelecionada = quiz_questions.results[ respostaFinal as keyof typeof quiz_questions.results ]
    }
   
 }


 async checkResult(anwsers:string[]){

  const resultado =this.respostas.reduce((previous, current, i, arr)=>{
      if(
        arr.filter(item => item === previous).length >
        arr.filter(item => item === current).length
      ){
        return previous
      }else{
        return current
      }
  })

  return resultado
}

}