import React, { Fragment } from 'react';
import logo from './logo.png';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Notifications from './components/Notifications';
import TopicList from './components/TopicList';
import Heading from './components/Heading';
import Title from './components/Title';
import SimpleButton from './components/Buttons.tsx/SimpleButton';
import EventButton from './components/Buttons.tsx/EventButton';
import { InputText } from './components/Inputs/InputText';
import InputTextTwo from './components/Inputs/InputTextTwo';
import BoxElement from './components/BoxElement';
import LoggedIn from './components/LoggedIn';
import Auth from './components/Auth';



function App() {
    const topicList = [
        {
            _id: 1,
            name: 'Install React With TypeScript',
            coveredPercentage: 100,
            topicId: 45,
            isCompleted: true
        },
        {
            _id: 2,
            name: 'Passing TypeScript Props to Components',
            coveredPercentage: 100,
            topicId: 47,
            isCompleted: true
        },
        {
            _id: 3,
            name: 'TypeScript Event Props',
            coveredPercentage: 99,
            topicId: 49,
            isCompleted: false
        },
    ]

    const SimpleButtonClick = () => {
        console.log('Simple Button Clicked')
    }
    return (
        <div>
                <Router>
                    <Navbar logo={logo} />
                    {/* <img src={logo} alt="Logo" /> */}
                    <div className="container" style={{marginTop: '30px'}}>
                        <Routes>
                            {/* <Route path='/' element={<Home />} /> */}
                            <Route path='/' element= { 
                                <Fragment>
                                    <Heading>
                                        <Title name="Title Of The Page"/>
                                    </Heading>
                                    <Notifications status="Completed" title="PHP with Laravel Framework" count={7} isRead={true} type="primary" />
                                    <Notifications status="Inprogress" title="ReactJS with TypeScript" count={11} isRead={true} type="success" />
                                    <Notifications status="Yet to Start" title="Python with Django Framework " isRead={false} type="warning" />
                                    <Notifications status="Not yet started" title="Node JS" isRead={false} type="danger" />
                                    <TopicList data={topicList} />
                                    <hr />

                                    <InputText value='' handleChange={(event) => console.log(event)}></InputText>
                                    <InputTextTwo value=''></InputTextTwo>
                                    <SimpleButton handleClick={SimpleButtonClick}></SimpleButton>
                                    <EventButton handleClick={(event, id) => {
                                        console.log('Event Button Clicked', event, id)
                                    }}></EventButton>
                                    <BoxElement styles={{border: '1px solid #d63384', padding: '10px 20px', marginTop: '20px', borderRadius: '4px', width: '400px'}}></BoxElement>
                                    <BoxElement styles={{border: '1px solid #d63384', padding: '10px 20px', marginTop: '20px', borderRadius: '4px', width: '400px'}}></BoxElement>
                                    <br />
                                    <LoggedIn></LoggedIn>
                                    <br />
                                    <Auth></Auth>
                                </Fragment>
                            } />
                            <Route path='/features' element={<>Features</>} />
                            <Route path='/pricings' element={<>Pricings</>} />
                        </Routes>
                    </div>
                </Router>
        </div>
    );
}

export default App;
