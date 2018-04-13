import React, { Component } from 'react';

export default class CommonList extends Component {
    static defaultProps = {
        commonDataList:[]
    }
    constructor() {
        super()
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                {
                    this.props.commonDataList.map((val,ind) => {
                        return <div key={ind}>
                            <span>{val.username}</span>
                            <span>{val.common}</span>
                        </div>
                    })
                }
            </div>
        )
    }
}