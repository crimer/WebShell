export const sendRequest = async (
  url,
  method = 'GET',
  data = null,
  contentType = ''
) => {
  const uri = `https://localhost:44341/${url}`
  const response = await fetch(uri, {
    method: method,
    headers: buildHeaders(contentType),
    body: data !== null ? JSON.stringify(data) : null,
  });
  const content = await response.json();
  console.log(`Request: ${method} ${uri} ${data} ${contentType}`);

  return content;
};

const buildHeaders = (contentType) => {
  if (contentType === '') return {};
  else {
    return {
      'Content-Type': contentType,
    };
  }
};
