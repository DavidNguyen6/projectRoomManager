using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using RoomManageApplication.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace RoomManageApplication
{
    public class JwtAuthenticationManager
    {
        private readonly IConfiguration _configuration;
        private readonly IDictionary<string, string> users = new Dictionary<string, string>
        { {"test", "password"}, {"test1", "password1"}, {"user", "assword"} };
        public JwtAuthenticationManager(IConfiguration configuration)
        {
            _configuration = configuration;
            
        }
        public string? Authenticate(string username, string password)
        {
            //var users_Account = _roomDbContext.AccountManagers.Any(u => u.Username == username && u.Password == password);

            //auth failed - creds incorrect
            if (!users.Any(u => u.Key == username && u.Value == password))
            {
                return null;
            }

            //if(!users_Account)
            //{
            //    return null;
            //}

            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
            //var dung = _roomDbContext.AccountManagers.FirstOrDefault(u => u.Username == username && u.Password == password);
            //string genderStr = JsonConvert.SerializeObject(dung);
            var tokenKey = Encoding.ASCII.GetBytes(_configuration["Jwt:Token"]);
            SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor()
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, username),
                    new Claim(ClaimTypes.Email, password),
                    
                }),
                // Duration of the Token
                // Now the the Duration to 1 Hour
                Expires = DateTime.UtcNow.AddDays(1),

                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(tokenKey),
                    SecurityAlgorithms.HmacSha256Signature) //setting sha256 algorithm
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}
