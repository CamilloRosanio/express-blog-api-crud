function checkTime(req, res, next) {
    const now = new Date();
    const nowText = now.toLocaleString();
    console.log('MIDDLEWARE globale "checkTime" eseguito il ' + nowText);

    // il NEXT letto da EXPRESS permette di passare alla prossima funzione una volta eseguito il MIDDLEWARE
    next();
};





// EXPORT
module.exports = checkTime;