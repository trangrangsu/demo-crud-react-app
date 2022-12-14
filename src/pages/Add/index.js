import { useState, useRef, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Add.module.scss';

const cx = classNames.bind(styles);

function Add() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const spanRef = useRef();

    useEffect(() => {
        spanRef.current.style.display = 'none';
    }, []);

    const handleSubmit = () => {
        const student = {
            name,
            username,
            phone,
            email,
            address,
        };
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student),
        };
        fetch('http://localhost:8080/add', option)
            .then((response) => response.json())
            .then((data) => {
                spanRef.current.style.display = 'inline';
            });
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
            <span ref={spanRef} className={cx('student-form-message')}>
                Add success
            </span>
        </div>
    );
}

export default Add;
