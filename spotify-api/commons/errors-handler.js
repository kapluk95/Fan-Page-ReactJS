'use strict'

const errors = {
  BAS001: 'This value is required',
  BAS002: 'This value is to long',
  BAS003: 'This value must be a valid email',
}

function getError(code) {
  return {
    code: code,
    message: errors[code]
  }
}

module.exports = {
  getError
}