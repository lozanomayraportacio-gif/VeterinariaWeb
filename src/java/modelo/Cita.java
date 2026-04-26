package modelo;

public class Cita {
    private int id;
    private int mascota_id;
    private int propietario_id;
    private int veterinario_id;
    private String fecha;
    private String hora;
    private String motivo;

    public Cita() {
    }

    public Cita(int id, int mascota_id, int propietario_id, int veterinario_id,
                String fecha, String hora, String motivo) {
        this.id = id;
        this.mascota_id = mascota_id;
        this.propietario_id = propietario_id;
        this.veterinario_id = veterinario_id;
        this.fecha = fecha;
        this.hora = hora;
        this.motivo = motivo;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public int getMascota_id() { return mascota_id; }
    public void setMascota_id(int mascota_id) { this.mascota_id = mascota_id; }

    public int getPropietario_id() { return propietario_id; }
    public void setPropietario_id(int propietario_id) { this.propietario_id = propietario_id; }

    public int getVeterinario_id() { return veterinario_id; }
    public void setVeterinario_id(int veterinario_id) { this.veterinario_id = veterinario_id; }

    public String getFecha() { return fecha; }
    public void setFecha(String fecha) { this.fecha = fecha; }

    public String getHora() { return hora; }
    public void setHora(String hora) { this.hora = hora; }

    public String getMotivo() { return motivo; }
    public void setMotivo(String motivo) { this.motivo = motivo; }
}