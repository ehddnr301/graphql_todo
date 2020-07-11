## type check를 위한 모듈

- 정의한 스키마와 실제 코드 사이에 다른 타입을 처리하도록 되어 있지만, 타입스크립트에서 이를 알아채지 못해서 사용하는 모듈 2가지 입니다.

### gql-merge

- graphql-to-typescript 을 실행하기 전에 여러 파일로 정의된 graphql을 하나의 파일로 합쳐주는 것이 필요한데 그 역할을 하는게 gql-merge입니다.

### graphql-to-typescript

- gql-merge로 생성한 schema.graphql에 graphql 스키마 정의를 ./src/types/graph.d.ts 타입스크립트 파일로 만듭니다.
- package.json 에서 `"types": "graphql-to-typescript ./src/schema.graphql ./src/types/graph.d.ts"` 명령에 사용됩니다.

## graphql 개발 구성


### merge-graphql-schemas

- fileLoader로 `*.graphql` 파일과 `*.resolvers.*` 파일을 모아줍니다.
  - ts환경이지만 .ts만 fileLoader로 모을경우 js로 컴파일 했을때 못찾기 때문에 .resolvers.js 와 .resolvers.ts 를 모두 찾기 위해 사용합니다.
- `mergeTypes` 와 `mergeResolvers`를 이용하여 fileLoader로 모은 것을 합쳐줍니다.

### graphql-tools

- `makeExecutableSchema` 를 이용해서 type과 resolver를 합쳐줍니다.
- 결국 schema라는 변수에 다 담기게 됩니다.