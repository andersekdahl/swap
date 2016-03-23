using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace SwapWeb.Extensions
{
    public static class ControllerExtensions
    {
        public static JsonNetResult JsonNet(this Controller controller, object responseBody)
        {
            return new JsonNetResult(responseBody);
        }

        public static JsonNetResult JsonNet(this Controller controller, object responseBody, JsonSerializerSettings settings)
        {
            return new JsonNetResult(responseBody, settings);
        }
    }
}