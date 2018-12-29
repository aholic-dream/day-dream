exports.responseDecorator = function ({code = 0, message = '', data = null, err = null}) {
  return {
    code: code,
    message: message,
    data: data,
    err: err
  }
}
