# docker

- `docker build -t "todo-docker" .`

  - process.dlopen(module, path.toNamespacedPath(filename))
    - 이런 에러가 떳는데 노드버전이 패키지만들때 사용한거랑 도커만들때 사용한거랑 달라서 난것같음.
    - 그래서 도커 내부 package.json 을 설치할때 node랑 도커 만들때 node랑 다르니까 에러난듯함.

- `docker run -p 4000:5000 todo-docker`
  - 도커내부에서 코드가 5천번 코드를 사용하고있고
  - 도커파일에서 expose로 4천번을 뚫어주어서 연결시켜줍니다.
