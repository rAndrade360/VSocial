import fs from 'fs';
import crypto from 'crypto';

import venom from 'venom-bot';

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Hi' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Welcome Venom 🕷')
        .then((result) => {
          console.log('Result: ', result); // return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); // return object error
        });
    }
  });
}

export default function initVenomBot() {
  const hash = crypto.randomBytes(4).toString('hex');

  console.log(hash);

  venom
    .create(
      hash,
      (base64Qr, asciiQR, attempts, urlCode) => {
        // console.log(asciiQR); // Optional to log the QR in the terminal
        const matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        const response = {};

        if (matches.length !== 3) {
          return new Error('Invalid input string');
        }
        response.type = matches[1];
        response.data = Buffer.from(matches[2], 'base64');

        const imageBuffer = response;
        fs.writeFile(`${hash}.png`, imageBuffer.data, 'binary', function (err) {
          if (err != null) {
            console.log(err);
          }
        });
      },
      undefined,
      { logQR: false },
    )
    .then((client) => {
      start(client);
    })
    .catch((err) => {
      console.log(err);
    });
}
