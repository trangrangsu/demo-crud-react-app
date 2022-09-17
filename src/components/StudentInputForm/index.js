import classNames from 'classnames/bind';
import styles from './StudentForm.module.scss';

const cx = classNames.bind(styles);

function StudentInputForm() {
    return (
        <div>
            <h2>Tutorial</h2>
            <div className={cx('student-form-div')}>
                <label>
                    <b>Name: </b>
                </label>
                <input />
            </div>
            <div className={cx('student-form-div')}>
                <label>
                    <b>Username: </b>
                </label>
                <input />
            </div>
            <div className={cx('student-form-div')}>
                <label>
                    <b>Phone: </b>
                </label>
                <input />
            </div>
            <div className={cx('student-form-div')}>
                <label>
                    <b>Email: </b>
                </label>
                <input />
            </div>
            <div className={cx('student-form-div')}>
                <label>
                    <b>Address: </b>
                </label>
                <input />
            </div>
        </div>
    );
}

export default StudentInputForm;
