define(["app"],function(e){e.factory("templateService",["$q","$http",function(e,t){return tpl=function(n){var r;return r=e.defer(),t.get(config.url.api+"/v1/templates?$filter=type eq 0 and currentAdd eq '"+n+"'",void 0).success(function(e){return r.resolve(e.value)}).error(function(e){return console.log(e),r.reject(void 0)}),r.promise},{tpl:tpl}}])});