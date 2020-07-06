## type check를 위한 모듈

- 정의한 스키마와 실제 코드 사이에 다른 타입을 처리하도록 되어 있지만, 타입스크립트에서 이를 알아채지 못해서 사용하는 모듈 2가지 입니다.

### gql-merge

- graphql-to-typescript 을 실행하기 전에 여러 파일로 정의된 graphql을 하나의 파일로 합쳐주는 것이 필요한데 그 역할을 하는게 gql-merge입니다.

### graphql-to-typescript

- gql-merge로 생성한 schema.graphql에 graphql 스키마 정의를 ./src/types/graph.d.ts 타입스크립트 파일로 만듭니다.
