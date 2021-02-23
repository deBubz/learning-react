# some generic notes going through the thing


> lets also do components 

## state manipulation

- set state only mutate the specified prop unlike hooks
- but you can have multiple hooks

## stateful v stateless

one manage state and other doesnt

- good to split components so some stateful manage logic
  - stateless manage jsx

> split back to class?

## passing method references between components

> binding is weird

- technically its similar to annonymous funcs
  - apparently it is bad for performance if using annonymous functions

## two way binding

- this might be ok to try
- helps better create creating stateless components

> wait Im already doing this

## aight some practice assignment

- [] Create TWO new components: UserInput and UserOutput
- [] UserInput should hold an input element, UserOutput two paragraphs
- [] Output multiple UserOutput components in the App component (any paragraph texts of your choice)
- [] Pass a username (of your choice) to UserOutput via props and display it there
- [] Add state to the App component (=> the username) and pass the username to the UserOutput component
- [] Add a method to manipulate the state (=> an event-handler method)
- [] Pass the event-handler method reference to the UserInput component and bind it to the input-change event
- [] Ensure that the new input entered by the user overwrites the old username passed to UserOutput
- [] Add two-way-binding to your input (in UserInput) to also display the starting username
- [] Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets


