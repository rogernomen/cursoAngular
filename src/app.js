angular.module("app", []);

angular.module("app")
    .controller("appController", function () {
        var self = this;

        // THIS IS ARE MODELS INITED OUTSIDE INIT
        self.firstName = "John";
        self.lastName = "Doe";

        self.calculateNumber = calculateNumber;

        /**
         * SCOPE: SELF IS FROM OUTSIDE FUNCTION
         */
        function init() {
            self.randomNumber = 0;
            // WHAT IF this.randomNumber
        }

        /**
         *
         */
        function calculateNumber() {
            self.randomNumber = Math.floor((Math.random() * 10) + 1);
        }
        
        // INIT EXECUTION
        init();
    });
