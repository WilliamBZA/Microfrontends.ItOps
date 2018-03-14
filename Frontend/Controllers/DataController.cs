using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;
using ITOps.Composition;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace Frontend.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {
        RequestComposer composer;

        public DataController(RequestComposer composer)
        {
            this.composer = composer;
        }

        [HttpGet]
        public async Task<dynamic> Get()
        {
            return await composer.ServiceRequest(Request.HttpContext);
        }
    }
}
