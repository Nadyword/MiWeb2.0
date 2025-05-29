using MIChatBot.DataBase.Conecction;

namespace MIChatBot.DataBase
{
    public class Consultas(IConfiguration config) : NpgsqlConecction(config)
    {
        
    }
}
