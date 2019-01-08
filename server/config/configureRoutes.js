const authRouter = require('../routes/authRouter');
// const protected = require('../auth/protected');

module.exports = server => {
    server.use('/auth', authRouter);
}
