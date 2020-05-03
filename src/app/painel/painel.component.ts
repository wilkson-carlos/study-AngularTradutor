import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Frases } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frases[] = FRASES
  public instrucao: string = "Traduza a frase: "
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frases

  public progresso: number = 0 

  public tentativas: number = 3 
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {
  }
  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value   
  }

  public verificarResposta(): void{
    if (this.rodadaFrase.frasePtBr == this.resposta){
      alert("Parabéns! sua resposta está correta!")
      this.rodada++
      this.progresso = this.progresso + (100 / this.frases.length)

      if (this.rodada == this.frases.length){
        this.encerrarJogo.emit("vitoria")
        //alert("Parabéns! Você concluiu o teste com sucesso!")
      }
      this.atualizaRodada()    
      
    }
    else{
      this.tentativas--
      alert("Resposta errada!")

      if(this,this.tentativas === -1){
        this.encerrarJogo.emit("derrota")
        //alert("voce perdeu")
      }
    }
    
  }
  public atualizaRodada(): void{
    this.rodadaFrase = this.frases[this.rodada]

    this.resposta = ''

  }

}


