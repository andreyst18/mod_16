//Задание 1

const xmlText = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlText, 'text/xml');
const property = xmlDOM.documentElement.nodeName;
const xmlStudents = xmlDOM.querySelectorAll('student');
const students = [];

for (let i = 0; i < xmlStudents.length; i++) {
    const student = {};

    const name = xmlStudents[i].querySelector('name');
    const first = name.querySelector('first').textContent;
    const second = name.querySelector('second').textContent;
    const nameProperty = name.nodeName;
    student[nameProperty] = first + ' ' + second;

    const age = xmlStudents[i].querySelector('age');
    const ageProperty = age.nodeName;
    student[ageProperty] = +age.textContent;

    const prof = xmlStudents[i].querySelector('prof');
    const profProperty = prof.nodeName;
    student[profProperty] = prof.textContent;

    const lang = name.getAttributeNode('lang').name;
    const langValue = name.getAttribute('lang');
    const langProperty = lang;
    student[langProperty] = langValue;

    students.push(student);
}

const result = {
    [property]: students
}

console.log(result)



