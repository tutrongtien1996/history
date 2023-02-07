
class HomeControllerClass {
    home (request, response){
        response.render('home');
    }
}
const HomeController = new HomeControllerClass();

module.exports = {HomeController}