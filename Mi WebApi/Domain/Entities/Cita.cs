using Mi_WebApi.Domain.DTOs;
using NpgsqlTypes;
using Npgsql;
using System.ComponentModel.DataAnnotations;

namespace Mi_WebApi.Domain.Entities;

public class Cita : RequestDto
{
    private NpgsqlParameter[]? Parametros;

    public int IdCita { get; set; }
    [Required(ErrorMessage = "Falta definir el nombre")]
    public required string Nombre { get; set; }
    [Required(ErrorMessage = "Falta definir el apellido")]
    public required string Apellido { get; set; }
    [Required(ErrorMessage = "Falta definiar el telefono")]
    public required string Telefono { get; set; }
    [Required(ErrorMessage = "Falta definiar la plataforma")]
    public required string Plataforma { get; set; }
    [Required(ErrorMessage = "Falta definir la fecha y hora de la cita")]
    public DateTime FechaHora { get; set; }

    public NpgsqlParameter[] InfoCita()
    {
        this.Parametros =
        [
            new NpgsqlParameter("p_nombre", NpgsqlDbType.Varchar) { Value = this.Nombre },
            new NpgsqlParameter("p_apellido", NpgsqlDbType.Varchar) { Value = this.Apellido },
            new NpgsqlParameter("p_telefono", NpgsqlDbType.Varchar) { Value = this.Telefono},
            new NpgsqlParameter("p_plataforma", NpgsqlDbType.Varchar) { Value = this.Plataforma},
            new NpgsqlParameter("p_fecha_hora", NpgsqlDbType.Timestamp) { Value = this.FechaHora },
        ];
        return this.Parametros;
    }
}
