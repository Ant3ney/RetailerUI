"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getURLFromSanityRefrence;

require("core-js/modules/es.promise.js");

/**
* It takes a sanity refrence object and a sanity client, and returns a promise that
* resolves to the url of the asset that the refrence points to.
* @param {any} refrence - the refrence object from the sanity query
* @param {any} client - The sanity client
* @returns A promise that resolves to a string.
*/
function getURLFromSanityRefrence(refrence, client) {
  if (!refrence) return exicuteFail('getURLFromSanityRefrence: refrence is null');
  if (!refrence.asset) return exicuteFail('getURLFromSanityRefrence: refrence.source is null');
  if (!refrence.asset._ref) return exicuteFail('getURLFromSanityRefrence: refrence.source.id is null');
  if (!client) return exicuteFail('getURLFromSanityRefrence: client is null');
  return new Promise(function (res, rej) {
    var ref = refrence.asset._ref;
    var query = "*[_id==\"".concat(ref, "\"][0]{url}");
    client.fetch(query).then(function (queriedURL) {
      if (!queriedURL) return rej('getURLFromSanityRefrence: Sanity query result returned null');
      return res(queriedURL.url);
    });
  });
}

function exicuteFail(msg) {
  console.error(msg);
  return Promise.reject({
    message: msg
  });
}