class Student {
    constructor (name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    setPlacementAge(minPlacementAge) {
        console.log(this)
        return (minMarks) => {

            console.log('inside eligibleForCurrentCompany', this);
             
            if(this.marks > minMarks && this.age > minPlacementAge) {
                console.log(this.name + "is ready for placements")
            } 
            else {
                console.log(this.name + "is not ready for placements")
            }
        }
    }
}

const navya = new Student('navya', 25, 75)
const guna = new Student('guna', 15 ,35)

navya.setPlacementAge(18)(40)
guna.setPlacementAge(18)(40)