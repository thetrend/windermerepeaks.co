export const message = (message: string, code: number = 400) => {
  return {
    statusCode: code,
    body: JSON.stringify({
      message
    })
  }
};