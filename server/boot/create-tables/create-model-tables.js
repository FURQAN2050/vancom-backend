'use strict';

module.exports = function (app) {
  var ds = app.dataSources.mySqlDs;
  ds.automigrate(['User', 'ACL', 'RoleMapping', 'Role'], function (err) {
    if (err) throw err;
  }); 
};

 
 
 
 