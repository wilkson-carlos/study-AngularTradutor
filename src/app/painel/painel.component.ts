import { Component, OnInit } from '@angular/core';
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
      this.atualizaRodada()    
      
    }
    else{
      this.tentativas--

      if(this,this.tentativas === -1){
        alert("voce perdeu")
      }
    }
    
  }
  public atualizaRodada(): void{
    this.rodadaFrase = this.frases[this.rodada]

    this.resposta = ''

  }

}


