import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './StudentForm.module.scss';

const cx = classNames.bind(styles);

function StudentFrom({ student }) {
    const handleClick = () => {
        const jsonStudent = JSON.stringify(student);
        localStorage.setItem('student', jsonStudent);
    };
    return (
        <div>
            <h2>Tutorial</h2>
            <div className={cx('student-form-div')}>
                <label>
                    <b>Name: </b>
                </label>
                <p className={cx('student-form-p')}>{student.name}</p>
            </div>
            <div className={cx('student-form-div')}>
                <label>
                    <b>Username: </b>
                </label>
                <p className={cx('student-form-p')}>{student.username}</p>
            </div>
            <div className={cx('student-form-div')}>
                <label>
                    <b>Phone: </b>
                </label>
                <p className={cx('student-form-p')}>{student.phone}</p>
            </div>
            <div className={cx('student-form-div')}>
                <label>
                    <b>Email: </b>
                </label>
                <p className={cx('student-form-p')}>{student.email}</p>
            </div>
            <div className={cx('student-form-div')}>
                <label>
                    <b>Address: </b>
                </label>
                <p className={cx('student-form-p')}>{student.address}</p>
            </div>
            <Link to="/update">
                <button className={cx('student-form-btn')} onClick={handleClick}>
                    Edit
                </button>
            </Link>
        </div>
    );
}

export default StudentFrom;
