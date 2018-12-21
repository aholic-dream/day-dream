exports.responseDecorator = function ({code = 2000, message = '', data = null, err = null}) {
  return {
    code: code,
    message: message,
    data: data,
    err: err
  }
}
