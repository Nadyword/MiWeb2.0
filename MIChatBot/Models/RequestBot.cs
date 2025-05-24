namespace MIChatBot.Models
{
    public class RequestBot<T>
    {
        public string ClientId { get; set; } = string.Empty;
        public T Model { get; set; } = default!;
    }
}
