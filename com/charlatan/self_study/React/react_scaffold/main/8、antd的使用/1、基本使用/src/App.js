import React, { Component } from 'react'
import { Button, DatePicker } from 'antd'
import 'antd/dist/antd.css'
import { WechatOutlined } from '@ant-design/icons'

const { RangePicker } = DatePicker

class App extends Component {
	
	render () {
		return (
				<div>
					123
					<button>按钮</button>
					<Button type="primary">Primary Button</Button>
					<Button>Primary Button</Button>
					<Button type="link">Primary Button</Button>
					<Button type="text">Primary Button</Button>
					<Button type="ghost">Primary Button</Button>
					<Button type="dashed">Primary Button</Button>
					
					
					<WechatOutlined/>
					
					<DatePicker onChange={this.onChange}/>
					<RangePicker showTime/>
				</div>
		)
	}
	
	onChange (date, dateString) {
		console.log (date, dateString)
	}
}

export default App
