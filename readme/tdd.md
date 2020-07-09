# TDD

## 목적

- Test Schemas
- Test Resolvers

## 테스트

- Static Type checking
- Unit tests
- Integration tests
- Ene to End tests

## jest

- `npx ts-jest config:init` 로 시작합니다.

- dbHandler.ts 파일에서 test에서는 mongodb-memory-server 를 사용합니다.
  - MongoDB를 메모리에서 빠르게 실행할 수 있게 해주는 모듈입니다. 또한 Test Suite마다 독립적인 데이터베이스 환경을 제공해서 Test Suite끼리의 의존성을 없앨 수 있습니다.
