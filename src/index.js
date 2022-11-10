const express = require('express');
const path = require('path');
const {execSync} = require("child_process");
const output = require('./output');

const app = express();
const port = 6969
const ip = "192.168.8.108"

// ctl/dispatch?dispatcher=<dispatcher>&arg=<arg>
app.get('/ctl/dispatch', (req, res) => {

    dispatcher = req.query.dispatcher;
    arg = req.query.arg;

    execSync(`hyprctl dispatch ${dispatcher} ${arg}`);
    output.log(`received » dispatcher: ${dispatcher} <~ ${arg}`);
    output.send(res, "ok"); //lol

})

// ctl/keyword?keyword=<keyword>&arg=<arg>
app.get('/ctl/keyword', (req, res) => {

    keyword = req.query.keyword;
    arg = req.query.arg;

    execSync(`hyprctl keyword ${keyword} ${arg}`);
    output.log(`received » keyword: ${keyword} <~ ${arg}`);
    output.send(res, "ok");

})

// ctl/reload
app.get('/ctl/reload', (req, res) => {

    execSync(`hyprctl reload`);
    output.log(`received » reload: ${keyword} <~ ${arg}`);
    output.send(res, "ok");

})

// ctl/reload
app.get('/ctl/reload', (req, res) => {

    execSync(`hyprctl reload`);
    output.log(`received » reload`);
    output.send(res, "ok");

})

// ctl/kill
app.get('/ctl/kill', (req, res) => {

    execSync(`hyprctl kill`);
    output.log(`received » kill`);
    output.send(res, "ok");

})

// ctl/setcursor?theme=<theme>&arg=<arg>
app.get('/ctl/setcursor', (req, res) => {

    theme = req.query.theme;
    size = req.query.size;

    execSync(`hyprctl setcursor ${theme} ${size}`);
    output.log(`received » setcursor: ${theme} <~ ${size}`);
    output.send(res, "ok");

})

// ctl/info?arg=<arg>

// version - prints the hyprland version, meaning flags, commit and branch of build.
// monitors - lists all the outputs with their properties
// workspaces - lists all workspaces with their properties
// clients - lists all windows with their properties
// devices - lists all connected keyboards and mice
// activewindow - gets the active window name
// layers - lists all the layers
// splash - prints the current random splash
// getoption [option] - gets the config option status (values)

app.get('/ctl/info', (req, res) => {

    arg = req.query.arg;

    out = execSync(`hyprctl ${arg}`);
    output.log(`received » info <~ ${arg}`);
    output.send(res, out.toString());

})

app.listen(port, ip, () => {output.log(`listening on port ${port}`)})