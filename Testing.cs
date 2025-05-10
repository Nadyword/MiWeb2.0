using Microsoft.AspNetCore.Mvc;

namespace ApiBot.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Testing : ControllerBase
    {

        readonly string[] ProductName = ["Lecha","Hevos","Harina","Otros"];


        [HttpGet(Name = "ListProduc")]
        public string[] GetProduc()
        {
            return ProductName;
        }

        [HttpGet(Name = "Inventory")]
        public string GetInventory(string produc)
        {
           if (produc == null)
            {
                return "No hay productos";
            }
            else
            {
                return produc switch
                {
                    "Lecha" => "2",
                    "Hevos" => "3",
                    "Harina" => "6",
                    "Otros" => "0",
                    _ => "No hay productos",
                };
            }
        }
    }
}
