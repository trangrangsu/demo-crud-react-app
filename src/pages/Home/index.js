import classNames from 'classnames/bind';
import { useState, useEffect, useCallback } from 'react';

import styles from './Home.module.scss';
import TopSite from './TopSite';
import LeftSite from './LeftSite';
import RightSite from './RightSite';

const cx = classNames.bind(styles);

const studentDate = [
    {
        id: 1,
        name: 'Leanne Graham1',
        username: 'Bret1',
        email: 'Sincere@april.biz1',
        address: 'Ha Noi1',
        phone: '1-770-736-8031 x564421',
    },
    {
        id: 2,
        name: 'Leanne Graham2',
        username: 'Bret2',
        email: 'Sincere@april.biz2',
        address: 'Ha Noi2',
        phone: '1-770-736-8031 x564422',
    },
    {
        id: 3,
        name: 'Leanne Graham3',
        username: 'Bret3',
        email: 'Sincere@april.biz3',
        address: 'Ha Noi',
        phone: '1-770-736-8031 x564423',
    },
];

function Home() {
    const [student, setStudent] = useState({});
    const [students, setStudents] = useState([]);

    useEffect(() => {
        setStudents(studentDate);
    }, []);

    // const handleClickItem = useCallback(() => {}, []);
    return (
        <div className={cx('wrapper')}>
            <TopSite />
            <div className={cx('container')}>
                <div className={cx('left-site')}>
                    <LeftSite
                        students={students}
                        callback={(id) => {
                            const s = students.find((student) => student.id === id);
                            setStudent(s);
                        }}
                    />
                </div>
                <div className={cx('right-site')}>
                    <RightSite student={student} />
                </div>
            </div>
        </div>
    );
}

export default Home;
