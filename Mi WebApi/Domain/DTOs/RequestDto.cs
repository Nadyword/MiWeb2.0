using System.ComponentModel.DataAnnotations;

namespace Mi_WebApi.Domain.DTOs;

public class RequestDto
{
    [Required(ErrorMessage = "El campo Numero es obligatorio.")]
    public required string Numero { get; set; }

    [Required(ErrorMessage = "El campo Bot es obligatorio.")]
    public required string Bot { get; set; }
}
