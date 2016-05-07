!function(){"use strict";function t(t){t.theme("default").primaryPalette("blue",{"default":"500"}).accentPalette("red").warnPalette("deep-orange").backgroundPalette("grey",{"default":"100"})}function e(t,e){t.useSanitizeValueStrategy(null),t.useLoader("$translatePartialLoader",{urlTemplate:"../JSON/{part}-{lang}.json"}),e.addPart("locale"),e.addPart("navigation"),e.addPart("tabs"),e.addPart("products"),e.addPart("about"),t.preferredLanguage("ru"),t.fallbackLanguage("en")}t.$inject=["$mdThemingProvider"],e.$inject=["$translateProvider","$translatePartialLoaderProvider"],angular.module("webApp",["ngMaterial","duScroll","ngMessages","ngclipboard","pascalprecht.translate"]).config(t).config(e)}(),function(){"use strict";function t(t,e,n){var a=this;a.name=[],a.pathToJson="../JSON/about-en.json",n.all(a.pathToJson).then(function(t){a.namespace=Object.keys(t.data),a.count=n.setObjectCount(Object.keys(t.data[a.namespace]).length),console.log("vm.namespace = "+a.namespace);for(var e in a.namespace)a.namespace.hasOwnProperty(e)&&(a.name=Object.keys(t.data[a.namespace][e]),console.log(a.name))}),a.getContent=function(t,e){return a.namespace+"."+t+"."+a.name[e]}}angular.module("webApp").controller("aboutCardController",t),t.$inject=["$translatePartialLoader","$translate","JsonData"]}(),function(){"use strict";function t(t,e,n){var a=this;a.changeLanguage=function(t){e.use(t)},a.openLeftMenu=function(){t("left").toggle()};var o;a.openMenu=function(t,e){o=e,t(e)}}angular.module("webApp").controller("mainController",t),t.$inject=["$mdSidenav","$translate","JsonData"]}(),function(){"use strict";function t(t,e,n){var a=this;a.name=[],a.pathToJson="../JSON/navigation-en.json",n.all(a.pathToJson).then(function(t){a.namespace=Object.keys(t.data),a.count=n.setObjectCount(Object.keys(t.data[a.namespace]).length),console.log("vm.namespace = "+a.namespace);for(var e in a.namespace)a.namespace.hasOwnProperty(e)&&(a.name=Object.keys(t.data[a.namespace][e]),console.log(a.name))}),a.getContent=function(t,e){return a.namespace+"."+t+"."+a.name[e]}}angular.module("webApp").controller("navigationController",t),t.$inject=["$translatePartialLoader","$translate","JsonData"]}(),function(){"use strict";function t(e,n,a,o,r,l){var c=this;c.pathToJson=["../JSON/tabs-en.json","../JSON/products-en.json","../JSON/products-ru.json"],c.showMore=function(e){o.show({controller:t,controllerAs:"tabsCtrl",templateUrl:"../TEMPLATES/products.html",parent:angular.element(document.body),targetEvent:e,clickOutsideToClose:!0,fullscreen:"true"}),l.$watch(function(){return r("sm")||r("xs")},function(t){c.customFullscreen=t===!0})},c.showDescription=function(){c.option?c.option=!1:c.option=!0},c.cancel=function(){o.cancel()},c.data=[],a.all(c.pathToJson[0]).then(function(t){c.namespace=Object.keys(t.data),c.count=a.setObjectCount(Object.keys(t.data[c.namespace]).length),console.log("vm.namespace from tabs = "+c.namespace);for(var e in c.namespace)c.namespace.hasOwnProperty(e)&&(c.name=Object.keys(t.data[c.namespace][e]),console.log(c.name))}),c.getContent=function(t,e){return c.namespace+"."+t+"."+c.name[e]},c.products=[],"ru"===n.use()?a.all(c.pathToJson[2]).then(function(t){c.products=t.data.product}):a.all(c.pathToJson[1]).then(function(t){c.products=t.data.product})}angular.module("webApp").controller("tabsController",t),t.$inject=["$translatePartialLoader","$translate","JsonData","$mdDialog","$mdMedia","$scope"]}(),function(){"use strict";function t(){return{restrict:"EA",priority:1001,templateUrl:"../TEMPLATES/about.html",controller:"aboutCardController",controllerAs:"aboutCardCtrl"}}angular.module("webApp").directive("aboutCard",t)}(),function(){"use strict";function t(){return{restrict:"EA",priority:1001,templateUrl:"../TEMPLATES/navigation.html",controller:"navigationController",controllerAs:"navCtrl"}}function e(){return{restrict:"EA",priority:1001,templateUrl:"../TEMPLATES/navigation-sidenav.html",controller:"navigationController",controllerAs:"navCtrl"}}angular.module("webApp").directive("menuBar",t).directive("menuBarSide",e)}(),function(){"use strict";function t(){return function(t,e,n){e.bind("keydown keypress",function(a){13===a.which&&(a.preventDefault(),e.blur(),t.$apply(n.ngBlur))})}}angular.module("webApp").directive("blurOnEnter",t)}(),function(){"use strict";function t(){return{restrict:"EA",priority:1001,templateUrl:"../TEMPLATES/tabs.html",controller:"tabsController",controllerAs:"tabsCtrl"}}angular.module("webApp").directive("boneTab",t)}(),function(){"use strict";function t(t){return{all:function(e){return t({method:"GET",url:e})},setObjectCount:function(t){return new Array(t)}}}angular.module("webApp").factory("JsonData",t),t.$inject=["$http"]}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIndlYmFwcC5qcyIsIkNvbnRyb2xsZXJzL2Fib3V0LmpzIiwiQ29udHJvbGxlcnMvYXBwLmpzIiwiQ29udHJvbGxlcnMvbmF2aWdhdGlvbi5qcyIsIkNvbnRyb2xsZXJzL3RhYnMuanMiLCJEaXJlY3RpdmVzL2Fib3V0LmpzIiwiRGlyZWN0aXZlcy9uYXZpZ2F0aW9uLmpzIiwiRGlyZWN0aXZlcy9yZW1vdmVGb2N1cy5qcyIsIkRpcmVjdGl2ZXMvdGFicy5qcyIsIlNlcnZpY2VzL2pzb24uanMiXSwibmFtZXMiOlsidGhlbWVDb25maWd1cmF0aW9uIiwiJG1kVGhlbWluZ1Byb3ZpZGVyIiwidGhlbWUiLCJwcmltYXJ5UGFsZXR0ZSIsImRlZmF1bHQiLCJhY2NlbnRQYWxldHRlIiwid2FyblBhbGV0dGUiLCJiYWNrZ3JvdW5kUGFsZXR0ZSIsInRyYW5zbGF0ZUNvbmZpZ3VyYXRpb24iLCIkdHJhbnNsYXRlUHJvdmlkZXIiLCIkdHJhbnNsYXRlUGFydGlhbExvYWRlclByb3ZpZGVyIiwidXNlU2FuaXRpemVWYWx1ZVN0cmF0ZWd5IiwidXNlTG9hZGVyIiwidXJsVGVtcGxhdGUiLCJhZGRQYXJ0IiwicHJlZmVycmVkTGFuZ3VhZ2UiLCJmYWxsYmFja0xhbmd1YWdlIiwiJGluamVjdCIsImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25maWciLCJhYm91dENhcmRDb250cm9sbGVyIiwiJHRyYW5zbGF0ZVBhcnRpYWxMb2FkZXIiLCIkdHJhbnNsYXRlIiwiSnNvbkRhdGEiLCJ2bSIsInRoaXMiLCJuYW1lIiwicGF0aFRvSnNvbiIsImFsbCIsInRoZW4iLCJyZXNwb25zZSIsIm5hbWVzcGFjZSIsIk9iamVjdCIsImtleXMiLCJkYXRhIiwiY291bnQiLCJzZXRPYmplY3RDb3VudCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiZ2V0Q29udGVudCIsImluZGV4Iiwia2V5VmFsIiwiY29udHJvbGxlciIsIm1haW5Db250cm9sbGVyIiwiJG1kU2lkZW5hdiIsImNoYW5nZUxhbmd1YWdlIiwia2V5IiwidXNlIiwib3BlbkxlZnRNZW51IiwidG9nZ2xlIiwib3JpZ2luYXRvckV2Iiwib3Blbk1lbnUiLCIkbWRPcGVuTWVudSIsImV2IiwibmF2aWdhdGlvbkNvbnRyb2xsZXIiLCJ0YWJzQ29udHJvbGxlciIsIiRtZERpYWxvZyIsIiRtZE1lZGlhIiwiJHNjb3BlIiwic2hvd01vcmUiLCJzaG93IiwiY29udHJvbGxlckFzIiwidGVtcGxhdGVVcmwiLCJwYXJlbnQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJib2R5IiwidGFyZ2V0RXZlbnQiLCJjbGlja091dHNpZGVUb0Nsb3NlIiwiZnVsbHNjcmVlbiIsIiR3YXRjaCIsIndhbnRzRnVsbFNjcmVlbiIsImN1c3RvbUZ1bGxzY3JlZW4iLCJzaG93RGVzY3JpcHRpb24iLCJvcHRpb24iLCJjYW5jZWwiLCJwcm9kdWN0cyIsInByb2R1Y3QiLCJhYm91dENhcmQiLCJyZXN0cmljdCIsInByaW9yaXR5IiwiZGlyZWN0aXZlIiwibWVudUJhciIsIm1lbnVCYXJTaWRlIiwiYmx1ck9uRW50ZXIiLCJzY29wZSIsImVsZW0iLCJhdHRycyIsImJpbmQiLCJlIiwid2hpY2giLCJwcmV2ZW50RGVmYXVsdCIsImJsdXIiLCIkYXBwbHkiLCJuZ0JsdXIiLCJib25lVGFiIiwiSnNvbkRhdGFGYWN0b3J5IiwiJGh0dHAiLCJwYXRoIiwibWV0aG9kIiwidXJsIiwibiIsIkFycmF5IiwiZmFjdG9yeSJdLCJtYXBwaW5ncyI6IkNBQUEsV0FDQSxZQU9BLFNBQUFBLEdBQUFDLEdBQ0FBLEVBQUFDLE1BQUEsV0FDQUMsZUFBQSxRQUNBQyxVQUFBLFFBRUFDLGNBQUEsT0FDQUMsWUFBQSxlQUNBQyxrQkFBQSxRQUNBSCxVQUFBLFFBR0EsUUFBQUksR0FBQUMsRUFBQUMsR0FFQUQsRUFBQUUseUJBQUEsTUFFQUYsRUFBQUcsVUFBQSwyQkFDQUMsWUFBQSwrQkFHQUgsRUFBQUksUUFBQSxVQUNBSixF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QSxTQUFBaUUsS0FDQSxPQUNBQyxTQUFBLEtBQ0FDLFNBQUEsS0FDQWxCLFlBQUEsMEJBQ0FwQixXQUFBLHNCQUNBbUIsYUFBQSxpQkFWQS9DLFFBQ0FDLE9BQUEsVUFDQWtFLFVBQUEsWUFBQUgsTUNMQSxXQUNBLFlBT0EsU0FBQUksS0FDQSxPQUNBSCxTQUFBLEtBQ0FDLFNBQUEsS0FDQWxCLFlBQUEsK0JBQ0FwQixXQUFBLHVCQUNBbUIsYUFBQSxXQUdBLFFBQUFzQixLQUNBLE9BQ0FKLFNBQUEsS0FDQUMsU0FBQSxLQUNBbEIsWUFBQSx1Q0FDQXBCLFdBQUEsdUJBQ0FtQixhQUFBLFdBcEJBL0MsUUFDQUMsT0FBQSxVQUNBa0UsVUFBQSxVQUFBQyxHQUNBRCxVQUFBLGNBQUFFLE1DTkEsV0FDQSxZQU1BLFNBQUFDLEtBQ0EsTUFBQSxVQUFBQyxFQUFBQyxFQUFBQyxHQUNBRCxFQUFBRSxLQUFBLG1CQUFBLFNBQUFDLEdBQ0EsS0FBQUEsRUFBQUMsUUFDQUQsRUFBQUUsaUJBQ0FMLEVBQUFNLE9BQ0FQLEVBQUFRLE9BQUFOLEVBQUFPLFlBVkFoRixRQUNBQyxPQUFBLFVBQ0FrRSxVQUFBLGNBQUFHLE1DTEEsV0FDQSxZQU1BLFNBQUFXLEtBQ0EsT0FDQWhCLFNBQUEsS0FDQUMsU0FBQSxLQUNBbEIsWUFBQSx5QkFDQXBCLFdBQUEsaUJBQ0FtQixhQUFBLFlBVkEvQyxRQUNBQyxPQUFBLFVBQ0FrRSxVQUFBLFVBQUFjLE1DTEEsV0FDQSxZQVFBLFNBQUFDLEdBQUFDLEdBQ0EsT0FDQXhFLElBQUEsU0FBQXlFLEdBQ0EsTUFBQUQsSUFDQUUsT0FBQSxNQUNBQyxJQUFBRixLQUdBakUsZUFBQSxTQUFBb0UsR0FDQSxNQUFBLElBQUFDLE9BQUFELEtBZkF2RixRQUNBQyxPQUFBLFVBQ0F3RixRQUFBLFdBQUFQLEdBRUFBLEVBQUFuRixTQUFBIiwiZmlsZSI6IndlYmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3dlYkFwcCcsIFsnbmdNYXRlcmlhbCcsICdkdVNjcm9sbCcsICduZ01lc3NhZ2VzJywgJ25nY2xpcGJvYXJkJywgJ3Bhc2NhbHByZWNodC50cmFuc2xhdGUnXSlcclxuICAgIC5jb25maWcodGhlbWVDb25maWd1cmF0aW9uKVxyXG4gICAgLmNvbmZpZyh0cmFuc2xhdGVDb25maWd1cmF0aW9uKTtcclxuXHJcbiAgZnVuY3Rpb24gdGhlbWVDb25maWd1cmF0aW9uKCRtZFRoZW1pbmdQcm92aWRlcikge1xyXG4gICAgJG1kVGhlbWluZ1Byb3ZpZGVyLnRoZW1lKCdkZWZhdWx0JylcclxuICAgICAgLnByaW1hcnlQYWxldHRlKCdibHVlJywge1xyXG4gICAgICAgICdkZWZhdWx0JzogJzUwMCdcclxuICAgICAgfSlcclxuICAgICAgLmFjY2VudFBhbGV0dGUoJ3JlZCcpXHJcbiAgICAgIC53YXJuUGFsZXR0ZSgnZGVlcC1vcmFuZ2UnKVxyXG4gICAgICAuYmFja2dyb3VuZFBhbGV0dGUoJ2dyZXknLCB7XHJcbiAgICAgICAgJ2RlZmF1bHQnOiAnMTAwJ1xyXG4gICAgICB9KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gdHJhbnNsYXRlQ29uZmlndXJhdGlvbigkdHJhbnNsYXRlUHJvdmlkZXIsICR0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyUHJvdmlkZXIpIHtcclxuXHJcbiAgICAkdHJhbnNsYXRlUHJvdmlkZXIudXNlU2FuaXRpemVWYWx1ZVN0cmF0ZWd5KG51bGwpO1xyXG5cclxuICAgICR0cmFuc2xhdGVQcm92aWRlci51c2VMb2FkZXIoJyR0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyJywge1xyXG4gICAgICB1cmxUZW1wbGF0ZTogJy4uL0pTT04ve3BhcnR9LXtsYW5nfS5qc29uJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHRyYW5zbGF0ZVBhcnRpYWxMb2FkZXJQcm92aWRlci5hZGRQYXJ0KCdsb2NhbGUnKTtcclxuICAgICR0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyUHJvdmlkZXIuYWRkUGFydCgnbmF2aWdhdGlvbicpO1xyXG4gICAgJHRyYW5zbGF0ZVBhcnRpYWxMb2FkZXJQcm92aWRlci5hZGRQYXJ0KCd0YWJzJyk7XHJcbiAgICAkdHJhbnNsYXRlUGFydGlhbExvYWRlclByb3ZpZGVyLmFkZFBhcnQoJ3Byb2R1Y3RzJyk7XHJcbiAgICAkdHJhbnNsYXRlUGFydGlhbExvYWRlclByb3ZpZGVyLmFkZFBhcnQoJ2Fib3V0Jyk7XHJcblxyXG4gICAgJHRyYW5zbGF0ZVByb3ZpZGVyLnByZWZlcnJlZExhbmd1YWdlKCdydScpO1xyXG4gICAgJHRyYW5zbGF0ZVByb3ZpZGVyLmZhbGxiYWNrTGFuZ3VhZ2UoJ2VuJyk7XHJcbiAgfVxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICB0aGVtZUNvbmZpZ3VyYXRpb24uJGluamVjdCA9IFtcIiRtZFRoZW1pbmdQcm92aWRlclwiXTtcclxuICB0cmFuc2xhdGVDb25maWd1cmF0aW9uLiRpbmplY3QgPSBbXCIkdHJhbnNsYXRlUHJvdmlkZXJcIiwgXCIkdHJhbnNsYXRlUGFydGlhbExvYWRlclByb3ZpZGVyXCJdO1xyXG4gIGFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3dlYkFwcCcsIFsnbmdNYXRlcmlhbCcsICdkdVNjcm9sbCcsICduZ01lc3NhZ2VzJywgJ25nY2xpcGJvYXJkJywgJ3Bhc2NhbHByZWNodC50cmFuc2xhdGUnXSlcclxuICAgIC5jb25maWcodGhlbWVDb25maWd1cmF0aW9uKVxyXG4gICAgLmNvbmZpZyh0cmFuc2xhdGVDb25maWd1cmF0aW9uKTtcclxuXHJcbiAgZnVuY3Rpb24gdGhlbWVDb25maWd1cmF0aW9uKCRtZFRoZW1pbmdQcm92aWRlcikge1xyXG4gICAgJG1kVGhlbWluZ1Byb3ZpZGVyLnRoZW1lKCdkZWZhdWx0JylcclxuICAgICAgLnByaW1hcnlQYWxldHRlKCdibHVlJywge1xyXG4gICAgICAgICdkZWZhdWx0JzogJzUwMCdcclxuICAgICAgfSlcclxuICAgICAgLmFjY2VudFBhbGV0dGUoJ3JlZCcpXHJcbiAgICAgIC53YXJuUGFsZXR0ZSgnZGVlcC1vcmFuZ2UnKVxyXG4gICAgICAuYmFja2dyb3VuZFBhbGV0dGUoJ2dyZXknLCB7XHJcbiAgICAgICAgJ2RlZmF1bHQnOiAnMTAwJ1xyXG4gICAgICB9KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gdHJhbnNsYXRlQ29uZmlndXJhdGlvbigkdHJhbnNsYXRlUHJvdmlkZXIsICR0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyUHJvdmlkZXIpIHtcclxuXHJcbiAgICAkdHJhbnNsYXRlUHJvdmlkZXIudXNlU2FuaXRpemVWYWx1ZVN0cmF0ZWd5KG51bGwpO1xyXG5cclxuICAgICR0cmFuc2xhdGVQcm92aWRlci51c2VMb2FkZXIoJyR0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyJywge1xyXG4gICAgICB1cmxUZW1wbGF0ZTogJy4uL0pTT04ve3BhcnR9LXtsYW5nfS5qc29uJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHRyYW5zbGF0ZVBhcnRpYWxMb2FkZXJQcm92aWRlci5hZGRQYXJ0KCdsb2NhbGUnKTtcclxuICAgICR0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyUHJvdmlkZXIuYWRkUGFydCgnbmF2aWdhdGlvbicpO1xyXG4gICAgJHRyYW5zbGF0ZVBhcnRpYWxMb2FkZXJQcm92aWRlci5hZGRQYXJ0KCd0YWJzJyk7XHJcbiAgICAkdHJhbnNsYXRlUGFydGlhbExvYWRlclByb3ZpZGVyLmFkZFBhcnQoJ3Byb2R1Y3RzJyk7XHJcbiAgICAkdHJhbnNsYXRlUGFydGlhbExvYWRlclByb3ZpZGVyLmFkZFBhcnQoJ2Fib3V0Jyk7XHJcblxyXG4gICAgJHRyYW5zbGF0ZVByb3ZpZGVyLnByZWZlcnJlZExhbmd1YWdlKCdydScpO1xyXG4gICAgJHRyYW5zbGF0ZVByb3ZpZGVyLmZhbGxiYWNrTGFuZ3VhZ2UoJ2VuJyk7XHJcbiAgfVxyXG59KSgpO1xyXG5cbihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3dlYkFwcCcpXHJcbiAgICAuY29udHJvbGxlcignYWJvdXRDYXJkQ29udHJvbGxlcicsIGFib3V0Q2FyZENvbnRyb2xsZXIpO1xyXG5cclxuICBhYm91dENhcmRDb250cm9sbGVyLiRpbmplY3QgPSBbJyR0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyJywgJyR0cmFuc2xhdGUnLCAnSnNvbkRhdGEnXTtcclxuXHJcbiAgZnVuY3Rpb24gYWJvdXRDYXJkQ29udHJvbGxlcigkdHJhbnNsYXRlUGFydGlhbExvYWRlciwgJHRyYW5zbGF0ZSwgSnNvbkRhdGEpIHtcclxuICAgIC8qanNoaW50IHZhbGlkdGhpczogdHJ1ZSAqL1xyXG4gICAgdmFyIHZtID0gdGhpcztcclxuXHJcbiAgICB2bS5uYW1lID0gW107XHJcblxyXG4gICAgdm0ucGF0aFRvSnNvbiA9ICcuLi9KU09OL2Fib3V0LWVuLmpzb24nO1xyXG5cclxuICAgIEpzb25EYXRhLmFsbCh2bS5wYXRoVG9Kc29uKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgIHZtLm5hbWVzcGFjZSA9IE9iamVjdC5rZXlzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB2bS5jb3VudCA9IEpzb25EYXRhLnNldE9iamVjdENvdW50KE9iamVjdC5rZXlzKHJlc3BvbnNlLmRhdGFbdm0ubmFtZXNwYWNlXSkubGVuZ3RoKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCd2bS5uYW1lc3BhY2UgPSAnICsgdm0ubmFtZXNwYWNlKTtcclxuXHJcbiAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIHZtLm5hbWVzcGFjZSkge1xyXG4gICAgICAgIGlmICh2bS5uYW1lc3BhY2UuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICB2bS5uYW1lID0gT2JqZWN0LmtleXMocmVzcG9uc2UuZGF0YVt2bS5uYW1lc3BhY2VdW3Byb3BlcnR5XSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh2bS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZtLmdldENvbnRlbnQgPSBmdW5jdGlvbihpbmRleCwga2V5VmFsKSB7XHJcbiAgICAgIHJldHVybiB2bS5uYW1lc3BhY2UgKyAnLicgKyBpbmRleCArICcuJyArIHZtLm5hbWVba2V5VmFsXTtcclxuICAgIH07XHJcbiAgfVxyXG59KSgpO1xyXG5cbihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3dlYkFwcCcpXHJcbiAgICAuY29udHJvbGxlcignbWFpbkNvbnRyb2xsZXInLCBtYWluQ29udHJvbGxlcik7XHJcblxyXG4gIG1haW5Db250cm9sbGVyLiRpbmplY3QgPSBbJyRtZFNpZGVuYXYnLCAnJHRyYW5zbGF0ZScsICdKc29uRGF0YSddO1xyXG5cclxuICBmdW5jdGlvbiBtYWluQ29udHJvbGxlcigkbWRTaWRlbmF2LCAkdHJhbnNsYXRlLCBKc29uRGF0YSkge1xyXG4gICAgLypqc2hpbnQgdmFsaWR0aGlzOiB0cnVlICovXHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG5cclxuICAgIHZtLmNoYW5nZUxhbmd1YWdlID0gZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICR0cmFuc2xhdGUudXNlKGtleSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZtLm9wZW5MZWZ0TWVudSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAkbWRTaWRlbmF2KCdsZWZ0JykudG9nZ2xlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvcmlnaW5hdG9yRXY7XHJcblxyXG4gICAgdm0ub3Blbk1lbnUgPSBmdW5jdGlvbigkbWRPcGVuTWVudSwgZXYpIHtcclxuICAgICAgb3JpZ2luYXRvckV2ID0gZXY7XHJcbiAgICAgICRtZE9wZW5NZW51KGV2KTtcclxuICAgIH07XHJcbiAgfVxyXG59KSgpO1xyXG5cbihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCd3ZWJBcHAnKVxuICAgIC5jb250cm9sbGVyKCduYXZpZ2F0aW9uQ29udHJvbGxlcicsIG5hdmlnYXRpb25Db250cm9sbGVyKTtcblxuICBuYXZpZ2F0aW9uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckdHJhbnNsYXRlUGFydGlhbExvYWRlcicsICckdHJhbnNsYXRlJywgJ0pzb25EYXRhJ107XG5cbiAgZnVuY3Rpb24gbmF2aWdhdGlvbkNvbnRyb2xsZXIoJHRyYW5zbGF0ZVBhcnRpYWxMb2FkZXIsICR0cmFuc2xhdGUsIEpzb25EYXRhKSB7XG4gICAgLypqc2hpbnQgdmFsaWR0aGlzOiB0cnVlICovXG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIHZtLm5hbWUgPSBbXTtcblxuICAgIHZtLnBhdGhUb0pzb24gPSAnLi4vSlNPTi9uYXZpZ2F0aW9uLWVuLmpzb24nO1xuXG4gICAgSnNvbkRhdGEuYWxsKHZtLnBhdGhUb0pzb24pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIHZtLm5hbWVzcGFjZSA9IE9iamVjdC5rZXlzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgdm0uY291bnQgPSBKc29uRGF0YS5zZXRPYmplY3RDb3VudChPYmplY3Qua2V5cyhyZXNwb25zZS5kYXRhW3ZtLm5hbWVzcGFjZV0pLmxlbmd0aCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCd2bS5uYW1lc3BhY2UgPSAnICsgdm0ubmFtZXNwYWNlKTtcblxuICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gdm0ubmFtZXNwYWNlKSB7XG4gICAgICAgIGlmICh2bS5uYW1lc3BhY2UuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgdm0ubmFtZSA9IE9iamVjdC5rZXlzKHJlc3BvbnNlLmRhdGFbdm0ubmFtZXNwYWNlXVtwcm9wZXJ0eV0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHZtLm5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2bS5nZXRDb250ZW50ID0gZnVuY3Rpb24oaW5kZXgsIGtleVZhbCkge1xuICAgICAgcmV0dXJuIHZtLm5hbWVzcGFjZSArICcuJyArIGluZGV4ICsgJy4nICsgdm0ubmFtZVtrZXlWYWxdO1xuICAgIH07XG4gIH1cbn0pKCk7XG5cbihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3dlYkFwcCcpXHJcbiAgICAuY29udHJvbGxlcigndGFic0NvbnRyb2xsZXInLCB0YWJzQ29udHJvbGxlcik7XHJcblxyXG4gIHRhYnNDb250cm9sbGVyLiRpbmplY3QgPSBbJyR0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyJywgJyR0cmFuc2xhdGUnLCAnSnNvbkRhdGEnLCAnJG1kRGlhbG9nJywgJyRtZE1lZGlhJywgJyRzY29wZSddO1xyXG5cclxuICBmdW5jdGlvbiB0YWJzQ29udHJvbGxlcigkdHJhbnNsYXRlUGFydGlhbExvYWRlciwgJHRyYW5zbGF0ZSwgSnNvbkRhdGEsICRtZERpYWxvZywgJG1kTWVkaWEsICRzY29wZSkge1xyXG5cclxuICAgIC8qanNoaW50IHZhbGlkdGhpczogdHJ1ZSAqL1xyXG4gICAgdmFyIHZtID0gdGhpcztcclxuXHJcbiAgICB2bS5wYXRoVG9Kc29uID0gWycuLi9KU09OL3RhYnMtZW4uanNvbicsICcuLi9KU09OL3Byb2R1Y3RzLWVuLmpzb24nLCAnLi4vSlNPTi9wcm9kdWN0cy1ydS5qc29uJ107XHJcblxyXG4gICAgdm0uc2hvd01vcmUgPSBmdW5jdGlvbihldikge1xyXG5cclxuICAgICAgJG1kRGlhbG9nLnNob3coe1xyXG4gICAgICAgIGNvbnRyb2xsZXI6IHRhYnNDb250cm9sbGVyLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3RhYnNDdHJsJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL1RFTVBMQVRFUy9wcm9kdWN0cy5odG1sJyxcclxuICAgICAgICBwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcclxuICAgICAgICB0YXJnZXRFdmVudDogZXYsXHJcbiAgICAgICAgY2xpY2tPdXRzaWRlVG9DbG9zZTogdHJ1ZSxcclxuICAgICAgICBmdWxsc2NyZWVuOiAndHJ1ZSdcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAkbWRNZWRpYSgnc20nKSB8fCAkbWRNZWRpYSgneHMnKTtcclxuICAgICAgfSwgZnVuY3Rpb24od2FudHNGdWxsU2NyZWVuKSB7XHJcbiAgICAgICAgdm0uY3VzdG9tRnVsbHNjcmVlbiA9ICh3YW50c0Z1bGxTY3JlZW4gPT09IHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdm0uc2hvd0Rlc2NyaXB0aW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh2bS5vcHRpb24pIHtcclxuICAgICAgICB2bS5vcHRpb24gPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2bS5vcHRpb24gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZtLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAkbWREaWFsb2cuY2FuY2VsKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZtLmRhdGEgPSBbXTtcclxuXHJcbiAgICBKc29uRGF0YS5hbGwodm0ucGF0aFRvSnNvblswXSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICB2bS5uYW1lc3BhY2UgPSBPYmplY3Qua2V5cyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgdm0uY291bnQgPSBKc29uRGF0YS5zZXRPYmplY3RDb3VudChPYmplY3Qua2V5cyhyZXNwb25zZS5kYXRhW3ZtLm5hbWVzcGFjZV0pLmxlbmd0aCk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygndm0ubmFtZXNwYWNlIGZyb20gdGFicyA9ICcgKyB2bS5uYW1lc3BhY2UpO1xyXG5cclxuICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gdm0ubmFtZXNwYWNlKSB7XHJcbiAgICAgICAgaWYgKHZtLm5hbWVzcGFjZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgIHZtLm5hbWUgPSBPYmplY3Qua2V5cyhyZXNwb25zZS5kYXRhW3ZtLm5hbWVzcGFjZV1bcHJvcGVydHldKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHZtLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdm0uZ2V0Q29udGVudCA9IGZ1bmN0aW9uKGluZGV4LCBrZXlWYWwpIHtcclxuICAgICAgcmV0dXJuIHZtLm5hbWVzcGFjZSArICcuJyArIGluZGV4ICsgJy4nICsgdm0ubmFtZVtrZXlWYWxdO1xyXG4gICAgfTtcclxuXHJcbiAgICB2bS5wcm9kdWN0cyA9IFtdO1xyXG5cclxuICAgIGlmICgkdHJhbnNsYXRlLnVzZSgpID09PSAncnUnKSB7XHJcbiAgICAgIEpzb25EYXRhLmFsbCh2bS5wYXRoVG9Kc29uWzJdKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgdm0ucHJvZHVjdHMgPSByZXNwb25zZS5kYXRhLnByb2R1Y3Q7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgSnNvbkRhdGEuYWxsKHZtLnBhdGhUb0pzb25bMV0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICB2bS5wcm9kdWN0cyA9IHJlc3BvbnNlLmRhdGEucHJvZHVjdDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KSgpO1xyXG5cbihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3dlYkFwcCcpXHJcbiAgICAuZGlyZWN0aXZlKCdhYm91dENhcmQnLCBhYm91dENhcmQpO1xyXG5cclxuICBmdW5jdGlvbiBhYm91dENhcmQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN0cmljdDogJ0VBJyxcclxuICAgICAgcHJpb3JpdHk6IDEwMDEsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAnLi4vVEVNUExBVEVTL2Fib3V0Lmh0bWwnLFxyXG4gICAgICBjb250cm9sbGVyOiAnYWJvdXRDYXJkQ29udHJvbGxlcicsXHJcbiAgICAgIGNvbnRyb2xsZXJBczogJ2Fib3V0Q2FyZEN0cmwnXHJcbiAgICB9O1xyXG4gIH1cclxufSkoKTtcclxuXG4oZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBhbmd1bGFyXHJcbiAgICAubW9kdWxlKCd3ZWJBcHAnKVxyXG4gICAgLmRpcmVjdGl2ZSgnbWVudUJhcicsIG1lbnVCYXIpXHJcbiAgICAuZGlyZWN0aXZlKCdtZW51QmFyU2lkZScsIG1lbnVCYXJTaWRlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBtZW51QmFyKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnRUEnLFxyXG4gICAgICAgIHByaW9yaXR5OiAxMDAxLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vVEVNUExBVEVTL25hdmlnYXRpb24uaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogJ25hdmlnYXRpb25Db250cm9sbGVyJyxcclxuICAgICAgICBjb250cm9sbGVyQXM6ICduYXZDdHJsJyxcclxuICAgICAgfTtcclxuICAgIH1cclxuICBmdW5jdGlvbiBtZW51QmFyU2lkZSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdDogJ0VBJyxcclxuICAgICAgICBwcmlvcml0eTogMTAwMSxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL1RFTVBMQVRFUy9uYXZpZ2F0aW9uLXNpZGVuYXYuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogJ25hdmlnYXRpb25Db250cm9sbGVyJyxcclxuICAgICAgICBjb250cm9sbGVyQXM6ICduYXZDdHJsJyxcclxuICAgICAgfTtcclxuICAgIH1cclxufSkoKTtcclxuXG4oZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBhbmd1bGFyXHJcbiAgICAubW9kdWxlKCd3ZWJBcHAnKVxyXG4gICAgLmRpcmVjdGl2ZSgnYmx1ck9uRW50ZXInLCBibHVyT25FbnRlcik7XHJcblxyXG4gIGZ1bmN0aW9uIGJsdXJPbkVudGVyKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHNjb3BlLCBlbGVtLCBhdHRycykge1xyXG4gICAgICBlbGVtLmJpbmQoJ2tleWRvd24ga2V5cHJlc3MnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBlbGVtLmJsdXIoKTtcclxuICAgICAgICAgIHNjb3BlLiRhcHBseShhdHRycy5uZ0JsdXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH1cclxufSkoKTtcclxuXHJcbi8vIENyZWRpdHMgaHR0cDovL2pzZmlkZGxlLm5ldC9ucTZmZ3NlMS9cclxuXG4oZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBhbmd1bGFyXHJcbiAgICAubW9kdWxlKCd3ZWJBcHAnKVxyXG4gICAgLmRpcmVjdGl2ZSgnYm9uZVRhYicsIGJvbmVUYWIpO1xyXG5cclxuICBmdW5jdGlvbiBib25lVGFiKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzdHJpY3Q6ICdFQScsXHJcbiAgICAgIHByaW9yaXR5OiAxMDAxLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogJy4uL1RFTVBMQVRFUy90YWJzLmh0bWwnLFxyXG4gICAgICBjb250cm9sbGVyOiAndGFic0NvbnRyb2xsZXInLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICd0YWJzQ3RybCdcclxuICAgIH07XHJcbiAgfVxyXG59KSgpO1xyXG5cbihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3dlYkFwcCcpXHJcbiAgICAuZmFjdG9yeSgnSnNvbkRhdGEnLCBKc29uRGF0YUZhY3RvcnkpO1xyXG5cclxuICBKc29uRGF0YUZhY3RvcnkuJGluamVjdCA9IFsnJGh0dHAnXTtcclxuXHJcbiAgZnVuY3Rpb24gSnNvbkRhdGFGYWN0b3J5KCRodHRwKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhbGw6IGZ1bmN0aW9uKHBhdGgpIHtcclxuICAgICAgICByZXR1cm4gJGh0dHAoe1xyXG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgdXJsOiBwYXRoXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldE9iamVjdENvdW50OiBmdW5jdGlvbihuKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheShuKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3dlYkFwcCcpXHJcbiAgICAuY29udHJvbGxlcignYWJvdXRDYXJkQ29udHJvbGxlcicsIGFib3V0Q2FyZENvbnRyb2xsZXIpO1xyXG5cclxuICBhYm91dENhcmRDb250cm9sbGVyLiRpbmplY3QgPSBbJyR0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyJywgJyR0cmFuc2xhdGUnLCAnSnNvbkRhdGEnXTtcclxuXHJcbiAgZnVuY3Rpb24gYWJvdXRDYXJkQ29udHJvbGxlcigkdHJhbnNsYXRlUGFydGlhbExvYWRlciwgJHRyYW5zbGF0ZSwgSnNvbkRhdGEpIHtcclxuICAgIC8qanNoaW50IHZhbGlkdGhpczogdHJ1ZSAqL1xyXG4gICAgdmFyIHZtID0gdGhpcztcclxuXHJcbiAgICB2bS5uYW1lID0gW107XHJcblxyXG4gICAgdm0ucGF0aFRvSnNvbiA9ICcuLi9KU09OL2Fib3V0LWVuLmpzb24nO1xyXG5cclxuICAgIEpzb25EYXRhLmFsbCh2bS5wYXRoVG9Kc29uKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgIHZtLm5hbWVzcGFjZSA9IE9iamVjdC5rZXlzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB2bS5jb3VudCA9IEpzb25EYXRhLnNldE9iamVjdENvdW50KE9iamVjdC5rZXlzKHJlc3BvbnNlLmRhdGFbdm0ubmFtZXNwYWNlXSkubGVuZ3RoKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCd2bS5uYW1lc3BhY2UgPSAnICsgdm0ubmFtZXNwYWNlKTtcclxuXHJcbiAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIHZtLm5hbWVzcGFjZSkge1xyXG4gICAgICAgIGlmICh2bS5uYW1lc3BhY2UuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICB2bS5uYW1lID0gT2JqZWN0LmtleXMocmVzcG9uc2UuZGF0YVt2bS5uYW1lc3BhY2VdW3Byb3BlcnR5XSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh2bS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZtLmdldENvbnRlbnQgPSBmdW5jdGlvbihpbmRleCwga2V5VmFsKSB7XHJcbiAgICAgIHJldHVybiB2bS5uYW1lc3BhY2UgKyAnLicgKyBpbmRleCArICcuJyArIHZtLm5hbWVba2V5VmFsXTtcclxuICAgIH07XHJcbiAgfVxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBhbmd1bGFyXHJcbiAgICAubW9kdWxlKCd3ZWJBcHAnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ21haW5Db250cm9sbGVyJywgbWFpbkNvbnRyb2xsZXIpO1xyXG5cclxuICBtYWluQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbWRTaWRlbmF2JywgJyR0cmFuc2xhdGUnLCAnSnNvbkRhdGEnXTtcclxuXHJcbiAgZnVuY3Rpb24gbWFpbkNvbnRyb2xsZXIoJG1kU2lkZW5hdiwgJHRyYW5zbGF0ZSwgSnNvbkRhdGEpIHtcclxuICAgIC8qanNoaW50IHZhbGlkdGhpczogdHJ1ZSAqL1xyXG4gICAgdmFyIHZtID0gdGhpcztcclxuXHJcbiAgICB2bS5jaGFuZ2VMYW5ndWFnZSA9IGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAkdHJhbnNsYXRlLnVzZShrZXkpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2bS5vcGVuTGVmdE1lbnUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgJG1kU2lkZW5hdignbGVmdCcpLnRvZ2dsZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb3JpZ2luYXRvckV2O1xyXG5cclxuICAgIHZtLm9wZW5NZW51ID0gZnVuY3Rpb24oJG1kT3Blbk1lbnUsIGV2KSB7XHJcbiAgICAgIG9yaWdpbmF0b3JFdiA9IGV2O1xyXG4gICAgICAkbWRPcGVuTWVudShldik7XHJcbiAgICB9O1xyXG4gIH1cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3dlYkFwcCcpXG4gICAgLmNvbnRyb2xsZXIoJ25hdmlnYXRpb25Db250cm9sbGVyJywgbmF2aWdhdGlvbkNvbnRyb2xsZXIpO1xuXG4gIG5hdmlnYXRpb25Db250cm9sbGVyLiRpbmplY3QgPSBbJyR0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyJywgJyR0cmFuc2xhdGUnLCAnSnNvbkRhdGEnXTtcblxuICBmdW5jdGlvbiBuYXZpZ2F0aW9uQ29udHJvbGxlcigkdHJhbnNsYXRlUGFydGlhbExvYWRlciwgJHRyYW5zbGF0ZSwgSnNvbkRhdGEpIHtcbiAgICAvKmpzaGludCB2YWxpZHRoaXM6IHRydWUgKi9cbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgdm0ubmFtZSA9IFtdO1xuXG4gICAgdm0ucGF0aFRvSnNvbiA9ICcuLi9KU09OL25hdmlnYXRpb24tZW4uanNvbic7XG5cbiAgICBKc29uRGF0YS5hbGwodm0ucGF0aFRvSnNvbikudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgdm0ubmFtZXNwYWNlID0gT2JqZWN0LmtleXMocmVzcG9uc2UuZGF0YSk7XG4gICAgICB2bS5jb3VudCA9IEpzb25EYXRhLnNldE9iamVjdENvdW50KE9iamVjdC5rZXlzKHJlc3BvbnNlLmRhdGFbdm0ubmFtZXNwYWNlXSkubGVuZ3RoKTtcblxuICAgICAgY29uc29sZS5sb2coJ3ZtLm5hbWVzcGFjZSA9ICcgKyB2bS5uYW1lc3BhY2UpO1xuXG4gICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiB2bS5uYW1lc3BhY2UpIHtcbiAgICAgICAgaWYgKHZtLm5hbWVzcGFjZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICB2bS5uYW1lID0gT2JqZWN0LmtleXMocmVzcG9uc2UuZGF0YVt2bS5uYW1lc3BhY2VdW3Byb3BlcnR5XSk7XG4gICAgICAgICAgY29uc29sZS5sb2codm0ubmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZtLmdldENvbnRlbnQgPSBmdW5jdGlvbihpbmRleCwga2V5VmFsKSB7XG4gICAgICByZXR1cm4gdm0ubmFtZXNwYWNlICsgJy4nICsgaW5kZXggKyAnLicgKyB2bS5uYW1lW2tleVZhbF07XG4gICAgfTtcbiAgfVxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3dlYkFwcCcpXHJcbiAgICAuY29udHJvbGxlcigndGFic0NvbnRyb2xsZXInLCB0YWJzQ29udHJvbGxlcik7XHJcblxyXG4gIHRhYnNDb250cm9sbGVyLiRpbmplY3QgPSBbJyR0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyJywgJyR0cmFuc2xhdGUnLCAnSnNvbkRhdGEnLCAnJG1kRGlhbG9nJywgJyRtZE1lZGlhJywgJyRzY29wZSddO1xyXG5cclxuICBmdW5jdGlvbiB0YWJzQ29udHJvbGxlcigkdHJhbnNsYXRlUGFydGlhbExvYWRlciwgJHRyYW5zbGF0ZSwgSnNvbkRhdGEsICRtZERpYWxvZywgJG1kTWVkaWEsICRzY29wZSkge1xyXG5cclxuICAgIC8qanNoaW50IHZhbGlkdGhpczogdHJ1ZSAqL1xyXG4gICAgdmFyIHZtID0gdGhpcztcclxuXHJcbiAgICB2bS5wYXRoVG9Kc29uID0gWycuLi9KU09OL3RhYnMtZW4uanNvbicsICcuLi9KU09OL3Byb2R1Y3RzLWVuLmpzb24nLCAnLi4vSlNPTi9wcm9kdWN0cy1ydS5qc29uJ107XHJcblxyXG4gICAgdm0uc2hvd01vcmUgPSBmdW5jdGlvbihldikge1xyXG5cclxuICAgICAgJG1kRGlhbG9nLnNob3coe1xyXG4gICAgICAgIGNvbnRyb2xsZXI6IHRhYnNDb250cm9sbGVyLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3RhYnNDdHJsJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL1RFTVBMQVRFUy9wcm9kdWN0cy5odG1sJyxcclxuICAgICAgICBwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcclxuICAgICAgICB0YXJnZXRFdmVudDogZXYsXHJcbiAgICAgICAgY2xpY2tPdXRzaWRlVG9DbG9zZTogdHJ1ZSxcclxuICAgICAgICBmdWxsc2NyZWVuOiAndHJ1ZSdcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAkbWRNZWRpYSgnc20nKSB8fCAkbWRNZWRpYSgneHMnKTtcclxuICAgICAgfSwgZnVuY3Rpb24od2FudHNGdWxsU2NyZWVuKSB7XHJcbiAgICAgICAgdm0uY3VzdG9tRnVsbHNjcmVlbiA9ICh3YW50c0Z1bGxTY3JlZW4gPT09IHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdm0uc2hvd0Rlc2NyaXB0aW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh2bS5vcHRpb24pIHtcclxuICAgICAgICB2bS5vcHRpb24gPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2bS5vcHRpb24gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZtLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAkbWREaWFsb2cuY2FuY2VsKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZtLmRhdGEgPSBbXTtcclxuXHJcbiAgICBKc29uRGF0YS5hbGwodm0ucGF0aFRvSnNvblswXSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICB2bS5uYW1lc3BhY2UgPSBPYmplY3Qua2V5cyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgdm0uY291bnQgPSBKc29uRGF0YS5zZXRPYmplY3RDb3VudChPYmplY3Qua2V5cyhyZXNwb25zZS5kYXRhW3ZtLm5hbWVzcGFjZV0pLmxlbmd0aCk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygndm0ubmFtZXNwYWNlIGZyb20gdGFicyA9ICcgKyB2bS5uYW1lc3BhY2UpO1xyXG5cclxuICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gdm0ubmFtZXNwYWNlKSB7XHJcbiAgICAgICAgaWYgKHZtLm5hbWVzcGFjZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgIHZtLm5hbWUgPSBPYmplY3Qua2V5cyhyZXNwb25zZS5kYXRhW3ZtLm5hbWVzcGFjZV1bcHJvcGVydHldKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHZtLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdm0uZ2V0Q29udGVudCA9IGZ1bmN0aW9uKGluZGV4LCBrZXlWYWwpIHtcclxuICAgICAgcmV0dXJuIHZtLm5hbWVzcGFjZSArICcuJyArIGluZGV4ICsgJy4nICsgdm0ubmFtZVtrZXlWYWxdO1xyXG4gICAgfTtcclxuXHJcbiAgICB2bS5wcm9kdWN0cyA9IFtdO1xyXG5cclxuICAgIGlmICgkdHJhbnNsYXRlLnVzZSgpID09PSAncnUnKSB7XHJcbiAgICAgIEpzb25EYXRhLmFsbCh2bS5wYXRoVG9Kc29uWzJdKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgdm0ucHJvZHVjdHMgPSByZXNwb25zZS5kYXRhLnByb2R1Y3Q7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgSnNvbkRhdGEuYWxsKHZtLnBhdGhUb0pzb25bMV0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICB2bS5wcm9kdWN0cyA9IHJlc3BvbnNlLmRhdGEucHJvZHVjdDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBhbmd1bGFyXHJcbiAgICAubW9kdWxlKCd3ZWJBcHAnKVxyXG4gICAgLmRpcmVjdGl2ZSgnYWJvdXRDYXJkJywgYWJvdXRDYXJkKTtcclxuXHJcbiAgZnVuY3Rpb24gYWJvdXRDYXJkKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzdHJpY3Q6ICdFQScsXHJcbiAgICAgIHByaW9yaXR5OiAxMDAxLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogJy4uL1RFTVBMQVRFUy9hYm91dC5odG1sJyxcclxuICAgICAgY29udHJvbGxlcjogJ2Fib3V0Q2FyZENvbnRyb2xsZXInLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICdhYm91dENhcmRDdHJsJ1xyXG4gICAgfTtcclxuICB9XHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3dlYkFwcCcpXHJcbiAgICAuZGlyZWN0aXZlKCdtZW51QmFyJywgbWVudUJhcilcclxuICAgIC5kaXJlY3RpdmUoJ21lbnVCYXJTaWRlJywgbWVudUJhclNpZGUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1lbnVCYXIoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFQScsXHJcbiAgICAgICAgcHJpb3JpdHk6IDEwMDEsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuLi9URU1QTEFURVMvbmF2aWdhdGlvbi5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiAnbmF2aWdhdGlvbkNvbnRyb2xsZXInLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ25hdkN0cmwnLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIGZ1bmN0aW9uIG1lbnVCYXJTaWRlKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnRUEnLFxyXG4gICAgICAgIHByaW9yaXR5OiAxMDAxLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vVEVNUExBVEVTL25hdmlnYXRpb24tc2lkZW5hdi5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiAnbmF2aWdhdGlvbkNvbnRyb2xsZXInLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ25hdkN0cmwnLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBhbmd1bGFyXHJcbiAgICAubW9kdWxlKCd3ZWJBcHAnKVxyXG4gICAgLmRpcmVjdGl2ZSgnYmx1ck9uRW50ZXInLCBibHVyT25FbnRlcik7XHJcblxyXG4gIGZ1bmN0aW9uIGJsdXJPbkVudGVyKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHNjb3BlLCBlbGVtLCBhdHRycykge1xyXG4gICAgICBlbGVtLmJpbmQoJ2tleWRvd24ga2V5cHJlc3MnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBlbGVtLmJsdXIoKTtcclxuICAgICAgICAgIHNjb3BlLiRhcHBseShhdHRycy5uZ0JsdXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH1cclxufSkoKTtcclxuXHJcbi8vIENyZWRpdHMgaHR0cDovL2pzZmlkZGxlLm5ldC9ucTZmZ3NlMS9cclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnd2ViQXBwJylcclxuICAgIC5kaXJlY3RpdmUoJ2JvbmVUYWInLCBib25lVGFiKTtcclxuXHJcbiAgZnVuY3Rpb24gYm9uZVRhYigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc3RyaWN0OiAnRUEnLFxyXG4gICAgICBwcmlvcml0eTogMTAwMSxcclxuICAgICAgdGVtcGxhdGVVcmw6ICcuLi9URU1QTEFURVMvdGFicy5odG1sJyxcclxuICAgICAgY29udHJvbGxlcjogJ3RhYnNDb250cm9sbGVyJyxcclxuICAgICAgY29udHJvbGxlckFzOiAndGFic0N0cmwnXHJcbiAgICB9O1xyXG4gIH1cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnd2ViQXBwJylcclxuICAgIC5mYWN0b3J5KCdKc29uRGF0YScsIEpzb25EYXRhRmFjdG9yeSk7XHJcblxyXG4gIEpzb25EYXRhRmFjdG9yeS4kaW5qZWN0ID0gWyckaHR0cCddO1xyXG5cclxuICBmdW5jdGlvbiBKc29uRGF0YUZhY3RvcnkoJGh0dHApIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFsbDogZnVuY3Rpb24ocGF0aCkge1xyXG4gICAgICAgIHJldHVybiAkaHR0cCh7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICB1cmw6IHBhdGhcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgc2V0T2JqZWN0Q291bnQ6IGZ1bmN0aW9uKG4pIHtcclxuICAgICAgICByZXR1cm4gbmV3IEFycmF5KG4pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9