using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using System;
using System.Dynamic;
using System.Threading.Tasks;

namespace ITOps.Composition
{
    public interface IProvideData
    {
        bool Matches(RouteData routeData, HttpRequest request);
        Task PopulateData(dynamic viewModel, RouteData routeData, HttpRequest request);
    }
}