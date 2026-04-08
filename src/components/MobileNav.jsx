import styles from "./MobileNav.module.css";

export default function MobileNav() {
  return (
    <div id="mobile-nav-menu" className={styles.root}>
      <ul className={styles.list}>
        <li>
          <a className={styles.link} href="#about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="currentColor"
            >
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>
            Profile
          </a>
        </li>
        <li>
          <a className={styles.link} href="#projects">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="currentColor"
            >
              <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
            </svg>
            Projects
          </a>
        </li>
        <li>
          <a className={styles.link} href="#home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="currentColor"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
            Home
          </a>
        </li>
        <li>
          <a className={styles.link} href="#skills">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="currentColor"
            >
              <path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Zm0-411 273-149-273-149-273 149 273 149Zm0-149Z" />
            </svg>
            Skills
          </a>
        </li>
        <li>
          <a className={styles.link} href="#contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="currentColor"
            >
              <path d="M796-120q-119 0-240-55.5T333-333Q231-435 175.5-556T120-796q0-18.86 12.57-31.43T164-840h147.33q14 0 24.34 9.83Q346-820.33 349.33-806l26.62 130.43q2.05 14.9-.62 26.24-2.66 11.33-10.82 19.48L265.67-530q24 41.67 52.5 78.5T381-381.33q35 35.66 73.67 65.5Q493.33-286 536-262.67l94.67-96.66q9.66-10.34 23.26-14.5 13.61-4.17 26.74-2.17L806-349.33q14.67 4 24.33 15.53Q840-322.27 840-308v144q0 18.86-12.57 31.43T796-120ZM233-592l76-76.67-21-104.66H187q3 41.66 13.67 86Q211.33-643 233-592Zm365.33 361.33q40.34 18.34 85.84 29.67 45.5 11.33 89.16 13.67V-288l-100-20.33-75 77.66ZM233-592Zm365.33 361.33Z" />
            </svg>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
