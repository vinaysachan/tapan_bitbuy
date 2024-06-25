import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import './assets/scss/main.css';
import './assets/scss/File.scss';
import TagManager from 'react-gtm-module';

import {db} from './services/Firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";

const fetchfaQList                  = async () => {
    await getDocs(collection(db, "setting")).then((querySnapshot) => {
        let settings            =   querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        let tagSetting          =   settings.find(s => s.id == 'tag');
        if(tagSetting) {
            TagManager.initialize({ gtmId: tagSetting.value });
        }
    })
}

fetchfaQList();

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)