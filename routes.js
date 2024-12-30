import UserController from "./controllers/Users.js";
import StoreController from "./controllers/Stores.js";
import TicketController from "./controllers/Tickets.js";

const routes = [
  /* users' routes */
  {
    method: "POST",
    url: "/users",
    handler: UserController.add
  },
  {
    method: "GET",
    url: "/users",
    handler: UserController.all
  },
  {
    method: "GET",
    url: "/users/:id",
    handler: UserController.get
  },
  {
    method: "PUT",
    url: "/users/:id",
    handler: UserController.update
  },
  {
    method: "DELETE",
    url: "/users/:id",
    handler: UserController.delete
  },
  /* stores' routes */
  {
    method: "POST",
    url: "/stores",
    handler: StoreController.add,
  },
  {
    method: "GET",
    url: "/stores",
    handler: StoreController.all
  },
  {
    method: "GET",
    url: "/stores/:id",
    handler: StoreController.get
  },
  {
    method: "PUT",
    url: "/stores/:id",
    handler: StoreController.update
  },
  {
    method: "DELETE",
    url: "/stores/:id",
    handler: StoreController.delete
  },
  /* tickets' routes */
  {
    method: "POST",
    url: "/tickets",
    handler: TicketController.add,
  },
  {
    method: "GET",
    url: "/tickets",
    handler: TicketController.all
  },
  {
    method: "GET",
    url: "/tickets/:id",
    handler: TicketController.get
  },
  {
    method: "PUT",
    url: "/tickets/:id",
    handler: TicketController.update
  },
  {
    method: "DELETE",
    url: "/tickets/:id",
    handler: TicketController.delete
  }
]

export default routes;
