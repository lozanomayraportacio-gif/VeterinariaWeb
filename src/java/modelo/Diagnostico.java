package modelo;

public class Diagnostico {
    private int id;
    private int mascota_id;
    private String descripcion;
    private String tratamiento;
    private String fecha;

    public Diagnostico() {
    }

    public Diagnostico(int id, int mascota_id, String descripcion,
                       String tratamiento, String fecha) {
        this.id = id;
        this.mascota_id = mascota_id;
        this.descripcion = descripcion;
        this.tratamiento = tratamiento;
        this.fecha = fecha;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public int getMascota_id() { return mascota_id; }
    public void setMascota_id(int mascota_id) { this.mascota_id = mascota_id; }

    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

    public String getTratamiento() { return tratamiento; }
    public void setTratamiento(String tratamiento) { this.tratamiento = tratamiento; }

    public String getFecha() { return fecha; }
    public void setFecha(String fecha) { this.fecha = fecha; }
}
