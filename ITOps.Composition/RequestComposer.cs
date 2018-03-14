using Microsoft.AspNetCore.Http;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Routing;
using System.Dynamic;

namespace ITOps.Composition
{
    public class RequestComposer
    {
        public async Task<ExpandoObject> ServiceRequest(HttpContext context)
        {
            var routeData = context.GetRouteData();

            var providers = context.RequestServices.GetServices<IProvideData>().Where(provider => provider.Matches(routeData, context.Request));

            var viewModel = new ExpandoObject();
            await Task.WhenAny(Task.WhenAll(providers.Select(p => p.PopulateData(viewModel, routeData, context.Request)).ToArray()), Task.Delay(2000));

            return viewModel;
        }
    }
}