import { createContext } from "react";

const Context = createContext({
  allProduct: [],
  bestProduct: [],
  offersProduct: [],
  favorate: [],
  allTicket: [],
  allCart: [],
  infoProduct: {},
  statusModal: false,
  isLogin: false,
  statusbestProduct: false,
  statusComment: false,
  statusMenu: false,
  showForm: false,
  showPassword: false,
  orderModal: false,
  showModalTicket: false,
  showAddModalTicket: false,
  showUsername: "",
  allUsers: [],
  numberNavbar: 0,
  newProduct: () => {},
  changeNumber_Navbar: () => {},
  setShow_Username: () => {},
  getAllUser: () => {},
  AddTicket_Modal: () => {},
  getNew_AllTicket: () => {},
  showTicket_Modal: () => {},
  showOrder: () => {},
  ShowPasswordHandler: () => {},
  updateFavorate: () => {},
  ShowFormHandler: () => {},
  showOffer: () => {},
  showModalMenu: () => {},
  showModalComment: () => {},
  editnumberNavbar: () => {},
  bestshowModal: () => {},
  showInfoProduct: () => {},
  login: () => {},
  logout: () => {},
  showModal: () => {},
});

export default Context;
