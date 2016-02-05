angular.module("app")
    .controller("bestController", bestController());

function bestController() {
    var self = this;

    // CONTROLLER PUBLIC PROPERTIES
    self.propertie1 = '';
    self.propertie2 = [];

    //CONTROLLER PRIVATE PROPERTIES
    var privatePropertie1 = '',
        privatePropertie2 = [];

    // CONTROLLER PUBLIC METHODS
    self.publicMethod = publicMethod;

    /**
     *
     * @returns {boolean}
     */
    function publicMethod() {
        return _privateMethod(true);
    }

    function _privateMethod(param) {
        return param
    }
}