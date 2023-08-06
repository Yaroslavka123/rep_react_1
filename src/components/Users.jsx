import list from './CSS/users.module.css'
export default function Users(){
    const allUsers = [
        {
            id: 1,
            firstname: 'Bob',
            lastname: 'Marley',
            bio: 'Слава Україні!',
            age: 40,
            isHappy: true
        },
        {
            id: 2,
            firstname: 'John',
            lastname: 'Doe',
            bio: 'Героям Слава!',
            age: 22,
            isHappy: false
        }
    ]
if(allUsers.length === 0){ return<div className={list.item}>user is not defiend</div>}


 return(

    <div>
        {allUsers.map((user)=>{
            return <div className={list.item} key={user.id}>
                {`${user.firstname} ${user.lastname} is ${user.age}`}
            </div>
        })}
    </div>
    )
}