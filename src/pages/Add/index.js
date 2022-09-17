import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Add.module.scss';

const cx = classNames.bind(styles);

function Add() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = () => {
        const student = {
            name,
            username,
            phone,
            email,
            address,
        };
        console.log(student);
    };

    return (
        <div className={cx('wrapper')}>
            <h2>Tutorial</h2>
            <div className={cx('student-form-div')}>
                <label>Name</label>
                <br />
                <input className={cx('student-form-input')} value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={cx('student-form-div')}>
                <label>Username</label>
                <br />
                <input
                    className={cx('student-form-input')}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className={cx('student-form-div')}>
                <label>Phone</label>
                <br />
                <input className={cx('student-form-input')} value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className={cx('student-form-div')}>
                <label>Email</label>
                <br />
                <input className={cx('student-form-input')} value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={cx('student-form-div')}>
                <label>Address</label>
                <br />
                <input
                    className={cx('student-form-input')}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <button className={cx('student-form-btn')} onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}

export default Add;
