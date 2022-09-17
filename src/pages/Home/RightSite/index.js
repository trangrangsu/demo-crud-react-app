import styles from './RightSite.module.scss';
import classNames from 'classnames/bind';
import StudentFrom from '../../../components/StudentForm';
const cx = classNames.bind(styles);

function RightSite({ student }) {
    return (
        <div>
            {student.id && <StudentFrom student={student} />}
            {student.id === undefined && <p>Please click on a Tutorial</p>}
        </div>
    );
}

export default RightSite;
