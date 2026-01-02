# -----------------------------
# Default target
# -----------------------------
default: help

# -----------------------------
# Variables
# -----------------------------
COMPOSE=docker compose
SERVICE=frontend

# -----------------------------
# Help
# -----------------------------
.PHONY: help
help: ## Show available make targets
	@awk 'BEGIN {FS = ":.*##"} /^[a-zA-Z_-]+:.*##/ {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

# -----------------------------
# Lifecycle
# -----------------------------
.PHONY: start
start: build up ## Build and start local dev environment

.PHONY: stop
stop: ## Stop local environment
	$(COMPOSE) down --remove-orphans

.PHONY: restart
restart: stop start ## Restart local environment

# -----------------------------
# Build
# -----------------------------
.PHONY: build
build: ## Build Docker image
	$(COMPOSE) build

# -----------------------------
# Run
# -----------------------------
.PHONY: up
up: ## Start containers
	$(COMPOSE) up -d

# -----------------------------
# Logs
# -----------------------------
.PHONY: logs
logs: ## Tail container logs
	$(COMPOSE) logs -f

# -----------------------------
# Node / npm commands
# -----------------------------
.PHONY: npm_install
npm_install: ## Install npm dependencies
	$(COMPOSE) run --rm $(SERVICE) npm install

.PHONY: npm_ci
npm_ci: ## Clean install npm dependencies
	$(COMPOSE) run --rm $(SERVICE) npm ci

.PHONY: npm_update
npm_update: ## Update npm dependencies
	$(COMPOSE) run --rm $(SERVICE) npm update

# -----------------------------
# Utility
# -----------------------------
.PHONY: clean
clean: ## Remove local build artifacts
	rm -rf node_modules dist
