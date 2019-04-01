import React from 'react';



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [{ name: '1', id: 1 }, { name: '2', id: 2 }, { name: '3', id: 3 }]
        }
    }


    render() {
        console.log(this.state.list);
        return (
            <div>
                list列表
                {this.state.list.map((item, index) => {
                    return (
                        // eslint-disable-next-line
                        <p key={index}>{item.name}</p>
                    )
                })}

            </div>

        )
    }
}

export default App;