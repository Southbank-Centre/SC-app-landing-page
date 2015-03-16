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
  .controller('LandingPageCtrl', function ($scope, $state, $stateParams, appConfig, landingPageFactory, utilitiesFactory) {

    var landingPageAlias = $stateParams.landingPageAlias;

    // Override landingPageId if on home state to use the homeLandingPageId
  	if ($state.current === 'app.home') {

      landingPageAlias = appConfig.homeLandingPageAlias;

  	}

    /**
     * Method for getting the homepage landing page for this festival from the API
     */
    landingPageFactory.getLandingPageSingle(landingPageAlias, function(landingPage) {

      $scope.landingPage = landingPage;

    }, utilitiesFactory.genericHTTPCallbackError);
    
  });
