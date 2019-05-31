## Intro to React-Redux

### Objectives

* Refactor sushi saga to use react-redux!
* Review: store, actions, reducers, dispatch.
* New toys: Provider, connect, mapStateToProps, mapDispatchToProps, combineReducers.

### State to be managed

* sushi
* eaten
* budget

### What the fuck are Higher Order Components?



### Steps

* Create a default state, reducer, and store.
* Wrap the App with the Provider and give it the store.
* What does connect() return? What about connect()(Component)?
* First, render sushi without manual prop passing.
* Now, render the table without threading props.
* Now, fix the click handler to eat sushi!
* Last, fix the more sushi button.

--

* Okay, push the code and students clone.
  * 10 minutes to implement the budget functionality.
  * Challenge to click plates and restore the sushi.
  * Optional review.

### Minor notes

* mapState is a function mapping redux state to data props
* mapDispatch is a function mapping redux dispatch to behavior props
  * Both mapStateToProps and mapDispatchToProps get an optional second arg of "ownProps", i.e. props not from redux
* connect is a function that takes those callbacks and makes a custom component wrapper for you to augment your component with the needed props!
* Which means you have to call it twice. Once to generate your "componentWrapper" and then call that to make the wrapped component!
  * Judiciously console.log here.
* Sidenote: Passing null or falsey values for mapStateToProps causes the component to not be subscribed to the store/re-render. Falsey mapDispatchToProps means you'll pass the dispatch function in as a prop because so many things need to trigger actions.
