
module.exports = (app) =>{
    require('./course')(app);
    require('./login')(app);
     require('./message')(app);
}