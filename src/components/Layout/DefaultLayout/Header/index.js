import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import images from '../../../../assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Home" />
                </div>
                <div className={cx('nav')}>
                    <ul className={cx('ul')}>
                        <li>
                            <Link to="/">Tutorials</Link>
                        </li>
                        <li>
                            <Link to="/add">Add</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
