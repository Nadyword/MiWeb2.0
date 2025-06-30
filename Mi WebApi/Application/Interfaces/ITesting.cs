using Mi_WebApi.Domain.DTOs;

namespace Mi_WebApi.Application.Interfaces
{
    public interface ITesting
    {
        Task<string> IsActiveAsync();
        Task<string> IsActiveDataBaseAsync(RequestDto request);
    }
}
