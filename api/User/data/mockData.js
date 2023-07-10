//@ts-check

const User = require("../models/User");

// Mock data for testing purposes.  Replace with actual user information when ready to test API routes

/**
 * @type {User[]}
 */
const mockDataUsers = [
  {
    name: "Fernando",
    phone: 123456789,
    address: "Calle A, 123",
    geo: {
      lat: 12.345,
      lng: 67.89,
    },
  },
  {
    name: "María",
    phone: 987654321,
    address: "Avenida B, 456",
    geo: {
      lat: 98.765,
      lng: 43.21,
    },
  },
  {
    name: "Carlos",
    phone: 555555555,
    address: "Calle C, 789",
    geo: {
      lat: 45.678,
      lng: 23.456,
    },
  },
  {
    name: "Laura",
    phone: 111111111,
    address: "Avenida D, 987",
    geo: {
      lat: 87.654,
      lng: 32.109,
    },
  },
  {
    name: "Pedro",
    phone: 999999999,
    address: "Calle E, 654",
    geo: {
      lat: 56.789,
      lng: 12.345,
    },
  },
  {
    name: "Ana",
    phone: 777777777,
    address: "Avenida F, 321",
    geo: {
      lat: 34.567,
      lng: 89.012,
    },
  },
  {
    name: "Sergio",
    phone: 444444444,
    address: "Calle G, 987",
    geo: {
      lat: 76.543,
      lng: 90.123,
    },
  },
  {
    name: "Isabel",
    phone: 222222222,
    address: "Avenida H, 654",
    geo: {
      lat: 23.456,
      lng: 78.901,
    },
  },
  {
    name: "Luis",
    phone: 666666666,
    address: "Calle I, 321",
    geo: {
      lat: 67.89,
      lng: 45.678,
    },
  },
  {
    name: "Elena",
    phone: 888888888,
    address: "Avenida J, 654",
    geo: {
      lat: 21.345,
      lng: 89.012,
    },
  },
];

module.exports = { mockDataUsers };
