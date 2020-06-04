#!/bin/sh


docker run \
	--rm \
	--interactive \
	--volume ${PWD}:/usr/api \
	--workdir /usr/api \
	website4art-python-images \
	/bin/bash -x <<-EOF
		exif=Image-ExifTool-11.98

		# Remove non-originals if exist
		rm -r ./public/gallery/[0-9]*

		# Drop metadata from images
		/\${exif}/exiftool -r -ext "jpg" -overwrite_original -all= ./public/gallery

		# Resize images
		python < ./scripts/resize.py

		# Add metadata to images
		/\${exif}/exiftool -r -ext "jpg" -overwrite_original -tagsfromfile ./public/config/metadata.xmp -xmp:all ./public/gallery
EOF

docker run \
	--rm \
	--interactive \
	--volume ${PWD}:/usr/api \
	--workdir /usr/api \
	website4art-node-azure \
	/bin/bash -x <<-EOF
		# Clean build directory
		rm -r build

		# Node solve dependencies and build react
		npm install --only=production
		npm run build --if-present

		# Upload to Azure
		. ./.secrets
		cd build
		az storage blob upload-batch \
			--destination stage \
			--destination-path `git branch --show-current` \
			--source . \
			--connection-string "\${AZURE_STORAGE_CONNECTION_STRING}"
EOF

