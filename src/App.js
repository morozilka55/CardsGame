import React from 'react';
import {useState} from 'react';
import './style.css';

export const App = (props) => {
    const store = props.store;
    const [isShow, setIsShow] = useState(true);
    const lin1 = store.getState().cards.slice(0, 8)
    const lin2 = store.getState().cards.slice(8, 16)

    return (
        <>
            <div className='container'>
                {
                    isShow && lin1.map(el => <Card
                            key={el.id}
                            value={el.value}
                            isShow={el.isShow}
                            onClick={() => {
                                if (el.isFinish)
                                    return;
                                store.dispatch({
                                    type: 'tapOnCard',
                                    id: el.id
                                })
                            }}
                        >
                            {el}
                        </Card>
                    )
                }
            </div>
            <div className='container'>
                {
                    isShow && lin2.map(el => <Card
                            key={el.id}
                            value={el.value}
                            isShow={el.isShow}
                            onClick={() => {
                                if (el.isFinish)
                                    return;
                                store.dispatch({
                                    type: 'tapOnCard',
                                    id: el.id
                                })
                            }}
                        >
                            {el}
                        </Card>
                    )
                }
            </div>
        </>
    );
};

const Card = (props) => {
    return <div
        className='card'
        onClick={() => props.onClick()}
    >
        {
            props.isShow && props.value
        }
    </div>
}
