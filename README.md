# Change Streams Example

Start `mongod`:

```sh
mongod --dbpath <database path> --replSet rs0 --bind_ip localhost --enableMajorityReadConcern
```

Initiate a new replica set (in a different terminal):

```sh
mongo
rs.initiate()
```

Reference: [Convert a Standalone to a Replica Set](https://docs.mongodb.com/master/tutorial/convert-standalone-to-replica-set/)
