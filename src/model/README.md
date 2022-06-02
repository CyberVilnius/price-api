# Purpose of this folder

Model generally is about describing all bussiness oriented logic, including all data access you do to achieve your bussiness goals. So usually this folder is quite unique for each microservice.

There are example repository files, each repsonsible for defining interaction with a single firebase collection. Because Firestore is schemaless, the logic for creating, deleting, updating documents and collections is simple. Collections are created automatically if at least one document is saved to them, if all documents are deleted from a collection the collection is also removed.


Side notes:
- It's always good practice to keep all write operations in single place. If you will spread write logic into diff code places or, even worse, diff code bases - that would become maintainance headache quite soon.
- We do prefer throw (promises) across this codebase instead callbacks, because exception wrapping, bubbling field errors and better maintainability/consistency. Just do not use throw instead return - throw is for exceptional situations (not occuring during normal operation)
