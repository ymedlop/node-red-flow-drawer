module.exports = function _RED (settings) {

    var _view = require("./view");
    var _workspaces = require("./workspaces");
    var _nodes = require("./nodes");

    var red = {
        i18n: require("./i18n"),
        loader: require("./loader"),
        state: require("./state"),
        tabs: require("./tabs"),
        types: require("./types"),
        text: require("./text"),
        utils: require("./utils"),
        validators: require("./validators"),
    };

    red.settings = settings;

    red.i18n.init(red);
    red.nodes = _nodes(red);
    red.validators.init(red); // should be initialized before types
    red.types.init(red);
    red.utils.init(red);
    red.view = _view(red);
    red.workspaces = _workspaces(red);
    red.loader.init(red.settings);

    return red;
};
