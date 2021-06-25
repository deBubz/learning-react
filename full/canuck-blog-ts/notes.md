# yep

> im a clown for not pushing work

1. setup
   - react typescript + react-router-dom + react strap, pick bootstrap theme cdn/fonts
   - server setup config with bootstrap keys
   - set up logger
   - setup firebase keys
2. firebase
   - add frontend config info
   - backend serviceAccount info **HIDE THIS**
3. client setup
   - so far new things are components in ts
   - props interface, routes interface
   - routes list in config
   - setting up basic navigation (and layout?)
   - component defaultProps is pretty cool, could solve alot of *undefined* variable problems while rendering
4. client auth setup
   - setup connection with firebase
   - holy crap reducer pattern
   - fucking useReducer all the bs is in `context/firebase.ts` & `modules/auth.ts`
   - useReducer + useContext
   > pretty interesting way to debug with useState
   - reactstrap pretty cool
   - pretty much the samething with context provider and auth route
   - holycrap `login` page is nuts
5. server side authentication
   - mongo model and controllers
   - firebase admin setup to login verify
   - connect with frontend
   - So far, everything is similar, the only difference is extractFirebase middleware
   - Client now,
