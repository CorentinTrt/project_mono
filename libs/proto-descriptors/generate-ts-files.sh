#!/bin/bash

PURPLE_BOLD='\033[1;35m'
RESET='\033[0m'

printf "${PURPLE_BOLD}generate-ts-files${RESET} - removing previous /definitions directory and index.ts\n"
rm -rf definitions
rm index.ts

printf "${PURPLE_BOLD}generate-ts-files${RESET} - creating new /definitions directory\n"
mkdir definitions

printf "${PURPLE_BOLD}generate-ts-files${RESET} - generating .d.ts files\n"

../../node_modules/.bin/proto-loader-gen-types -I=. $(find . -name "*.proto") --outDir=src/definitions/ $(find . -name "*.proto") --grpcLib=@grpc/grpc-js

printf "${PURPLE_BOLD}generate-ts-files${RESET} definition files generated\n"

printf "${PURPLE_BOLD}generate-ts-files${RESET} - running barrelsby to create exports\n"
pnpm run generate-barrels

printf "${PURPLE_BOLD}generate-ts-files${RESET} - task completed\n"
