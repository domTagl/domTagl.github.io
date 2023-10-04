import java.util.Date;

public class Dipendente {
    private int idUfficio;
    private String dataNascita;
    private String dataAssunzione;
    private int oreLavoroSettimanali;
    private String ufficioAppartenenza;
    private String indirizzoResidenza;
    private String nome;
    private String cognome;

     public Dipendente() {
        this.idUfficio = 0;
        this.dataNascita = null;
        this.dataAssunzione = null;
        this.oreLavoroSettimanali = 0;
        this.ufficioAppartenenza = null;
        this.indirizzoResidenza = null;
        this.nome = null;
        this.cognome = null;
    }

    public Dipendente(int idUfficio, String dataNascita, String dataAssunzione, int oreLavoroSettimanali,String ufficioAppartenenza, String indirizzoResidenza, String nome, String cognome) {
        this.idUfficio = idUfficio;
        this.dataNascita = dataNascita;
        this.dataAssunzione = dataAssunzione;
        this.oreLavoroSettimanali = oreLavoroSettimanali;
        this.ufficioAppartenenza = ufficioAppartenenza;
        this.indirizzoResidenza = indirizzoResidenza;
        this.nome = nome;
        this.cognome = cognome;
    }

    public int getIdUfficio() {
        return idUfficio;
    }

    public void setIdUfficio(int idUfficio) {
        this.idUfficio = idUfficio;
    }

    public String getDataNascita() {
        return dataNascita;
    }

    public void setDataNascita(String dataNascita) {
        this.dataNascita = dataNascita;
    }

    public String getDataAssunzione() {
        return dataAssunzione;
    }

    public void setDataAssunzione(String dataAssunzione) {
        this.dataAssunzione = dataAssunzione;
    }

    public int getOreLavoroSettimanali() {
        return oreLavoroSettimanali;
    }

    public void setOreLavoroSettimanali(int oreLavoroSettimanali) {
        this.oreLavoroSettimanali = oreLavoroSettimanali;
    }

    public String getUfficioAppartenenza() {
        return ufficioAppartenenza;
    }

    public void setUfficioAppartenenza(String ufficioAppartenenza) {
        this.ufficioAppartenenza = ufficioAppartenenza;
    }

    public String getIndirizzoResidenza() {
        return indirizzoResidenza;
    }

    public void setIndirizzoResidenza(String indirizzoResidenza) {
        this.indirizzoResidenza = indirizzoResidenza;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCognome() {
        return cognome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    
}
