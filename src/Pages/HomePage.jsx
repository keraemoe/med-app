import React, { useState } from "react";
import SectionServices from "../components/HomeComponents/sectionServices/SectionServices";
import Hero from "../components/HomeComponents/sectionHero/Hero";
import ParticlesContainer from "../components/UI/ParticlesBackground/ParticlesBackground";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusAuthed, register } from "../Redux/Slices/AuthSlice";
import LayoutHeader from "../components/Layouts/layouts/LayoutHeader";
import LayoutFooter from "../components/Layouts/layouts/LayoutFooter";

const HomePage = () => {
  const { isAuthed, modalType } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: ''
  })

  console.log(inputs)

  return (
    <div>
      <LayoutHeader />
      <ParticlesContainer />
      <Hero />
      <SectionServices />


      {
        modalType === 'login' ? <Modal open={isAuthed} onCancel={() => dispatch(changeStatusAuthed(!isAuthed))}>Login</Modal> :

          <Modal width={'75%'} open={isAuthed} onCancel={() => dispatch(changeStatusAuthed(!isAuthed))} onOk={() => dispatch(register())}>
            <input type="text" value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
            <input type="text" value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
            <input type="text" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
            <button>qweqwe</button>
          </Modal>
      }
      <LayoutFooter />
    </div>
  );
};

export default HomePage;
