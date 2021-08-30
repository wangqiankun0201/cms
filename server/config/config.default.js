/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1630125733551_565';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // config.static={
  //   prefix:"/",
  //   dir:path.join(appInfo.baseDir,"app/public"),
  // };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.view = {
    defaultViewEngine: 'nunjucks',
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  config.jwt = { secret: 'qikuu' };

  config.sequelize={
    dialect:"mysql",
    database:"cms",
    host:"localhost",
    port:3306,
    username:'root',
    password:'235332',
    timezone:"+08:00"

  }


  return {
    ...config,
    ...userConfig,
  };
};
