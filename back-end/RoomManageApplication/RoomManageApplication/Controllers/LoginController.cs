using MealApplication.Service.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RoomManageApplication.Models;

namespace RoomManageApplication.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly JwtAuthenticationManager jwtAuthenticationManager;
        private readonly IAccountService _accountService;
        public LoginController(JwtAuthenticationManager jwtAuthenticationManager, IAccountService accountService)
        {
            this.jwtAuthenticationManager = jwtAuthenticationManager;
            _accountService = accountService;
        }

        [AllowAnonymous]
        [ActionName("Authorize")]
        [HttpPost]
        public IActionResult Authorize([FromBody] User usr)
        {
            var account = _accountService.FindByCondition(a => a.Username == usr.Username && a.Password == usr.Password).SingleOrDefault();
            if(account == null)
            {
                return NotFound();
            }
            var token = jwtAuthenticationManager.Authenticate(account.Username, account.Password);
            if (string.IsNullOrEmpty(token))
                return Unauthorized();
            return Ok(token);
        }
    }
}
