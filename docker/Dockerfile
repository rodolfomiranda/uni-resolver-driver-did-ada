# Dockerfile for rodolfomiranda/uni-resolver-driver-did-ada

FROM node:10

# build uni-resolver-driver-did-ada

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .

# variables

ENV sidetree_cardano_node_url='https://mnwbfd1eg2.execute-api.us-east-1.amazonaws.com/cardano'

# done

EXPOSE 8080

CMD [ "node", "index.js" ]
