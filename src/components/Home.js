import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Home = () => {
    const dispatch = useDispatch();
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);
    const amount = useSelector(state => state.amount);
    return (
        <div className="container text-center my-3">
            <h3 className="">Deposit or Withdraw Money</h3>
            <div className="d-flex justify-content-center align-items-center my-3">
                <button disabled={amount <= 0} className="btn btn-primary mx-3" onClick={() => { withdrawMoney(100) }}>-</button>
                Update your balance
                <button className="btn btn-primary mx-3" onClick={() => { depositMoney(100) }}>+</button>
            </div>
        </div>
    )
}

export default Home
