# Docker commands

## `Docker`

### `Run`

```sh
# Syntax
docker run {options} {image_name} {command}
```

Optional parameters :

- `-d` : detached (run in background)
- `-it` : interactive terminal
- `--rm` : remove container after it stops
- `-p {external:internal}` : ports to expose
- `-v {local_path:container_path}` : volumes to mount to container
- `--network {my_network}` : (Docker) virtual network for the container
- `--name {my_container}` : container name

```sh
# Example
docker run -itp 3000:3000 --rm --name my_container debian bash
```

## `Docker-compose`

### `up`

Build & run all containers

Optional parameters :

- `-d` : detached (run in background)
- `--build` : force rebuilding the image
- `-f` : use a specific file (`docker-compose -f "docker-compose.yml" up` will use only the base compose file and bypass the override if any)

```sh
# Example
docker-compose up -d --build
```

### `Down`

```sh
docker-compose down
```
