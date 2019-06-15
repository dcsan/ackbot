Simple Ack bot for wechaty

how to use:

```
cp .env.example .env
```

edit the .env file to your own configuration

run server:
```
cd server && yarn dev
```

deploy first time
```
cd server
bin/cli firstRun
```

deploy again
```
bin/cli qd
```
