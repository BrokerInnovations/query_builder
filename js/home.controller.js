(function() {
    'use strict';

    angular
        .module('query')
        .controller('HomeController', HomeController);

    //HomeController.$inject = ['$window', '$state'];

    /* @ngInject */
    function HomeController($scope, $http) {
        var vm = this;
        vm.addVenue = addVenue;
        vm.addLevel = addLevel;
        vm.addZone = addZone;
        vm.addRow = addRow;
        vm.addZoneSection = addZoneSection;
        vm.zoneSubmit = zoneSubmit;
        vm.levelSubmit = levelSubmit;
        vm.venueSubmit = venueSubmit;
        vm.zoneSectionSubmit = zoneSectionSubmit;
        vm.rowSubmit = rowSubmit;
        vm.addConfigVenue = addConfigVenue;
        vm.venueConfigSubmit = venueConfigSubmit;
        vm.venueDisabled = false;
        vm.venueConfigDisabled = false;
        vm.levelDisabled = false;
        vm.rowDisabled = false;
        vm.zoneDisabled = false;
        vm.zoneSectionDisabled = false;
        vm.zones = [];
        vm.venues = [];
        vm.venueConfig = [];
        vm.levels = [];
        vm.rows = [];
        vm.sections = [];

        function zoneSubmit() {
            vm.zoneDisabled = true;
            console.log(vm.zones);
            $http.post('php/zone.php',vm.zones).then(function(res){
                console.log(res);
            }).catch(function(err) {
                console.error(err);
            });
        }

        function zoneSectionSubmit() {
            vm.zoneSectionDisabled = true;
            console.log(vm.sections);
            $http.post('php/zone_section.php',vm.sections).then(function(res){
                console.log(res.data);
            }).catch(function(err) {
                console.error(err);
            });
        }

        function rowSubmit() {
            vm.rowDisabled = true;
            console.log(vm.rows);
            $http.post('php/row.php',vm.rows).then(function(res){
                console.log(res.data);
            }).catch(function(err) {
                console.error(err);
            });
        }

        function levelSubmit() {
            vm.levelDisabled = true;
            console.log(vm.levels);
            $http.post('php/level.php',vm.levels).then(function(res){
                console.log(res.data);
            }).catch(function(err) {
                console.error(err);
            });
        }

        function venueSubmit() {
            vm.venueDisabled = true;
            console.log(vm.venues);
            $http.post('php/venue.php',vm.venues).then(function(res){
                console.log(res.data);
            }).catch(function(err) {
                console.error(err);
            });
        }

        function venueConfigSubmit() {
            vm.venueConfigDisabled = true;
            console.log(vm.venueConfig);
            $http.post('php/venue_config.php',vm.venueConfig).then(function(res){
                console.log(res.data);
            }).catch(function(err) {
                console.error(err);
            });
        }

        function addZone() {
            vm.zones.push({
                zone_descr: "",
                venue_config_id: ""
            });
        }

        function addLevel() {
            vm.levels.push({
                level_descr: "",
                venue_config_id: ""
            });
        }

        function addRow() {
            vm.rows.push({
                row_descr: "",
                row_seq_num: "",
                level_id: ""
            });
        }

        function addZoneSection(){
            vm.sections.push({
                section_descr: "",
                zone_descr: "",
                level_descr: "",
                zone_plus:""
            });
        }

        function addVenue() {
            vm.venueDisabled = false;
            vm.venues.push({
                venue_id: "",
                venue_descr: ""
            });
        }

        function addConfigVenue() {
            vm.venueConfig.push({
                config_descr: "",
                venue_id:""
            });
        }
    }
})();
