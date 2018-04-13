import React, { Component } from 'react';

export default class CommonInput extends Component {
    constructor() {
        super()
        this.state = {
            username:'',
            common:''
        }
    }
    handleInput(event) {
        this.setState({
            username:event.target.value
        })
    }
    handleTextarea(event) {
        this.setState({
            common: event.target.value
        })
    }
    submit() {
        var {username,common} = this.state;
        this.props.inputCallback({ username, common })
    }
    render() {
        return (
            <div>
                <div>
                    <span>用户名：</span>
                    <input value={this.state.username} onChange={this.handleInput.bind(this)} />
                </div>
                <div>
                    <span>内容：</span>
                    <textarea value={this.state.common} onChange={this.handleTextarea.bind(this)}/>
                </div>
                <div>
                    <button onClick={this.submit.bind(this)}>评论</button>
                </div>
            </div>
        )
    }
}