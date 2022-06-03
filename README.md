# React-class-component
#### Functional Component
```
funtion app(){
return(
<h1>Hello World</h1>
)
}
```
### Class Component
```
import component from react
class App extends Component{
constructor() {
super()
this.state = {
name: 'Live',
}
}
render(){
return(
<h1>Hello {this.state.name}</h1>
)
}
}


```
When React Decides to rerender
When State is completly different object in memeory then react will reload.
In the code when you update the state of name it's just pointing to the same memory location it's not changing anything that's why the onclick call back funtion won't work to change the value

```
import component from react
class App extends Component{
constructor() {
super()
this.state = {
name: 'Live',
}
}
render(){
return(
<h1>Hello {this.state.name}</h1>
<button onClick={()=>{this.state.name = 'Soujanya'}} >Change Button</button>
// This wouldn't work
)
}
}


```


```
import component from react
class App extends Component{
constructor() {
super()
this.state = {
name: 'Live',
}
}
render(){
return(
<h1>Hello {this.state.name}</h1>
<button onClick={()=>{this.setState({name:'Soujany'})}} >Change Button</button>
//This will work
)
}
}

```

Shallow Merge: It will change only something that is set by setState method. And it will make the change even if that means changes in first class is not of even same type.
Like if name is object and then setstate set it as string it will work.
Why after refereshed the valuse of class is revert back to first value
Because setstate is called asynchronously in react. if you want to make sure if funtion runs after set is changes you have to add callback like this code
