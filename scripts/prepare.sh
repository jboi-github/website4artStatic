#!/bin/sh -x

echo "Building Docker Images and install components on it"
exif=Image-ExifTool-11.98

docker build --tag website4art-python-images - <<-EOF
	FROM python:latest

	RUN apt-get update
	RUN pip install --no-cache-dir Pillow

	RUN curl --output ${exif}.tar.gz https://exiftool.org/${exif}.tar.gz
	RUN gzip -dc ${exif}.tar.gz | tar -xf -
	RUN chmod +x ./${exif}/exiftool
EOF

docker build --tag website4art-node-azure - <<-EOF
	FROM node:10

	RUN apt-get update
	RUN apt-get install apt-transport-https

	RUN curl -sL https://aka.ms/InstallAzureCLIDeb | bash

	RUN wget -q https://packages.microsoft.com/config/ubuntu/19.04/packages-microsoft-prod.deb
	RUN dpkg -i packages-microsoft-prod.deb
	RUN apt-get update
	RUN apt-get install azure-functions-core-tools
EOF

docker images
