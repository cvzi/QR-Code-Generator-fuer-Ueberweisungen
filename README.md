# Quick Response Code Generator für Überweisungen
Released under GPLv3

**This program is untested and probably faulty. For testing purposes only. Do not use this for actual bank transfers!**

[Live preview](http://cvzi.github.io/QR-Code-Generator-fuer-Ueberweisungen/)

The guidelines for the images can be found here [Quick Response Code: Guidelines to Enable Data Capture for the Initiation of a SEPA Credit Transfer ](http://www.europeanpaymentscouncil.eu/index.cfm/knowledge-bank/epc-documents/quick-response-code-guidelines-to-enable-data-capture-for-the-initiation-of-a-sepa-credit-transfer/)
and here [bezahlcode.de - Technische Dokumentation „BezahlCode“](http://www.bezahlcode.de/wp-content/uploads/BezahlCode_TechDok.pdf)


This program uses version 1.4 of the Quick Response Code guidelines, but it's also compatible with version 2.0 (if you change the version identifier in the source)
and version „05. Dezember 2013“ of BezahlCode.

**At the moment, most phone apps support neither version fully.** A list of supported applications can be found [here](http://www.bezahlcode.de/anwendungen/).

The images are created with the [Javascript QR Encoder](https://code.google.com/archive/p/jsqrencode/)
