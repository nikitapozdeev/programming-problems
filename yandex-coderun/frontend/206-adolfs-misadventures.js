const express = require('express');

const { BEEP_CODES } = require('@yandex-blitz/phone');

const createApp = ({ phone }) => {
    const app = express();
    const mutex = new Mutex();
    
    // звонит по номеру записанному в "быстром наборе" под цифрой digit
    app.get("/speeddial/:digit", async (req, res) => {
        try {
            try {
                await phone.connect();
            } catch (error) {
                phone.beep(BEEP_CODES.FATAL);
                res.sendStatus(500);
            }
            
            const data = await phone.getData();
            const speeddialDict = JSON.parse(data);
            if (!speeddialDict[req.params.digit]) {
                phone.beep(BEEP_CODES.ERROR);
                res.sendStatus(500);
            }

            await phone.dial(speeddialDict[req.params.digit]);
            res.sendStatus(200);
        } catch (error) {
            phone.beep(BEEP_CODES.ERROR);
            res.sendStatus(500);
        }
    });

    // записывает в "быстрый набор" под цифру digit номер phonenumber
    app.post("/speeddial/:digit/:phonenumber", async (req, res) => {
        const unlock = await mutex.lock();
        try {
            const data = await phone.getData();
            const speeddialDict = JSON.parse(data);
            speeddialDict[req.params.digit] = Number(req.params.phonenumber);

            await phone.setData(JSON.stringify(speeddialDict))
            phone.beep(BEEP_CODES.SUCCESS);
            res.sendStatus(200);
        } catch (error) {
            phone.beep(BEEP_CODES.ERROR);
            res.sendStatus(500);
        } finally {
            unlock();
        }
    });

    return app;
};

class Mutex {
  constructor () {
    this._locking = Promise.resolve()
    this._locked = false
  }

  isLocked () {
    return this._locked
  }

  lock () {
    this._locked = true
    let unlockNext
    const willLock = new Promise(resolve => { unlockNext = resolve })
    willLock.then(() => { this._locked = false })
    const willUnlock = this._locking.then(() => unlockNext)
    this._locking = this._locking.then(() => willLock)
    return willUnlock
  }
}

exports.createApp = createApp;