# Docker/K8s/Minikube Commands

## Series 1: Dive Into Docker

1. `docker version`: check version of docker
2. `docker run hello world`

## Series 2: Manipulating Containers with the Docker Client

1. `docker run <image name> <default override>`
2. `docker ps`: lists all running containers
3. `docker ps --all`: lists all running containers (ever created)
4. `docker run` = `docker create` + `docker start`
5. `docker start -a <id>`: restart a exited container
6. `docker system prune`: deletes stopped containers
7. `docker logs <container id>`: shows log output
8. `docker stop <id>`: stops running container
9. `docker kill <id>`: kills the running container
10. `docker exec -it <id> <command>`: lets us exec into the container
11. `docker exec -it <id> sh`: exec into shell (need to run the image, then this will work)
12. `docker run -it <image> sh`: to exec in a container

## Series 3: Building Custom Images Through Docker Server

1. `docker build .`: builds dockerfile
2. `docker build -t <docker-id/repo> latest`: tagging
3. `docker commit -c`

## Series 4: Making Real Projects with Docker

1. `docker run -p 8080:8080 <image id>`: port mapping

## Series 5: Docker Compose with Multiple Local Containers

1. `docker run <myimage>` -> `docker-compose up`: looks for docker-compose.yml file
2. `docker build . and docker run <myimage>` -> `docker-compose up --build`
3. `docker run -d redis`: runs in the background
4. `docker stop <container id>, <container id>`: stops container
5. `docker-compose up`: it creates a network for you where you can run diff. containers at the same time
6. `docker-compose up -d`: launch containers in the background (so you can still run commands in the terminal)
7. `docker compose down`: stop and remove containers (all)
8. `docker-compose ps`: Check the status of docker containers in a network (look for a docker-compose file inside the specific directory)

## Series 6: Creating Production-Grade Workflow

1. `docker build -f Dockerfile.dev`: specifies which file to use to build
2. `docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image_id>` -> bash
   `docker run -p 3000:3000 -v /app/node_modules -v pwd:/app <image_id>` -> zsh
3. `docker exec -it <image_id> npm run test`: attaching to a container
4. `docker run -it -v "/$(pwd)":/app ruby:2.3 sh`: Running and copying over directory in ZSH
5. `docker attach <image id>`: we are attaching to `stdin, stdout, and stderror` for that container

## Kubernetes

1. `kubectl cluster-info`
2. `kubectl apply -f <filename>`
3. `kubectl apply -f k8s (directory that houses all the k8s config file)`
4. `kubectl get pods`: prints the status of all running pods
5. `kubectl get services`: prints the status of all running services
6. `kubectl describe <object type> <object name>`: Get detailed info about an object
7. `kubectl delete -f <config file>`: Remove an object -> Imperative
8. `kubectl get deployments`: get deployments
9. `kubectl set image <type of object>/<object_name> <container_name=<new_image_to_use>`: updating image to use the latest image, also we are using the set command to update the deployment image
10. `kubectl get storageclass`: options for creating a persistent volume
11. `kubectl get pv`: gets all persistent volumes
12. `kubectl get pvc`: gets all claims
13. `kubectl create secret generic <secret_name> --from-literal key=value (PG_PASSWORD=hello)`
14. `kubectl get secrets`: gets the secret that was created

15. `kubectl run nginx --image nginx`: to create a pod in this nginx
16. `kubectl create -f pod-definition.yml`: create a pod (imperative)
17. `kubectl create -f replicaset-definition.yml`: create a replica set
18. `kubectl replace -f replicaset-definition.yml`: update a file if the contents have been changed
19. `kubectl get replicaset`: get replica sets
20. `kubectl get deployments`: get deployments

## Minikube

1. `minikube status`
2. `minikube ip`: prints out the IP address of the VM running on local machine
3. `minikube dashboard`: opens k8s dashboard
