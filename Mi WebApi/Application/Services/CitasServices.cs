using Mi_WebApi.Application.Interfaces;
using Mi_WebApi.Domain.Entities;
using Mi_WebApi.Infrastructure;
using System.Data;

namespace Mi_WebApi.Application.Services;

public class CitasServices(IConfiguration configuration) : EjecutarFuncion(configuration), ICitas
{
    public async Task<int> CrearCita(Cita cita)
    {
        DataTable resul = await EjecutarFuncionAsync("SetCrearCitaF", cita.Bot, cita.InfoCita());
        return Convert.ToInt32(resul.Rows[0][0]);
    }
}
