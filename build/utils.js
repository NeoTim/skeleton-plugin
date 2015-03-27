
var utils = module.exports
    utils.use = use;


    function use(t,a){
        return function(){
            return t(a);
        }
    }
