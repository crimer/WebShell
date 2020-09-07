export const sendRequest = async (
  url,
  method = 'GET',
  data = {},
  contentType = ''
) => {
  console.log(url, method, data, contentType);
  const response = await fetch(url, {
    method: method,
    headers: buildHeaders(contentType),
    body: JSON.stringify(data),
  });

  return await response.json();
};

const buildHeaders = (contentType) => {
  if (contentType === '') return {};
  else {
    return {
      'Content-Type': contentType,
    };
  }
};
