import styles from './TopSite.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function TopSite() {
    const handleSearch = () => {
        console.log('search');
    };
    return (
        <div className={cx('wrapper')}>
            <input placeholder="Search by title" className={cx('top-input')} />
            <button className={cx('top-button')} onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}

export default TopSite;
