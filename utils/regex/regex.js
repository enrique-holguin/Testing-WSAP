//REGEX Para Ubicación Actual Whatsapp
const REGEX_EVENT_LOCATION =
  /^_event_location__[\w\d]{8}-(?:[\w\d]{4}-){3}[\w\d]{12}$/;

//RegEx para Comprobar espacios en blanco
const REGEX_WHITE_SPACE = /^[a-zA-Z0-9]+$/;

module.exports = { REGEX_EVENT_LOCATION, REGEX_WHITE_SPACE };
