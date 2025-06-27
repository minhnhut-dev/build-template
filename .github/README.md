# Build Template Project

A modern Next.js application built with TypeScript, Prisma ORM, PostgreSQL database, and Docker deployment. This project provides a robust foundation for building scalable web applications with a focus on file management and build processes.

## 🚀 Features

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Prisma ORM** - Database toolkit for PostgreSQL
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Docker** - Containerized deployment
- **Nginx** - Reverse proxy configuration
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation
- **Lucide React** - Beautiful icons

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20.11.0 or higher)
- **Yarn** or **npm** package manager
- **Docker** and **Docker Compose**
- **PostgreSQL** database (for local development)
- **Git**

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd build-template
```

### 2. Install Dependencies

```bash
# Using Yarn (recommended)
yarn install

# Or using npm
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Configure the following environment variables:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"

# Next.js Configuration
NODE_ENV=development
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000

# Add other environment variables as needed
```

### 4. Database Setup

#### Option A: Local PostgreSQL

1. Install and start PostgreSQL
2. Create a database
3. Update the `DATABASE_URL` in your `.env` file

#### Option B: Docker PostgreSQL

```bash
# Start PostgreSQL with Docker
docker run --name postgres-db \
  -e POSTGRES_PASSWORD=your_password \
  -e POSTGRES_DB=your_database \
  -p 5432:5432 \
  -d postgres:latest
```

### 5. Database Migration

```bash
# Generate Prisma client
yarn prisma generate

# Run database migrations
yarn prisma migrate dev

# (Optional) Seed the database
yarn prisma db seed
```

### 6. Start Development Server

```bash
# Start the development server
yarn dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Project Structure

```
build-template/
├── app/                    # Next.js App Router pages
├── components/             # Reusable React components
├── lib/                    # Utility functions and configurations
│   ├── generated/         # Prisma generated client
│   └── prisma.ts          # Prisma client configuration
├── prisma/                # Database schema and migrations
│   ├── schema.prisma      # Database schema definition
│   └── migrations/        # Database migration files
├── public/                # Static assets
├── styles/                # Global styles and Tailwind CSS
├── types/                 # TypeScript type definitions
├── hooks/                 # Custom React hooks
├── constants/             # Application constants
├── nginx/                 # Nginx configuration
├── scripts/               # Build and deployment scripts
├── Dockerfile             # Docker container configuration
├── docker-compose.yml     # Docker Compose services
└── package.json           # Project dependencies and scripts
```

## 🐳 Docker Deployment

### Local Docker Development

1. **Build and run with Docker Compose:**

```bash
# Build and start all services
docker-compose up --build

# Run in detached mode
docker-compose up -d --build
```

2. **Access the application:**
   - Main application: `http://localhost:4100`
   - Nginx proxy: `http://localhost:4444`

### Production Deployment

1. **Build the production image:**

```bash
# Build the Docker image
docker build -t build-template:latest .

# Or using docker-compose
docker-compose -f docker-compose.prod.yml build
```

2. **Run in production:**

```bash
# Using Docker Compose
docker-compose -f docker-compose.prod.yml up -d

# Or using Docker directly
docker run -d \
  --name build-template \
  -p 4100:4100 \
  -e DATABASE_URL="your-production-db-url" \
  -e NODE_ENV=production \
  build-template:latest
```

## 📊 Database Schema

The application uses PostgreSQL with the following main models:

### FileType
- `id` - Primary key
- `name` - File type name (Contract, POH, IM, Invoice)
- `status` - Active status
- `builds` - Relationship to FileBuild

### FileBuild
- `id` - Primary key
- `numbers_created` - Number of files created
- `fileTypeId` - Foreign key to FileType
- `fileType` - Relationship to FileType

## 🔧 Available Scripts

```bash
# Development
yarn dev          # Start development server
yarn build        # Build for production
yarn start        # Start production server
yarn lint         # Run ESLint

# Database
yarn prisma generate    # Generate Prisma client
yarn prisma migrate dev # Run migrations
yarn prisma studio     # Open Prisma Studio
yarn prisma db push    # Push schema changes
yarn prisma db seed    # Seed database

# Docker
docker-compose up --build    # Build and start services
docker-compose down          # Stop and remove services
docker-compose logs          # View service logs
```

## 🌐 Nginx Configuration

The project includes Nginx configuration for reverse proxy:

- **Port**: 4444
- **Proxy**: Routes traffic to the Next.js application on port 4100
- **Configuration**: `nginx/nginx.conf`

## 🔒 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `DATABASE_URL` | PostgreSQL connection string | Yes | - |
| `NODE_ENV` | Application environment | No | development |
| `NEXTAUTH_SECRET` | NextAuth secret key | Yes | - |
| `NEXTAUTH_URL` | NextAuth callback URL | Yes | - |

## 🚀 Deployment Options

### 1. Docker Deployment (Recommended)

```bash
# Production deployment
docker-compose -f docker-compose.prod.yml up -d
```

### Common Issues

1. **Database Connection Error**
   - Verify `DATABASE_URL` is correct
   - Ensure PostgreSQL is running
   - Check database permissions

2. **Prisma Client Generation Error**
   ```bash
   yarn prisma generate
   ```

3. **Docker Build Failures**
   - Clear Docker cache: `docker system prune -a`
   - Rebuild without cache: `docker-compose build --no-cache`

4. **Port Conflicts**
   - Change ports in `docker-compose.yml`
   - Check if ports 4100 or 4444 are in use

### Logs and Debugging

```bash
# View Docker logs
docker-compose logs -f

# View specific service logs
docker-compose logs -f build-file

# Access container shell
docker-compose exec build-file sh
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

For support and questions:

- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Happy Coding! 🎉**
