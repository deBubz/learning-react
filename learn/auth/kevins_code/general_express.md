# general notes for documentation

## express

### `app.post(path, callback [, callback])`

- POST request to a route
- `path` string representing a path, path pattern, regex
- `callback` can be
  - middleware function, series of middleware functions (seperated by comma)
  - these multiple callback functions behaves like middle ware, except these callbacks can inboke `next('route')` to pass the remaining callbacks

> same for `app.get()`