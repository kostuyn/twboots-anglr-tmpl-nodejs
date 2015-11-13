angular.module('services', ['resources.data'])
    .factory('itemService', ['items', function (items) {
        return {
            get: function () {
                return items;
            },
            getById: function (itemId) {
                var val = null;
                items.some(function (item) {
                    if (item.id == itemId) {
                        return true;
                    }

                    return false;
                });

                return val;
            }
        };
    }]);