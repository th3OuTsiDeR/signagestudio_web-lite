/// <reference path="../common/_ts/jquery.d.ts" />
/// <reference path="../common/_ts/backbone.d.ts" />
/// <reference path="./_view/MenuItemDetails.ts" />
/// <reference path="./_view/MenuItemModel.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AppRouter = (function (_super) {
    __extends(AppRouter, _super);
    function AppRouter(options) {
        this.routes = {
            "": "list",
            "menu-items/new": "itemForm",
            "menu-items/:item": "itemDetails"
        };

        _super.call(this, options);
    }
    AppRouter.prototype.initialize = function () {
        this.menuItemModel = new MenuItemModel();
        this.menuItemView = new MenuItemDetails({
            el: '#MyMenu',
            model: this.menuItemModel
        });
    };

    AppRouter.prototype.list = function () {
        var self = this;
        $('#app').fadeOut(function () {
            $('#app').html('List screen').fadeIn();
        });
    };

    AppRouter.prototype.itemDetails = function (item) {
        var self = this;
        $('#app').fadeOut(function () {
            self.menuItemModel.set('name', item);
            $('#app').html(self.menuItemView.el);
            $('#app').fadeIn();
        });
    };

    AppRouter.prototype.itemForm = function () {
        $('#app').fadeOut(function () {
            $('#app').html('New form item').fadeIn();
        });
    };
    return AppRouter;
})(Backbone.Router);

var app_router = new AppRouter();

Backbone.history.start();
//# sourceMappingURL=studiolite-bs.js.map