const Menu = require('../models/Menu');

const MenuController = () => {
  const create = async (req, res) => {
    const { body } = req;

    if (body.password === body.password2) {
      try {
        const user = await Menu.create({
          title: body.title,
          subtitle: body.subtitle,
          imageUrl: body.imageUrl,
        });

        return res.status(200).json({ user });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: "Bad Request: Passwords don't match" });
  };

  const update = async (req, res) => {
    const { title, subtitle, imageUrl, id } = req.body;
    try {
      const menu = await Menu.findOne({ where: { id } });
      if (menu === null) {
        return res.status(400).json({ msg: 'Bad Request: User not found' });
      }
      menu.title = title || menu.title;
      menu.subtitle = subtitle || menu.subtitle;
      menu.imageUrl = imageUrl || menu.imageUrl;
      const user = await menu.save();
      return res.status(200).json({ user });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const getAll = async (req, res) => {
    try {
      const users = await Menu.findAll();
      return res.status(200).json({ users });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return {
    create,
    update,
    getAll,
  };
};

module.exports = MenuController;
