import s from './StudentList.module.css'

type StudentsList = {
    students: StudentType[]
}

type StudentType = {
    id: number,
    name: string,
    age: number
}

const StudentsList = (props: StudentsList) => {
    return <div className={s.Container}> <h1>Students Classwork</h1>

        <div className={s.StudentList}>
        {props.students.map((ObjectFromStudentType, index) => {
        return(

            <ul className={s.Item} key = {index}>
                {ObjectFromStudentType.name} <span> - {ObjectFromStudentType.age}</span>
            </ul>
            )

        })
        }
        </div>
    </div>
}


export default StudentsList