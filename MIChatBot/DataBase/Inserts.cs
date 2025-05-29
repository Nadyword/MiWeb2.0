using MIChatBot.DataBase.Conecction;
using MIChatBot.Models;
using Npgsql;
using System.Data;
using System.Diagnostics.Contracts;

namespace MIChatBot.DataBase
{
    public class Inserts(IConfiguration config) : NpgsqlConecction(config)
    {
        public async Task<int> InsertPruebaAsync(string ClientId, string Texto)
        {
            using IDbConnection connection = await GetConnection(ClientId);

            using NpgsqlCommand command = (NpgsqlCommand)connection.CreateCommand();
            command.CommandText = $"INSERT INTO Pruebas (Texto) VALUES ('{Texto}')";
            command.CommandType = CommandType.Text;

            return await command.ExecuteNonQueryAsync();
        }

        public async Task<int> InsertCitaAsync(RequestBot<Cita> request)
        {
            using var connection = await GetConnection(request.ClientId);
            using NpgsqlCommand command = (NpgsqlCommand)connection.CreateCommand();
            command.CommandText = $"INSERT INTO public.citas(fecha, asunto, metodo, contacto, nom_cliente) VALUES ('{request.Model.Fecha:yyyy-MM-dd HH:MM:ss}', '{request.Model.Asunto}', '{request.Model.Metodo}', '{request.Model.Contacto}', '{request.Model.NomCliente}');";
            command.CommandType = CommandType.Text;
            return await command.ExecuteNonQueryAsync();
        }
    }
}
