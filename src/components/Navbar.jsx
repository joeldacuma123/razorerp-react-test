import Logo from '../../public/images/Logo.png';
import Dropdown from '../../public/images/Dropdown.png';
import Avatar from '../../public/images/Avatar.png';
import Question from '../../public/images/Question.png';
import Settings from '../../public/images/Settings.png';
import Notification from '../../public/images/Notification.png';
import Search from '../../public/images/Search.png';

import Image from 'next/image';

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <Image src={Logo} />
            </a>
            <div>
              <ul className="navbar-nav">
                <li className="nav-item px-2">
                  Dashboard
                  <Image className="ms-2" src={Dropdown} />
                </li>
                <li className="nav-item px-2">
                  CRM
                  <Image className="ms-2" src={Dropdown} />
                </li>
                <li className="nav-item px-2">
                  Inventory
                  <Image className="ms-2" src={Dropdown} />
                </li>
                <li className="nav-item px-2">
                  Purchases
                  <Image className="ms-2" src={Dropdown} />
                </li>
                <li className="nav-item px-2">
                  Sales
                  <Image className="ms-2" src={Dropdown} />
                </li>
                <li className="nav-item px-2 highlight">
                  Recycling
                  <Image className="ms-2" src={Dropdown} />
                </li>
                <li className="nav-item px-2">
                  Shredding
                  <Image className="ms-2" src={Dropdown} />
                </li>
                <li className="nav-item px-2">
                  Finance
                  <Image className="ms-2" src={Dropdown} />
                </li>
                <li className="nav-item px-2">
                  Reports
                  <Image className="ms-2" src={Dropdown} />
                </li>
                <li className="nav-item px-2">
                  More
                  <Image className="ms-2" src={Dropdown} />
                </li>
              </ul>
            </div>
            <div className="d-flex nav-profile">
              <Image className="me-1" src={Search} />
              <Image className="me-1" src={Notification} />
              <Image className="me-1" src={Settings} />
              <Image className="me-2" src={Question} />
              <Image src={Avatar} />
            </div>
          </div>
        </nav>
    </>
  );
}