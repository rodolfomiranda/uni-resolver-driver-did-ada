![DIF Logo](https://raw.githubusercontent.com/decentralized-identity/universal-resolver/master/docs/logo-dif.png)

# Universal Resolver Driver: example

This is a [Universal Resolver](https://github.com/decentralized-identity/universal-resolver/) driver for [Sidetree-Cardano](https://github.com/rodolfomiranda/sidetree-cardano) **did:ada** identifiers.

## Specifications

* [Decentralized Identifiers](https://w3c.github.io/did-core/)
* [Sidetree Protocol](https://identity.foundation/sidetree/spec/)
* [Sidetree-Cardano](https://github.com/rodolfomiranda/sidetree-cardano)
  
## Example DID

```
did:ada:EiDfLfmqWKLEgbALdWg2jj3m8LFbfFSwPdee6JvFE5VfTQ
```

## Build and Run (Docker)

```
docker build -f ./docker/Dockerfile . -t exampleorg/uni-resolver-driver-did-example
docker run -p 8080:8080 exampleorg/uni-resolver-driver-did-example
curl -X GET http://localhost:8080/1.0/identifiers/did:ada:EiDfLfmqWKLEgbALdWg2jj3m8LFbfFSwPdee6JvFE5VfTQ
```

## Build and Run (NodeJS)

```
npm start
```

## Driver Environment Variables

The driver recognizes the following environment variable:

### `uniresolver_driver_did_ada_network`

 * Values: testnet | mainnet
 * Default value: testnet

## Driver Metadata

The driver returns the following metadata in addition to a DID document:

```
"didDocumentMetadata":{
      "method":{
         "published":true,
         "recoveryCommitment":"EiCqoMGfQKKmaxONsAoBuxUuPpMXrqnQ4Jv0dmwaMl1WWQ",
         "updateCommitment":"EiAWGSlddbHJReo2sOD-0-RM1ChgEtEAc1HOFqNtdyHo6g"
      },
      "canonicalId":"did:ada:EiDfLfmqWKLEgbALdWg2jj3m8LFbfFSwPdee6JvFE5VfTQ"
   }
```
