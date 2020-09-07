namespace WebShellApi.Helpers
{
    public class ApiResponse<T> where T : class
    {
        public string Error { get; set; }
        public bool IsFailed { get; set; }
        public T Data { get; set; }
        public ApiResponse(T data)
        {
            Data = data;
        }
    }
}
