using System.ComponentModel.DataAnnotations;

namespace Nordy.api.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage ="you must include password between 4 and 8")] 
        public string Password { get; set; }
    }
}