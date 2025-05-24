namespace MIChatBot.Models;

public class Cita
{
    public DateTime Fecha {get; set; } = DateTime.Now;
    public string Asunto { get; set; } = string.Empty;
    public string Metodo { get; set; } = string.Empty;
    public string Contacto { get; set; } = string.Empty;
    public string NomCliente { get; set; } = string.Empty;
}
