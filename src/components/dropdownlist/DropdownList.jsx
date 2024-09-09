import { useState } from 'react';
import './DropdownList.css';

export default function DropdownList({ view }) {
    const sublist = ['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out'];
    const [indCurrent, setSwitchItem] = useState(0);
    let index = 0;
    let result = sublist.map((item) => (
        sublist[indCurrent] === item ? <li className="active" key={index++}><a href="#">{item}</a></li> : <li key={index++}><a href="#">{item}</a></li>
    ));

    const Switch = (event) => {
        setSwitchItem(sublist.indexOf(event.target.textContent));
    };

    return (
        <ul className="dropdown" onClick={Switch}>
            {result}
        </ul>
    );

}