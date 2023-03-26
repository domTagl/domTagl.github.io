class calcolatrice{

    constructor(){
        this.parziale = "";
        this.numCorrente = "";
        this.segno = ' ';
        this.numeroFinale_ = "";
    }

    aggiungiNumero(numero){
        //aggiungo alc numeroCorrente il numero e aggiorno input numeroFinale
        this.numCorrente += numero;
        this.numeroFinale_ += numero;
        document.getElementById('numeroFinale').value = this.numeroFinale_;
    }

    negativo(){
        this.numCorrente = "-" +  this.numCorrente;
        let vettore = this.numeroFinale_.split(" ");
        if(this.vettore.length == 2){
            this.numeroFinale_ = vettore[0] + " " + vettore[1] + " " + "-" + vettore[2];
        }
        else{
            this.numeroFinale_ = "-" + vettore[0];
        }
        document.getElementById('numeroFinale').value = this.numeroFinale_;
    }
      

    cancella(){
        this.parziale = "";
        this.numCorrente = "";
        this.segno = ' ';
        this.numeroFinale_ = "";
        document.getElementById('numeroFinale').value = this.numeroFinale_;
    }
      
      
    aggiungiSegno(segno_){
        //memorizzo segno e numero
        this.segno = segno_;
        this.parziale = this.numCorrente;
      
        //aggiorno numeroFinale_ e numeroCorrente lo rendo ""
        this.numeroFinale_ =  this.numeroFinale_ + " " + segno_ + " ";
        document.getElementById('numeroFinale').value =  this.numeroFinale_;
        this.numCorrente = "";
    }

    calcolaRisultato(){
        let parziale_ = 0;
		this.parziale_ =  parseFloat(this.parziale);
		
		if (isNaN(this.parziale_)) {
		  this.parziale_ = this.parziale;
		}

        let numCorrente_;
		this.numCorrente_ =  parseFloat(this.numCorrente);
		
		if (isNaN(this.numCorrente_)) {
		  this.numCorrente_ = this.numCorrente;
		}

        if(this.segno == '/'){
            this.risulatato = parseInt(this.parziale_) / parseInt(this.numCorrente_);
        }
        if(this.segno == '*'){
            this.risulatato = parseInt(this.parziale_) * parseInt(this.numCorrente_);
        }
        if(this.segno == '+'){
            this.risulatato = parseInt(this.parziale_) + parseInt(this.numCorrente_);
        }
        if(this.segno == '-'){
            this.risulatato = parseInt(this.parziale_) - parseInt(this.numCorrente_);
        }

        document.getElementById('numeroFinale').value = this.risulatato;
        this.parziale = "";
        this.numCorrente = "";
    }

}



ClassCalcolatrice = new calcolatrice();