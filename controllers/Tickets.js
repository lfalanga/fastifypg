import Ticket from "../models/Tickets.js";

class TicketController {
  constructor() {}

  async add(req, res) {
    try {
      const created = await Ticket.create(req.body);
      if (created) res.status(200).send(created);
    } catch (err) {
      res.status(500).send({ error: err });
    }
  }

  async all(req, res) {
    try {
      const where = { ...req.query };
      const data = await Ticket.findAll({ where });
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send({ error: err });
    }
  }

  async get(req, res) {
    try {
      const { id } = req.params;
      const registry = await Ticket.findByPk(id);
      if (registry) {
        res.status(200).send(registry);
      } else {
        res.status(404).send({ message: "ticket: not found." });
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
      const updated = await Ticket.update(data, { where: {id} });
      if (typeof updated[0] !== undefined && updated[0] === 1) {
        res.status(200).send({ message: "ticket: updated." });
      } else {
        res.status(404).send({ message: "ticket: not found." });
      }
    } catch (err) {
      res.status(500).send({ error: err });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Ticket.destroy({ where: { id } });
      if (deleted) {
        res.status(200).send({ message: "ticket: deleted." });
      } else {
        res.status(404).send({ message: "ticket: not found." });
      }
    } catch (err) {
      res.status(500).send({ error: err });
    }
  }
}

export default new TicketController();
