'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('student','/student',app.middleware.checkout(),controller.student);
  router.post("/login",controller.login.login)
  router.resources('classes','/class',app.middleware.checkout(),controller.classes);
};
