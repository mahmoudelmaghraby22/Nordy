using Microsoft.AspNetCore.Http;

namespace Nordy.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Access-Control-Expose-Heeaders", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}