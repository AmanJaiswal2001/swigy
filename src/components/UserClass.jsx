
import React from "react"
class UserClass extends React.Component{

    constructor(props)
    {
        super(props);

        this.state={
            count:0,
            count1:1
        }
    }
    render(){

        const {name,Location,Contact}=this.props
        const{count,count1}=this.state
        return(
            <div>
            <h1>count:{count}</h1>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                    
                });
                // console.log(count)
            }} >count Increase</button>
            {/* <h1>count:{count1}</h1> */}
                <h2>Name:{name}</h2>
                <h2>Location:{Location}</h2>
                <h2>Contact:{Contact}</h2>
            </div>
        )
    }
}
export default UserClass;