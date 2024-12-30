import Store from "../models/Stores.js";

class StoreController {
  constructor() {}

  async add(req, res) {
    try {
      const created = await Store.create(req.body);
      if (created) res.status(200).send({ message: "store: created.", id: created.id });
    } catch (err) {
      res.status(500).send({error: err});
    }
  }

  async all(req, res) {
    try {

    } catch(err) {
      res.status(500).send({error: err});
    }
  }

  async get(req, res) {
    try {

    } catch(err) {
      res.status(500).send({error: err});
    }
  }

  async update(req, res) {
    try {

    } catch(err) {
      res.status(500).send({error: err});
    }
  }

  async delete(req, res) {
    try {

    } catch(err) {
      res.status(500).send({error: err});
    }
  }
}

export default new StoreController();
