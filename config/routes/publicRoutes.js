const publicRoutes = {
  'POST /menus': 'MenuController.create',
  'PUT /menus': 'MenuController.update',
  'GET /menus': 'MenuController.getAll',
};

module.exports = publicRoutes;
