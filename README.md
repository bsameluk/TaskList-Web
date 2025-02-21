# Task List App

A simple Task List App built with Ruby on Rails.

DEMO - http://ec2-13-50-16-237.eu-north-1.compute.amazonaws.com/

## Ruby version
- 3.3.0

## Local Setup (With Docker)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the application:
   ```bash
   npm run dev
   ```

## Production Setup (With Docker)
1. Build the containers:
   ```bash
   docker-compose build
   ```
2. Start the application:
   ```bash
   docker-compose up
   ```
3. Stop the application:
   ```bash
   docker-compose down
   ```

## Clean Up
1. Remove all containers, volumes, and orphaned resources:
   ```bash
   docker-compose down --volumes --remove-orphans
   docker system prune -a --volumes
   ```
2. Force rebuild and recreate the production environment:
   ```bash
   docker-compose build --no-cache
   docker-compose up --force-recreate
   ```
