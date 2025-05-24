using MIChatBot.DataBase.Interface;
using Npgsql;
using System.Data;

namespace MIChatBot.DataBase.Conecction;

public class NpgsqlConecction(IConfiguration config) : IDbConnectionFactory
{
    private readonly IConfiguration _config = config;

    public async Task<IDbConnection> GetConnection(string clientId)
    {
        string connectionString = _config[$"ConnectionStrings:{clientId}"]!;
        NpgsqlConnection connection = new(connectionString);
        await connection.OpenAsync();
        return connection;
    }
}