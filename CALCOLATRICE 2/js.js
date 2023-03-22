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
        //controllo se è presente un .
        if (this.numCorrente.includes(".")) {
            alert("La stringa contiene un punto.");
            let numCorrente_ = 0; 
            numCorrente_ = parseFloat(numCorrente);
        } else {
            alert("La stringa non contiene un punto.");
        }
        //controllo se è presente un .
        if (this.parziale.includes(".")) {
            alert("La stringa contiene un punto.");
            let parziale_ = 0; 
            parziale_ = parseFloat(parziale);
        } else {
            alert("La stringa non contiene un punto.");
        }


        let risulatato;
        risulatato = 0;

        if(this.segno == '/'){
            risulatato = parseInt(this.parziale_) / parseInt(this.numCorrente_);
        }
        if(this.segno == '*'){
            risulatato = parseInt(this.parziale_) * parseInt(this.numCorrente_);
        }
        if(this.segno == '+'){
            risulatato = parseInt(this.parziale_) + parseInt(this.numCorrente_);
        }
        if(this.segno == '-'){
            risulatato = parseInt(this.parziale_) - parseInt(this.numCorrente_);
        }

        document.getElementById('numeroFinale').value = risulatato;
        this.parziale = "";
        this.numCorrente = "";
    }

}



ClassCalcolatrice = new calcolatrice();