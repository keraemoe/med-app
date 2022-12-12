import React, { useState } from "react";
import SectionServices from "../components/HomeComponents/sectionServices/SectionServices";
import Hero from "../components/HomeComponents/sectionHero/Hero";
import ParticlesContainer from "../UI/ParticlesBackground/ParticlesBackground";
import LayoutHeader from "../Layouts/layouts/LayoutHeader";
import LayoutFooter from "../Layouts/layouts/LayoutFooter";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusAuthed, register, changeTypeOfModal, Auth } from "../Redux/Slices/AuthSlice";
import { Modal } from "antd";

const HomePage = () => {
  const { isAuthed, modalType } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [value, setValue] = useState({
    username: '',
    password: '',
  })



  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div>
      <LayoutHeader />
      <ParticlesContainer />
      <Hero />
      <SectionServices />


      {
        modalType === 'login' ? <Modal open={isAuthed} onCancel={() => dispatch(changeStatusAuthed(!isAuthed))} onOk={() => dispatch(Auth(value))}>
          <h1 className="auth-acc">Login</h1>
          <input className="modal_input" type="text" placeholder="Username" value={value.username} onChange={(e) => setValue({ ...value, username: e.target.value })} />
          <br />
          <br />
          <input className="modal_input" type="password" placeholder="Your Password" value={value.password} onChange={(e) => setValue({ ...value, password: e.target.value })} />
          <br />
          <br />
          <span>Don't have an account?<a onClick={() => dispatch(changeTypeOfModal('register'))}>Sign Up</a></span>
        </Modal> :

          <Modal open={isAuthed} onCancel={() => dispatch(changeStatusAuthed(!isAuthed))} onOk={(e) => dispatch(register(inputs))}>
            <h1 className="auth-acc">Sign up For account</h1>
            <input className="modal_input" type="text" placeholder="Enter Your Email Addres" value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
            <br />
            <br />
            <input className="modal_input" type="text" placeholder="Username" value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
            <br />
            <br />
            <input className="modal_input" type="password" placeholder="Your Password" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />

          </Modal>
      }
      <LayoutFooter />
    </div>
  );
};

export default HomePage;