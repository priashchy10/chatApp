using JwtAuthenticationManager;
using JwtAuthenticationManager.Model;
using Microsoft.AspNetCore.Mvc;

namespace Authentication.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly JwtTokenHandler _jwtTokenhandler;
        
        public LoginController(JwtTokenHandler jwtTokenhandler)
        {
            _jwtTokenhandler = jwtTokenhandler;
        }

        [HttpPost]
        public dynamic LoginNow(AuthenticationRequest authenticationRequest)
        {
            if (string.IsNullOrWhiteSpace(authenticationRequest.UserName) || string.IsNullOrWhiteSpace(authenticationRequest.Password))
                return "Invalid username or password.";


            authenticationRequest.UserName = "priash";
            authenticationRequest.Email = "priash@gmail.com";
            var authenticationResponse =  _jwtTokenhandler.GenerateJwtToken(authenticationRequest);
            if (authenticationResponse is null) return Unauthorized();
                 return authenticationResponse;
        }
    }
}
