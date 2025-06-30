using Mi_WebApi.Application.Interfaces;
using Mi_WebApi.Domain.DTOs;
using Mi_WebApi.Infrastructure;
using System.Data;

namespace Mi_WebApi.Application.Services;

public class TestingServices(IConfiguration connection) : EjecutarFuncion(connection), ITesting
{
    public Task<string> IsActiveAsync()
    {
        return Task.FromResult("True");
    }

    public async Task<string> IsActiveDataBaseAsync(RequestDto request)
    {
        DataTable resul = await EjecutarFuncionAsync("IsDataBaseF", request.Bot);
        return  resul.Rows[0][0].ToString() ?? "True";
    }
}
