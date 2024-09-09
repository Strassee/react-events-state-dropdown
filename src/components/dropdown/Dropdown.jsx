import { useState } from 'react';
import DropdownList from '../dropdownlist/DropdownList';
import './Dropdown.css';

export default function Dropdown(props) {
    const [viewList, setViewList] = useState(0);
    const openList = (event) => {
      const viewSelected = (viewList === 1 ? 0 : 1);
      setViewList(viewSelected);
  };
    return (
      <div>
        <button className="btn" onClick={openList}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
        </button>
        {viewList ? <DropdownList view={viewList} /> : ''}
      </div>
    );

}