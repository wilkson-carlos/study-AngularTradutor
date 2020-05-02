export class Coracao{
    constructor(
        public cheio: boolean,
        public urlCoracaoCheio: string = '/assets/Cheio.png',
        public urlCoracaoVazio: string = '/assets/Vazio.png'
    ){}

    public exibeCoracao(): string{
        if(this.cheio){
            return this.urlCoracaoCheio
        }else{
            return this.urlCoracaoVazio
        }
    }
}