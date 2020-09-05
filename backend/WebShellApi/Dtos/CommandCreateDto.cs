using System;
using System.ComponentModel.DataAnnotations;

namespace WebShellApi.Dtos
{
    public class CommandCreateDto
    {
        [Required(ErrorMessage = "Команда обязательна")]
        public string BashCommand { get; set; }
    }
}
