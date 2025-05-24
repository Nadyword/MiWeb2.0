using Npgsql;
using System.Data;

namespace MIChatBot.DataBase.Interface;

public interface IDbConnectionFactory
{
    Task<IDbConnection> GetConnection(string clientId);
}
