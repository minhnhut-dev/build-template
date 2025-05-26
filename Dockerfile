# Use official Node.js 20.11.0 image
FROM node:20.11.0

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock first, then install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of your application source
COPY . .

# Build Next.js app (optional, if you want to build during image build)
RUN yarn build

# Expose port 4100
EXPOSE 4100

# Start the Next.js app
CMD ["yarn", "start"]
