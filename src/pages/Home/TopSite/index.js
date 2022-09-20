import { useState } from 'react';
import styles from './TopSite.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function TopSite({ onSearch }) {
    const [name, setName] = useState('');
    return (
        <div className={cx('wrapper')}>
            <input
                value={name}
                placeholder="Search by title"
                className={cx('top-input')}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                className={cx('top-button')}
                onClick={() => {
                    return onSearch(name);
                }}
            >
                Search
            </button>
        </div>
    );
}

export default TopSite;
