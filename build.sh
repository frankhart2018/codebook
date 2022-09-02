#!/bin/bash

# Build apps
cd frontend && npm run build
cd ..
cd nodejs && npm run build
cd ..

# Copy stuff to build dir
mkdir frontend-build
cp -R frontend/build/* ./frontend-build
mkdir nodejs-build
cp -R nodejs/dist/* ./nodejs-build
cp nodejs/package.json ./nodejs-build
mkdir build
mv *-build build
cp package.json build
cp nodejs/src/test.md build/

# Build tarball and cleanup
tar -czf build.tar.gz build/
rm -rf build