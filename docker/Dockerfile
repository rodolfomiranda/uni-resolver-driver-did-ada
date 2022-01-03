# Dockerfile for rodolfomiranda/uni-resolver-driver-did-ada

FROM node:10

# build uni-resolver-driver-did-ada

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .

# variables

ENV uniresolver_driver_did_ada_node_url='https://testnet.sidetree-cardano.com'

# done

EXPOSE 8080

CMD [ "node", "index.js" ]
