'use strict';

/**
 * @ngdoc controller
 * @name SC-app-landing-page.controller:LandingPageCtrl
 * @controller
 *
 * @description
 * Defines the state and behaviour of the $scope for the landingPageView state
 */
angular.module('SC-app-landing-page')
  .controller('LandingPageCtrl', function ($scope, landingPageFactory, utilitiesFactory) {

    /**
     * Method for getting the homepage landing page for this festival from the API
     */
    landingPageFactory.getLandingPageSingle(function(landingPage) {

      $scope.landingPage = landingPage;

    }, utilitiesFactory.genericHTTPCallbackError);
    
  });
