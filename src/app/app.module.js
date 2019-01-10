import 'bootstrap-css-only';

import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from 'component/components';

angular.module('app', [
  (() => {
    return ComponentsModule.name;
  })(),
]).component('app', appComponent);
