namespace WebShellApi.Models.Helpers
{
    public enum ResponseCode
    {
        Success,
        Error
    }
    public class ApiResponse<T> where T : class
    {
        public string Error { get; set; }
        public ResponseCode ResponseCode { get; set; }
        public T Data { get; set; }
        public ApiResponse(T data, ResponseCode responseCode, string error)
        {
            Data = data;
            ResponseCode = responseCode;
            Error = error;
        }
    }
}
