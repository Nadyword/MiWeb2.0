using Mi_WebApi.Domain.Entities;

namespace Mi_WebApi.Application.Interfaces;

internal interface ICitas
{
    Task<int> CrearCita(Cita cita); 
}