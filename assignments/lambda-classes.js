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
    demo(subject){
        console.log(`Today we are learning about ${subject}.`)
    }
    grade(student, subject){
        console.log(`${student} recieves a perfect score on ${subject}`)
    }
}

const Josh = new Instructors({
    name: 'Josh',
    location: 'Boston',
    age: 35,
    gender: 'Male',
    favLanguage: 'Javascript',
    specialty: 'Front-end',
    catchPhrase: "I invokkkeee youuuuu!!!!"
});

const Susie = new Instructors({
    name: 'Susie',
    location: 'Mars',
    age: 90,
    gender: 'Female',
    favLanguage: 'Javascript',
    specialty: 'Front-end',
    catchPhrase: "Who's ready to learn??!!"
});


class Students extends Person {
    constructor (StudentAttributes){
        super (StudentAttributes);{
            this.previousBackground = StudentAttributes.previousBackground,
            this.className = StudentAttributes.className,
            this.favSubjects = StudentAttributes.favSubjects,
            this.specialty = StudentAttributes.specialty,
            this.catchPhrase = StudentAttributes.catchPhrase
        }
    }
    listsSubjects(){
        console.log(`My favorite subjects are ${this.favSubjects}`)
    }
    PRAssignment(subject){
        console.log(`${Students.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${Students.name} has begun sprint challenge on ${subject}`)
    }
    grade(){
        function range(start, end) {
            return Array(end - start + 1).fill().map((_, idx) => start + idx)
          }
          var result = range(1, 100); 
          console.log(result);
    }
}

const Henry = new Students({
    name: 'Henry',
    location: 'Asheville',
    age: 23,
    gender: 'Male',
    favSubjects: ['C++', 'Music', 'Painting'],
    specialty: 'DSP',
    catchPhrase: "When is lunch?"
});

const Zebulon = new Students({
    name: 'Zebulon',
    location: 'Nelspruit, SA',
    age: 29,
    gender: 'Male',
    favSubjects: ['Romantic British Literature', 'Film Photography', 'Drawing'],
    specialty: 'Back-End',
    catchPhrase: "Anyone for tennis?"
});


class ProjectManager extends Instructors{
    constructor (ProjectManagerAttributes){
        super (ProjectManagerAttributes);{
            this.gradClassName = ProjectManagerAttributes.gradClassName,
            this.favInstructor = ProjectManagerAttributes.gradClassName,
            this.channel = ProjectManagerAttributes.channel
            

        }
    }
    standup(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(subject){
        console.log(`${this.name} debugs ${Students.name}'s code on ${subject}`)
    }
}

const Marious = new ProjectManager({
    name: 'Marious',
    location: 'Alabama',
    age: 26,
    gender: 'Male',
    favSubjects: ['Howl.js', 'Freelancing', 'Being awesome'],
    channel: 'FSW16',
    catchPhrase: "Y'all are queit!"
});

const Madeline = new ProjectManager({
    name: 'Madeline',
    location: 'Alaska',
    age: 78,
    gender: 'Female',
    favSubjects: ['icefishing', 'Freelancing', 'Being awesome'],
    specialty: 'PHP',
    channel: 'FSW16',
    catchPhrase: "Y'all are queit!"
});

console.log(Madeline.age);
console.log(Madeline.standup('hired'));
console.log(Madeline.demo("latin"));