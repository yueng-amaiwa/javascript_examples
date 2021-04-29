/*
 * server.js
 * Copyright (C) 2021 juanwilches <juanwilches@VPN-159-136.vpn.usf.edu>
 *
 * Distributed under terms of the MIT license.
 */

const express = require('express');
const app = express();
const port = 5000;

// Setting up the public directory
app.use(express.static('./'));

app.listen(port, () => console.log(`listening on port ${port}!`));


