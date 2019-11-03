'use strict';

module.exports = function (app) {
    var ds = app.dataSources.mySqlDs;

    ds.autoupdate('package', function (err) {
        if (err) throw err;
        
    });
};