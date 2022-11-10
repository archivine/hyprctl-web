exports.log = (string) => {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
    console.log(`\x1b[32m${time} » \x1b[33mhyprctl-web\x1b[0m | ${string}`);
}

exports.send = (res, string) => {
    res.send(`
    {
        "output" : "${string}"
    }
    `);
}