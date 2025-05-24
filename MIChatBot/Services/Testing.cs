using MIChatBot.DataBase;

namespace MIChatBot.Controllers;

public partial class Testing
{
    private async Task<int> InsertarPrueba(string clientId, string texto)
    {
        Inserts inserts = new(_config);
        int result = await inserts.InsertPruebaAsync(clientId, texto);
        return result;

    }
}