using Microsoft.AspNetCore.Mvc.ApplicationModels;

namespace MIChatBot.Configurations
{
    public class RoutePrefixConvention(string prefix) : IApplicationModelConvention
    {
        private readonly string _prefix = prefix;

        public void Apply(ApplicationModel application)
        {
            foreach (var controller in application.Controllers)
            {
                foreach (var selector in controller.Selectors)
                {
                    if (selector.AttributeRouteModel != null)
                    {
                        selector.AttributeRouteModel.Template = $"{_prefix}/{selector.AttributeRouteModel.Template}".TrimEnd('/');
                    }
                }
            }
        }
    }
}
