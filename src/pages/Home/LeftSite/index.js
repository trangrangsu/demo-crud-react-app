import { useState, useEffect, useRef } from 'react';
import styles from './LeftSite.module.scss';
import classNames from 'classnames/bind';
import { memo } from 'react';
const cx = classNames.bind(styles);

function LeftSite({ students, callback }) {
    const [item, setItem] = useState(0);

    const itemRef = useRef();

    useEffect(() => {
        if (item > 0) {
            if (itemRef.current) {
                document.getElementById(itemRef.current).classList.remove(cx('selected-item'));
            }
            document.getElementById(item).classList.add(cx('selected-item'));
            itemRef.current = item;
        }
    }, [item]);

    const handleRemoveAll = () => {
        console.log('remove all');
    };

    return (
        <div className={cx('wrapper')}>
            <h2>Tutorials List</h2>
            <div>
                <ul className={cx('list-item')}>
                    {students.map((student) => (
                        <li
                            key={student.id}
                            id={student.id}
                            className={cx('item')}
                            onClick={() => {
                                setItem(student.id);
                                return callback(student.id);
                            }}
                        >
                            {student.name}
                        </li>
                    ))}
                </ul>
            </div>
            <button className={cx('remove-btn')} onClick={handleRemoveAll}>
                Remove All
            </button>
        </div>
    );
}

export default memo(LeftSite);
