using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using JwtAuthenticationManager.Model;
using Microsoft.IdentityModel.Tokens;

namespace JwtAuthenticationManager
{
    public class JwtTokenHandler
    {
        public const string JWT_SECURITY_KEY = "MzVe9RJYtXlnOHd4BmIwBkIFXnp31J2ISndLfxVBZQfAzC1dUg4eS0TAis3Lcb9";   // can create from this site :- https://www.grc.com/passwords.htm 
        private const int JWT_TOKEN_VALIDATE_MINS = 20;

        public AuthenticationResponse GenerateJwtToken(AuthenticationRequest authenticationRequest)
        {
            var tokenExpiryTimeStamp = DateTime.Now.AddMinutes(JWT_TOKEN_VALIDATE_MINS);
            var tokenKey = Encoding.ASCII.GetBytes(JWT_SECURITY_KEY);

            var claimsIdentity = new ClaimsIdentity(new List<Claim> {
                new Claim(JwtRegisteredClaimNames.Name, authenticationRequest.UserName),
                new Claim(JwtRegisteredClaimNames.Email, authenticationRequest.Email),
            });

            var signingCredentials = new SigningCredentials(
                new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256Signature);

            var securityTokenDescripter = new SecurityTokenDescriptor
            {
                //Issuer = _config["JWT:ValidIssuer"],
                //Audience = _config["JWT:ValidIssuer"],
                Subject = claimsIdentity,
                Expires = tokenExpiryTimeStamp,
                SigningCredentials = signingCredentials
            };

            var jwtSecurityTokenHandler = new JwtSecurityTokenHandler();
            var securityToken = jwtSecurityTokenHandler.CreateToken(securityTokenDescripter);
            var token = jwtSecurityTokenHandler.WriteToken(securityToken);

            return new AuthenticationResponse
            {
                Username = authenticationRequest.UserName,
                ExpiresIn = (int)tokenExpiryTimeStamp.Subtract(DateTime.Now).TotalMinutes,
                JwtToken = token
            };
    }
}

}
