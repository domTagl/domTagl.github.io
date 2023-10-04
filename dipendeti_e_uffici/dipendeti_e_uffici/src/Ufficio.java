import java.util.ArrayList;
import java.util.List;

public class Ufficio {
    private int idUfficio;
    private String piano;
    private int numeroPostazioni;
    private String responsabileUfficio;
    private String nomeUfficio;
    private String siglaLocale;
    private List<Dipendente> dipendenti;

    public Ufficio(int idUfficio, String piano, int numeroPostazioni, String responsabileUfficio, String nomeUfficio, String siglaLocale) {
        this.idUfficio = idUfficio;
        this.piano = piano;
        this.numeroPostazioni = numeroPostazioni;
        this.responsabileUfficio = responsabileUfficio;
        this.nomeUfficio = nomeUfficio;
        this.siglaLocale = siglaLocale;
        this.dipendenti = new ArrayList<>();
    }

    // Metodi Getter e Setter per gli attributi

    public int getIdUfficio() {
        return idUfficio;
    }

    public void setIdUfficio(int idUfficio) {
        this.idUfficio = idUfficio;
    }

    public String getPiano() {
        return piano;
    }

    public void setPiano(String piano) {
        this.piano = piano;
    }

    public int getNumeroPostazioni() {
        return numeroPostazioni;
    }

    public void setNumeroPostazioni(int numeroPostazioni) {
        this.numeroPostazioni = numeroPostazioni;
    }

    public String getResponsabileUfficio() {
        return responsabileUfficio;
    }

    public void setResponsabileUfficio(String responsabileUfficio) {
        this.responsabileUfficio = responsabileUfficio;
    }

    public String getNomeUfficio() {
        return nomeUfficio;
    }

    public void setNomeUfficio(String nomeUfficio) {
        this.nomeUfficio = nomeUfficio;
    }

    public String getSiglaLocale() {
        return siglaLocale;
    }

    public void setSiglaLocale(String siglaLocale) {
        this.siglaLocale = siglaLocale;
    }

    // Metodo per aggiungere un dipendente alla lista
    public void aggiungiDipendente(Dipendente dipendente) {
        dipendenti.add(dipendente);
    }

    // Metodo per rimuovere un dipendente dalla lista
    public void rimuoviDipendente(Dipendente dipendente) {
        dipendenti.remove(dipendente);
    }

    public int size() {
        return dipendenti.size();
    }

    public Dipendente getDipendente(int i) { 
        return dipendenti.get(i);
    }

     // Metodo per ottenere la lista di dipendenti
     public List<Dipendente> getDipendenti() {
        return dipendenti;
    }
}
