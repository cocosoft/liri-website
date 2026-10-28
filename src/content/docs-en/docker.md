---
title: "Docker Deployment"
description: ""
group: "Deployment"
order: 5
source: "安装部署/docker.md"
---

> This page is synced from `app/docs/安装部署/docker.md` in the GitHub repository. If it differs from the source, the repository wins.
# Liri Docker Installation Guide

> Applies to: v0.4.x+ | Last updated: 2026-07-09

---

## 1. Overview

The Liri Docker image uses a **multi-stage build** strategy and shares the same source code as the Windows desktop version:

| Windows version | Docker version |
|---|---|
| `bun build --target=bun` | `bun build --target=bun` in the Dockerfile |
| `Liri_coding.exe` | `bun /app/dist/pyapp.js` in the container |
| Double-click the exe to run | `docker compose run --rm app` |
| Startup script sets environment variables | `.env` file + `docker-compose.yml` |
| `dist/` directory | `/app/dist/` in the `docker` image |

**Build stages**:

| Stage | Description | Time |
|------|------|:--:|
| 1. native-builder | Compiles the Rust native acceleration plugin (`rust:1.84-slim-bookworm`) | 2-3 minutes |
| 2. app-builder | `bun install` + `bun build` to bundle the JS bundle (`oven/bun:latest`) | 1-2 minutes |
| 3. runtime | Assembles the minimal runtime image (`oven/bun:latest`) | ~10 seconds |

**Final image**: about 60MB (excluding the base layer cache), containing the Bun runtime + build artifacts + Rust native plugin + docs.

---

## 2. System Requirements

| Item | Minimum | Recommended |
|------|------|------|
| Operating system | Linux (Ubuntu 22.04+ / Debian 12+ / CentOS 9+) | Ubuntu 24.04 |
| Docker Engine | 24.0+ | 27.0+ |
| Docker Compose | 2.20+ (or the `docker compose` plugin) | 2.29+ |
| Memory | 512MB | 2GB+ |
| Disk space | 2GB+ during build (including the Rust build cache), about 200MB at runtime | 5GB+ |

> Windows/macOS users can run it through Docker Desktop; see the [docker-run.bat](../../docker/docker-run.bat) one-click script for details.

---

## 3. Quick Start (5 minutes)

### 3.0 Get the Code

```bash
# Clone the repository
git clone https://github.com/cocosoft/Liri.git
cd Liri
```

> You can also [download the ZIP](https://github.com/cocosoft/Liri/archive/refs/heads/main.zip), extract it, and enter the directory.

### 3.1 Configure the API Key

```bash
cd app
cp .env.example .env
```

Edit `.env` and enter your API key (use either approach below):

```bash
# Option 1 (recommended — unified format, works with any provider)
PROVIDER_DEEPSEEK_KEY=sk-xxx
PROVIDER_DEEPSEEK_BASE_URL=https://api.deepseek.com
PROVIDER_DEEPSEEK_MODEL=deepseek-chat

# Option 2 (backward compatible)
DEEPSEEK_API_KEY=sk-xxx
```

### 3.2 Build the Image

```bash
cd app
docker compose -f docker/docker-compose.yml build
```

The first build takes about 3-5 minutes; subsequent builds are much faster thanks to Docker layer caching.

> If the Rust compilation fails, core functionality is unaffected — the native plugin degrades gracefully. You can edit the Dockerfile and comment out the `native-builder` stage to skip it.

### 3.3 Start

```bash
# Interactive mode (same as double-clicking the exe on Windows)
docker compose -f docker/docker-compose.yml run --rm app

# Background service mode
docker compose -f docker/docker-compose.yml up -d

# Specify the startup mode
docker compose -f docker/docker-compose.yml run --rm app mcp     # MCP service
docker compose -f docker/docker-compose.yml run --rm app daemon  # Daemon
```

> TIP: You can also `cd app/docker` and run directly, omitting the `-f` flag:
> ```bash
> cd app/docker
> docker compose build && docker compose run --rm app
> ```

---

## 4. Data Persistence

The Docker version persists data using **named volumes**, whose lifecycle is independent of the container:

| Volume | Container path | Description |
|------|---------|------|
| `liri_data` | `/app/app/data` | Databases, sessions, memory, attachments, caches, etc. |
| `liri_logs` | `/app/app/logs` | Log files |

- `docker compose down` **does not delete data**
- Full cleanup: `docker compose -f docker/docker-compose.yml down -v`

**Back up data**:

```bash
docker run --rm \
  -v liri_data:/data \
  -v $(pwd):/backup \
  alpine tar czf /backup/liri-backup-$(date +%Y%m%d).tar.gz -C /data .
```

---

## 5. Directory Structure

```
app/
├── .env                      ← environment variables (create it yourself)
├── .env.example              ← configuration template
├── docker/
│   ├── Dockerfile            ← multi-stage build definition
│   ├── docker-compose.yml    ← Compose service configuration
│   ├── docker-run.bat        ← Windows one-click startup script
│   ├── Makefile              ← Linux/Mac one-click management
│   └── Docker引导说明.txt    ← detailed guide document
└── docs/安装部署/
    └── docker.md             ← this document
```

---

## 6. Common Commands

| Action | Command |
|------|------|
| First build | `docker compose -f docker/docker-compose.yml build` |
| Rebuild (without cache) | `docker compose -f docker/docker-compose.yml build --no-cache` |
| Interactive mode | `docker compose -f docker/docker-compose.yml run --rm app` |
| MCP service | `docker compose -f docker/docker-compose.yml run --rm app mcp` |
| Start in the background | `docker compose -f docker/docker-compose.yml up -d` |
| View live logs | `docker compose -f docker/docker-compose.yml logs -f` |
| View the last 100 lines | `docker compose -f docker/docker-compose.yml logs --tail 100` |
| Stop the service | `docker compose -f docker/docker-compose.yml down` |
| Full cleanup (including data volumes) | `docker compose -f docker/docker-compose.yml down -v` |
| Enter the container shell | `docker compose -f docker/docker-compose.yml run --rm app /bin/sh` |
| Export the image | `docker save liri-app:latest -o liri.tar` |
| Import the image | `docker load -i liri.tar` |

### Makefile Shortcuts (Linux/Mac)

```bash
cd app/docker
make setup      # one-click setup + build
make build      # Build the image
make run        # Interactive mode
make up         # Background service mode
make logs       # View logs
make down       # Stop the service
make clean      # Clean up images and data
```

### Windows One-click Script

```cmd
cd app\docker
docker-run          # Interactive mode
docker-run setup    # one-click setup + build + run
docker-run build    # Build the image
docker-run up       # Background service mode
docker-run logs     # View logs
docker-run down     # Stop the service
```

---

## 7. Production Deployment Recommendations

### 7.1 Security Configuration

```bash
# A strong password is required
JWT_SECRET=<your-64-char-random-string>

# Restrict allowed origins
CORS_ORIGINS=https://your-domain.com
```

### 7.2 Resource Limits

Add the following to `docker-compose.yml`:

```yaml
services:
  app:
    deploy:
      resources:
        limits:
          memory: 2G
          cpus: '2'
        reservations:
          memory: 512M
```

### 7.3 Reverse Proxy

Using Nginx or Traefik as a reverse proxy exposing port 3000 is recommended:

```nginx
# Nginx example
server {
    listen 443 ssl;
    server_name liri.your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### 7.4 Health Check

`docker-compose.yml` already includes a built-in health check (`curl <http://localhost:3000/health`>), and orchestration can depend on this status.

### 7.5 Log Management

```bash
# Limit the Docker log size (docker-compose.yml)
services:
  app:
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
```

Integrating an external logging system (Loki / ELK / CloudWatch) is recommended.

### 7.6 Automatic Restart

```yaml
services:
  app:
    restart: unless-stopped   # already enabled in docker-compose.yml
```

---

## 8. Updating and Upgrading

```bash
# Pull the latest code
git -C ~/Liri pull origin main
# If this is a fresh install
git clone https://github.com/cocosoft/Liri.git ~/Liri

cd ~/Liri/app
docker compose -f docker/docker-compose.yml build --no-cache app

# Restart the service
docker compose -f docker/docker-compose.yml up -d

# View startup logs
docker compose -f docker/docker-compose.yml logs -f
```

> Updating does not delete data volumes; sessions, memory, and other data remain intact.

---

## 9. Build Variants

> This section refers to the Build Variant Optimization Plan.

Liri supports 4 build variants: `core`, `personal`, `coding`, and `enterprise`.

Docker builds default to the `coding` variant. To build another variant:

```bash
# Option 1: modify the build-variant command in the Dockerfile
# RUN bun run scripts/build-variant.ts --variant=enterprise

# Option 2: pass it as a build argument (pending implementation in build-variant-optimization P0-2)
docker build \
  --build-arg BUILD_VARIANT=enterprise \
  -t liri-enterprise:latest \
  -f docker/Dockerfile .
```

---

## 10. FAQ

**Q: The build fails with "bun: command not found"?**
A: Make sure Docker can pull the `oven/bun:latest` image normally. If the network is restricted, you can run `docker pull oven/bun:latest` in advance.

**Q: The Rust native plugin fails to compile?**
A: Core functionality is unaffected; the native plugin degrades gracefully. To skip it: edit `Dockerfile` and comment out the `native-builder` stage and the `COPY --from=native-builder` line.

**Q: Running reports "EPERM" or a permission error?**
A: The Dockerfile already pre-creates the data directory and runs `chown`. If you still hit permission issues:
```bash
docker compose -f docker/docker-compose.yml run --rm -u root app chown -R liri:liri /app
```

**Q: Chinese characters are garbled in interactive mode?**
A: Add the following to `environment` in `docker-compose.yml`:
```yaml
- LANG=C.UTF-8
- LC_ALL=C.UTF-8
```

**Q: Port 3000 is already in use?**
A: Change the port mapping in `docker-compose.yml`, for example to `"3001:3000"`.

**Q: How do I check the size of the built image?**
```bash
docker images | grep liri
```

---

## Reference Files

| File | Description |
|------|------|
| [Dockerfile](../../docker/Dockerfile) | Multi-stage build definition |
| [docker-compose.yml](../../docker/docker-compose.yml) | Compose service configuration |
| [Docker setup guide](../../docker/Docker引导说明.txt) | Detailed guide document |
| [docker-run.bat](../../docker/docker-run.bat) | Windows one-click startup script |
| [Makefile](../../docker/Makefile) | Linux/Mac management script |
| [.env.example](../../.env.example) | Environment variable template |
| Build Variant Optimization Plan | Variant build plan |
