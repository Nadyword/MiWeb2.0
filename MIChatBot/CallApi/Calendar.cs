using System.Text;

namespace MIChatBot.CallApi;

public class Calendar
{
    private readonly HttpClient _client = new();

    public async Task<string> CreateCitaAsync()
    {
        HttpRequestMessage request = new(HttpMethod.Post, "https://www.solutions-softwares.com/api/Citas/CreateCita");
        StringContent content = new("{\r\n    \"ClientId\": \"TuChatBot\"\r\n}", Encoding.UTF8, "application/json");
        request.Content = content;

        HttpResponseMessage response = await _client.SendAsync(request);
        response.EnsureSuccessStatusCode();
        return await response.Content.ReadAsStringAsync();
    }
}
