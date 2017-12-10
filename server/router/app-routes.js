module.exports = app => {
  app.get('/', (req, res) => {
    return res.send('This is spotify clone');
  });
};
