// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name,
        this.location = attributes.location,
        this.age = attributes.age,
        this.gender = attributes.gender
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}



class Instructors extends Person {
    constructor (InstructorsAttributes){
        super (InstructorsAttributes);{
        this.favLanguage = InstructorsAttributes.favLanguage,
        this.specialty = InstructorsAttributes.specialty,
        this.catchPhrase = InstructorsAttributes.catchPhrase
        }
    }
    demo(){
        console.log(`Today we are learning about ${this.subject}.`)
    }
    grade(){
        console.log(`${this.student} recieves a perfect score on ${this.subject}`)
    }
}

class Students extends Person {
    constructor (StudentAttributes){
        super (StudentAttributes);{
            this.previousBackground = StudentAttributes.previousBackground,
            this.className = StudentAttributes.className,
            this.favSubjects = StudentAttributes.favSubjects
        }
    }
    listsSubjects(){
        console.log(`My favorite subjects are ${this.favSubjects}`)
    }
    PRAssignment(){
        console.log(`${this.student.name} has submitted a PR for ${this.subject}`)
    }
    sprintChallenge(){
        console.log(`${this.student.name} has begun sprint challenge on ${this.subject}`)
    }
}

class ProjectManager extends ProjectManager{
    constructor (ProjectManagerAttributes){
        super (ProjectManagerAttributes);{
            this.gradClassName = ProjectManagerAttributes.gradClassName,
            this.favInstructor = ProjectManagerAttributes.gradClassName
        }
    }
    standup(){
        console.log(`${this.name} announces to ${this.channel}, @channel standy times!`)
    }
    debugsCode(){
        console.log(`${this.name} debugs ${this.student.name}'s code on ${this.subject}`)
    }
}