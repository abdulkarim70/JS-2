const college ={
    name:'vnc college',
    class : ['11', '12'],

    events :['Science Fair', 'Bijoy Dibos', ' 21st february'],
   unique:{
    color:'blue',
    result:{
        gpa:'GPA-5',
    merit:"Top Most"
    }
   }
}
college.unique.result.merit='top top top' //merit er man change korlam
console.log(college.unique.result.merit);
college.events[0]='Guthail'; // index number diye array er data change
delete college.class; // delete diye class delete korlam
console.log(college);