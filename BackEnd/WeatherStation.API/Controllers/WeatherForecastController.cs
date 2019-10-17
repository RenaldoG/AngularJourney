using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WeatherStation.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly List<Weather> Summaries = new List<Weather>
        {
            new Weather() { Id = 0, Name = "Freezing", Temprature = "22", Test = "ola" },
            new Weather() { Id = 1, Name = "nkdnfknd", Temprature = "44", Test = "ola" },
            new Weather() { Id = 2, Name = "sdfsdf", Temprature = "5", Test = "ola" },
            new Weather() { Id = 3, Name = "dgdf", Temprature = "66", Test = "ola" },
            new Weather() { Id = 4, Name = "dfddd", Temprature = "272", Test = "ola" },
            new Weather() { Id = 5, Name = "aaaaa", Temprature = "96", Test = "ola" },
            new Weather() { Id = 6, Name = "ghghghgh", Temprature = "88", Test = "ola" },
            new Weather() { Id = 7, Name = "redfgfd", Temprature = "44", Test = "ola" },
        };

        private static readonly string[] dddd = new string[]
        {
            "eerre", "dfgdfgfdg", "aaaaaa"
        };


        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Weather> Get()
        {
            return Summaries;
        }
    }

    public class Weather
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Temprature { get; set; }

        public string Test { get; set; }
    }
}
