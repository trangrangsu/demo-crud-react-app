import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './Home.module.scss';
import TopSite from './TopSite';
import LeftSite from './LeftSite';
import RightSite from './RightSite';
const cx = classNames.bind(styles);

function Home() {
    const [student, setStudent] = useState({});
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/users')
            .then((response) => response.json())
            .then((data) => setStudents(data));
    }, []);

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
                        onRemoveAll={(data) => {
                            setStudents(data);
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
