define([],function(){return function(e){return definition={resolver:["$q","$rootScope",function(t,n){var r=t.defer();return require(e,function(){n.$apply(function(){r.resolve()})}),r.promise}]},definition}});