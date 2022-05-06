import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import List from './components/List'

class App extends Component {
    render () {
        let { showList, reason, going, errMsg } = this.state
        return (
            <div id="app">
                <Search
                    id="Search"
                    reason={reason}
                    going={going}
                    updateList={this.updateList}/>
                
                <List
                    id="List"
                    showList={showList}
                    reason={reason}
                    errMsg={errMsg}
                    going={going}/>
            </div>
        )
    }
    
    state = {
        showList: [],
        reason: '',
        going: '',
        errMsg: '网络错误',
    }
    
    updateList = (showList, going, reason, errMsg = '网络错误') => {
        this.setState({
            showList,
            going,
            reason,
            errMsg,
        })
    }
}

export default App
