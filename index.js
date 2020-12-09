/*
    Copyright (C) 2020 cuzi (cuzi@openmail.cc)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

'use strict'

function girocode (transferData) {
  const data = {
    service: 'BCD',
    version: '001',
    encoding: '2',
    transfer: 'SCT',
    name: 'Max Mustermann',
    iban: 'DE19123412341234123412',
    bic: 'DEZZZYYYXXX',
    currency: 'EUR',
    amount: '19.05',
    char: '',
    ref: '',
    reason: 'Testsubject',
    hint: ''
  }
  Object.assign(data, transferData)
  if (typeof data.amount === 'number') {
    data.amount = data.amount.toString()
  } else {
    data.amount = data.amount.toString()
    if (data.amount.indexOf('.') !== -1 && data.amount.indexOf(',') !== -1) {
      if (data.amount.indexOf(',') < data.amount.indexOf('.')) {
        data.amount = data.amount.split(',').join('')
      } else {
        data.amount = data.amount.split('.').join('').split(',').join('.')
      }
    } else if (data.amount.indexOf('.') !== -1) {
      const index = data.amount.indexOf('.')
      if (data.amount.indexOf('.', index + 1) !== -1) {
        data.amount = data.amount.split('.').join('') + '.00'
      }
    } else if (data.amount.indexOf(',') !== -1) {
      const index = data.amount.indexOf(',')
      if (data.amount.indexOf(',', index + 1) !== -1) {
        data.amount = data.amount.split(',').join('') + '.00'
      } else {
        data.amount = data.amount.split(',').join('.')
      }
    } else {
      data.amount = data.amount.split(',').join('') + '.00'
    }
  }
  return `${data.service}\n${data.version}\n${data.encoding}\n${data.transfer}\n${data.bic}\n${data.name}\n${data.iban}\n${data.currency}${data.amount}\n${data.char}\n${data.ref}\n${data.reason}\n${data.hint}`
}

function bezahlcode (transferData) {
  const data = {
    scheme: 'bank',
    authority: 'singlepaymentsepa',
    name: '',
    iban: '',
    bic: '',
    amount: '0.00',
    ref: '',
    reason: ''
  }
  Object.assign(data, transferData)
  if (typeof data.amount === 'number') {
    data.amount = data.amount.toString().replace('.', ',')
  } else {
    data.amount = data.amount.toString()
    if (data.amount.indexOf('.') !== -1 && data.amount.indexOf(',') !== -1) {
      if (data.amount.indexOf('.') < data.amount.indexOf(',')) {
        data.amount = data.amount.split('.').join('')
      } else {
        data.amount = data.amount.split(',').join('').split('.').join(',')
      }
    } else if (data.amount.indexOf('.') !== -1) {
      const index = data.amount.indexOf('.')
      if (data.amount.indexOf('.', index + 1) !== -1) {
        data.amount = data.amount.split('.').join('') + ',00'
      } else {
        data.amount = data.amount.split('.').join(',')
      }
    } else if (data.amount.indexOf(',') !== -1) {
      const index = data.amount.indexOf(',')
      if (data.amount.indexOf(',', index + 1) !== -1) {
        data.amount = data.amount.split(',').join('') + ',00'
      }
    } else {
      data.amount = data.amount.split(',').join('') + ',00'
    }
  }
  for (const key in data) {
    data[key] = encodeURIComponent(data[key])
  }
  return `${data.scheme}://${data.authority}?bic=${data.bic}&name=${data.name}&iban=${data.iban}&amount=${data.amount}&separeference=${data.ref}&reason=${data.reason}`
}

if (typeof module !== 'undefined') {
  module.exports = { girocode: girocode, bezahlcode: bezahlcode }
}
