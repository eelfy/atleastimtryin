## node version
✨v16.14.0✨

## Project start

```sh
npm i
```
```sh
cd frontend
npm i
cd ..
```
#### launch frontend server
```sh
npm run front
```
#### launch backend server
for backend iam use `json-server` so here u can check more information about it https://github.com/typicode/json-server
and for `json-server-auth` as JWT authentication middleware https://github.com/jeremyben/json-server-auth
(if u change port for json-server u also need to sync it in frontend/src/utils/customFetch in apiPath variable)
```sh
npm run back
```