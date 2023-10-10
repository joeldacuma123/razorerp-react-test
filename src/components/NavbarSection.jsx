import BackArrow from '../../public/images/BackArrow.png';
import Dropdown from '../../public/images/Dropdown.png';
import Image from 'next/image';

import styles from '@/styles/Navbar.module.scss';

export default function NavbarSection() {
  return (
    <>
      <header className="py-3 border-bottom">
        <div className="container-fluid d-grid mx-3 gap-3 align-items-center">
          <div className="d-flex gap-4">
            <div>
              <button className="btn btn-primary back-btn d-inline-flex align-items-center" type="button">
                <Image src={BackArrow} />          
              </button>
            </div>
            <div>
              <h3>Create Inbound Order</h3>
            </div>
            <div className={styles.main}>
              <div>
                <button className="btn normal-btn d-inline-flex align-items-center" type="button">
                  To Dispatch
                </button>
              </div>
              <div>
                <button className="btn normal-btn d-inline-flex align-items-center" type="button">
                  Action
                  <Image className="ms-2" src={Dropdown} />
                </button>               
              </div>
              <div>
                <button className="btn btn-primary d-inline-flex align-items-center" type="button">
                  Create Order
                </button>               
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="pt-2 nav-scroller border-bottom">
        <nav className="nav nav-underline mx-3" aria-label="Secondary navigation">
          <a className="nav-link active" href="#">General</a>
          <a className="nav-link" href="#">
            Order Details
          </a>
          <a className="nav-link" href="#">Estimate</a>
          <a className="nav-link" href="#">Invoices</a>
          <a className="nav-link" href="#">Time Sheets</a>
          <a className="nav-link" href="#">Reporting</a>
          <a className="nav-link" href="#">Asset Purchase</a>
          <a className="nav-link" href="#">Notifications</a>
          <a className="nav-link" href="#">Activity</a>
        </nav>
      </div>
  </>
  );
}
