#!/bin/bash

echo "Starting the main server..."
pnpm run dev &

echo "Starting the job service..."
cd ./job-service && pnpm run dev

