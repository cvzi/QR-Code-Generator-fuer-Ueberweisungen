# Quick Response Code Generator für Überweisungen
Released under GPLv3

```
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
```

## Install
```
$ npm install --save iban-qr-code
```

## Examples
```
const { girocode, bezahlcode } = require('./index.js')

girocode({
  name: '',
  iban: '',
  bic: '',
  currency: 'EUR',
  amount: '0.00',
  char: '',  // Purpose of the Credit Transfer (AT-44)
  ref: '',  // ISO 11649 RF Creditor Reference may be used here
  reason: '',
  hint: ''  // note to user,
  version: '001'  // Version of Quick Response Code 001 or 002
})
```

[Live preview](http://cvzi.github.io/QR-Code-Generator-fuer-Ueberweisungen/)
The images are created with [qrious](https://github.com/neocotic/qrious)

The guidelines for the images can be found here [Quick Response Code: Guidelines to Enable Data Capture for the Initiation of a SEPA Credit Transfer ](http://www.europeanpaymentscouncil.eu/index.cfm/knowledge-bank/epc-documents/quick-response-code-guidelines-to-enable-data-capture-for-the-initiation-of-a-sepa-credit-transfer/)
and here [bezahlcode.de - Technische Dokumentation „BezahlCode“](https://web.archive.org/web/20160528013657/http://www.bezahlcode.de/wp-content/uploads/BezahlCode_TechDok.pdf)

This program uses version 1.4 of the Quick Response Code guidelines, but it's also compatible with version 2.0, and version „05. Dezember 2013“ of BezahlCode.

**At the moment, most phone apps support neither version fully.** A list of supported applications can be found [here](http://www.bezahlcode.de/anwendungen/).
