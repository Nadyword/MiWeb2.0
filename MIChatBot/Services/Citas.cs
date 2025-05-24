using MIChatBot.DataBase;
using MIChatBot.Models;

namespace MIChatBot.Controllers;

public partial class Citas
{
    private async Task<int> InsertarCita(RequestBot<Cita> request)
    {
        Inserts inserts = new(_config);
        int result = await inserts.InsertCitaAsync(request);
        return result;
    }
}
