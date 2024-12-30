import Store from "../models/Stores.js";

class StoreController {
  constructor() {}

  async add(req, res) {
    try {
      const created = await Store.create(req.body);
      if (created) res.status(200).send(created);
    } catch (err) {
      res.status(500).send({ error: err });
    }
  }

  async all(req, res) {
    try {
      const where = { ...req.query };
      const data = await Store.findAll({ where });
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send({ error: err });
    }
  }

  async get(req, res) {
    try {
      const { id } = req.params;
      const registry = await Store.findByPk(id);
      if (registry) {
        res.status(200).send(registry);
      } else {
        res.status(404).send({ message: "store: not found." });
      }
    } catch (err) {
      res.status(500).send({ error: err });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = { ...req.body };
      delete data.id;
      const updated = await Store.update(data, { where: {id} });
      if (typeof updated[0] !== undefined && updated[0] === 1) {
        res.status(200).send({ message: "store: updated." });
      } else {
        res.status(404).send({ message: "store: not found." });
      }
    } catch (err) {
      res.status(500).send({ error: err });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Store.destroy({ where: { id } });
      if (deleted) {
        res.status(200).send({ message: "store: deleted." });
      } else {
        res.status(404).send({ message: "store: not found." });
      }
    } catch (err) {
      res.status(500).send({ error: err });
    }
  }
}

export default new StoreController();
