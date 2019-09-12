const express = require('express');

module.exports = () => {
    const app = express();
    const PORT = process.env.PORT || 8000;
    app.use(express.json());
    app.listen(PORT, console.log(`Connection established on port ${PORT}`));

    return app;
};


