import React,{Component} from 'react'

class AddTodo extends Component {
        state={
           content:'',
           checked: false
        }
        handleChange=(e)=>{
            this.setState({
                content:e.target.value
            })
        }
        handleSubmit=(e)=>{
            e.preventDefault();
            this.props.addTodo(this.state)
            this.setState({
                content:''
            }
            )
        }

        

        render(){
            return(
                <div>
                    <form onSubmit={this.handleSubmit}>

                    <input type="text" className="add" id="add" onChange={this.handleChange} disabled={this.state.checked}  placeholder="Add New Todo" value={this.state.content}/>
                   
                   <label>
                        <input class="filled-in" value={this.state.checked} onChange={(e) => this.setState({checked:!this.state.checked})} type="checkbox"/>
                        
                        <span>Completed:</span>
                    </label>
                    </form>
                </div>
            )
        }
}

export default AddTodo;