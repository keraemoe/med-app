import React, { useState } from "react";
import EntryInstruction from '../components/EntryComponents/EntryInstruction/EntryInstruction';
import LayoutHeader from '../Layouts/layouts/LayoutHeader';
import ParticlesContainer from '../UI/ParticlesBackground/ParticlesBackground';
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusAuthed, register, changeTypeOfModal } from "../Redux/Slices/AuthSlice";


const Entry = () => {
    const { isAuthed, modalType } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        name: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        confirmpassword: '',
        usernameoremail: ''
    })

    console.log(inputs)

    const [passwordVisible, setPasswordVisible] = React.useState(false);
    return (
        <LayoutHeader>
            <ParticlesContainer />
            <EntryInstruction />
            {
                modalType === 'login' ? <Modal open={isAuthed} onCancel={() => dispatch(changeStatusAuthed(!isAuthed))}>
                    <h1 className="auth-acc">Login</h1>
                    <input className="modal_input" type="text" placeholder="Username Or Email" value={inputs.usernameoremail} onChange={(e) => setInputs({ ...inputs, usernameoremail: e.target.value })} />
                    <input className="modal_input" type="text" placeholder="Your Password" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                    <span>Don't have an account?<a onClick={() => dispatch(changeTypeOfModal('register'))}>Sign Up</a></span>
                </Modal> :

                    <Modal open={isAuthed} onCancel={() => dispatch(changeStatusAuthed(!isAuthed))} onOk={() => dispatch(register())}>
                        <h1 className="auth-acc">Sign up For account</h1>
                        <input className="modal_input" type="text" placeholder="Your Name" value={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })} />
                        <input className="modal_input" type="text" placeholder="Your Last Name" value={inputs.lastname} onChange={(e) => setInputs({ ...inputs, lastname: e.target.value })} />
                        <input className="modal_input" type="text" placeholder="Enter Your Email Addres" value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
                        <input className="modal_input" type="text" placeholder="Username" value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                        <input className="modal_input" type="password" placeholder="Your Password" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                        <input className="modal_input" type="password" placeholder="Confirm Your Password" value={inputs.confirmpassword} onChange={(e) => setInputs({ ...inputs, confirmpassword: e.target.value })} />

                    </Modal>
            }
        </LayoutHeader>
    );
};

export default Entry;


