using System.Data;
using Npgsql;

namespace Mi_WebApi.Infrastructure
{
    public class EjecutarFuncion(IConfiguration connection)
    {
        private readonly IConfiguration _connection = connection;

        public async Task<DataTable> EjecutarFuncionAsync(string nombreFuncion, string bot, params NpgsqlParameter[] parametros)
        {
            try
            {
                using var conexion = new NpgsqlConnection(_connection.GetConnectionString(bot));
                await conexion.OpenAsync();

                using var comando = new NpgsqlCommand
                {
                    Connection = conexion,
                    CommandType = CommandType.Text,
                    CommandText = $"SELECT * FROM {nombreFuncion.ToLower()}({GenerarParametros(parametros.Length)});"
                };

                if (parametros != null && parametros.Length > 0)
                {
                    for (int i = 0; i < parametros.Length; i++)
                        parametros[i].ParameterName = $"p{i + 1}";

                    comando.Parameters.AddRange(parametros);
                }

                using var adaptador = new NpgsqlDataAdapter(comando);
                var resultado = new DataTable();
                adaptador.Fill(resultado);
                return resultado;
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        private static string GenerarParametros(int cantidad)
        {
            return string.Join(",", Enumerable.Range(1, cantidad).Select(i => $"@p{i}"));
        }
    }
}
