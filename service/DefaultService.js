'use strict';
const request = require('request');


/**
 * Resolve a DID or other identifier.
 *
 * identifier String A DID or other identifier to be resolved.
 * accept String The requested MIME type of the DID document or DID resolution result. (optional)
 * returns Object
 **/
exports.resolve = function(identifier,accept) {
  return new Promise(function(resolve, reject) {
    const nodeURL = process.env.sidetree_cardano_node_url ? process.env.sidetree_cardano_node_url : 'https://testnet.sidetree-cardano.com'; 
    
    request(nodeURL + '/identifiers/' + identifier, function (error, response, body) {
      if (error || JSON.parse(body).code )  {
        resolve(404)
      } else {
        resolve(body)
      }

    });


  });
}

