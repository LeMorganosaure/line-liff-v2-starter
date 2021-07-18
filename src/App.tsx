import React from 'react';
import liff from '@line/liff'; 
import './App.css';

function App() {
    const sendMessage = () => {
        console.log(`Liff Id : ${process.env.MY_LIFF_ID}`);
        liff.init({liffId: `${process.env.MY_LIFF_ID}`}).then(() => {
            liff.sendMessages([
                {
                    type: 'text',
                    text: 'Hello, React World!'
                }
            ])
            .then(() => {
                console.log('message sent');
            })
            .catch((err) => {
                console.log('error', err);
            });
        })
    }
    
    return (
      <div className="App">
        <button className="button" onClick={sendMessage}>
           Send Message
        </button>
      </div>
    )
}

export default App;
