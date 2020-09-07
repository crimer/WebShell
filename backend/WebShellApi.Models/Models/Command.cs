using System;

namespace WebShellApi.Models.Models
{
    public class Command
    {
        public int Id { get; set; }
        public DateTime DateTime { get; set; }
        public string BashCommand { get; set; }
        public string Result { get; set; }
        public bool IsFailed { get; set; }
    }
}
