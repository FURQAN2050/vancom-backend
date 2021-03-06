'use strict';

module.exports = function (app) {
    const numModels = Object.keys(app.models).length;
    for (let dataSource of Object.values(app.dataSources)) {
        dataSource.setMaxListeners(numModels);
    }
    var ds = app.dataSources.mySqlDs;
    
    ds.autoupdate('package', function (err) {
        if (err) throw err;
        console.log("Package Table Created")
    });

    ds.autoupdate('mainDealer', function (err) {
        if (err) throw err;
        console.log("Main Dealer Table Created")
    });
    
    ds.autoupdate('subDealer', function (err) {
        if (err) throw err;
        console.log("Sub Dealer Table Created")
    });
    
    ds.autoupdate('subDealerPackage', function (err) {
        if (err) throw err;
        console.log("Sub Dealer Packages Table Created")
    });

};