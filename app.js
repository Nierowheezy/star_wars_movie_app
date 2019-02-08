var express = require('express');
var path    = require('path');
var bodyParser = require('body-parser');
var routes =  require('./routes');

var app     = express();

/*
set view engine
*/

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// i can use the publuic  folder as the static folder where i put my css bootsrap etc locally
app.use(express.static(path.join(__dirname, 'public')));



            /*          Routes        */

            /*      Home     */
app.get('/', routes.home);
            /*    End  Home     */

            /*    movie_single     */

app.get('/star_wars_episode/:episode_number?', routes.movie_single);

          /*     End movie_single     */



  /*      any other route not found     */
app.get('*', routes.notFound);

  /*    End  any other route not found     */




app.listen(process.env.PORT || 4000);
// console.log('running on port 4000');
