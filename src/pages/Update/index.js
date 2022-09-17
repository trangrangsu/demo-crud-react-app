import { useState, useEffect, useRef } from 'react';

import classNames from 'classnames/bind';
import styles from './Update.module.scss';

const cx = classNames.bind(styles);

function Update() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const id = useRef();
    const updateSpanRef = useRef();
    const deleteSpanRef = useRef();

    useEffect(() => {
        const student = JSON.parse(localStorage.getItem('student'));
        id.current = student.id;
        setName(student.name);
        setUsername(student.username);
        setPhone(student.phone);
        setEmail(student.email);
        setAddress(student.address);
        updateSpanRef.current.style.display = 'none';
        deleteSpanRef.current.style.display = 'none';
    }, []);

    const handleUpdate = () => {
        const student = {
            id: id.current,
            name,
            username,
            phone,
            email,
            address,
        };
        const option = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student),
        };
        fetch('http://localhost:8080/update/' + id.current, option)
            .then((response) => response.json())
            .then((data) => {
                updateSpanRef.current.style.display = 'inline';
                deleteSpanRef.current.style.display = 'none';
            });
        localStorage.removeItem('student');
    };

    const handleDelete = () => {
        const option = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        fetch('http://localhost:8080/delete/' + id.current, option)
            .then((response) => response.json())
            .then((data) => {
                updateSpanRef.current.style.display = 'none';
                deleteSpanRef.current.style.display = 'inline';
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
            <button className={cx('update-form-btn')} onClick={handleUpdate}>
                Update
            </button>
            <button className={cx('delete-form-btn')} onClick={handleDelete}>
                Delete
            </button>
            <div>
                <span ref={updateSpanRef} className={cx('student-form-message')}>
                    Update success
                </span>
                <span ref={deleteSpanRef} className={cx('student-form-message')}>
                    Delete success
                </span>
            </div>
        </div>
    );
}

export default Update;
