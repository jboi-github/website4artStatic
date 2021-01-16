#!/bin/sh

echo "Must run local ./scripts/install.sh first"

docker build --tag website4art-node-local - <<-EOF
	FROM website4art-node-azure
	RUN npm install
	CMD ["npm", "start"]
EOF


docker run \
	--rm \
	--volume ${PWD}:/usr/api \
	--workdir /usr/api \
	--interactive \
	-p 3000:3000 \
	website4art-node-local
