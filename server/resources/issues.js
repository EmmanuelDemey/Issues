const uuidv4 = require("uuid/v4");

let issues = [
    {id: uuidv4(), applicationUrl: 'http://google.fr', label: 'Mauvaise couleur', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://zenika.com', label: 'C\est moche le noir', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://google.fr', label: 'Mauvaise couleur', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://zenika.com', label: 'C\est moche le noir', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://google.fr', label: 'Mauvaise couleur', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://zenika.com', label: 'C\est moche le noir', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://google.fr', label: 'Mauvaise couleur', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://zenika.com', label: 'C\est moche le noir', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://google.fr', label: 'Mauvaise couleur', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://zenika.com', label: 'C\est moche le noir', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://google.fr', label: 'Mauvaise couleur', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://zenika.com', label: 'C\est moche le noir', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://google.fr', label: 'Mauvaise couleur', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://zenika.com', label: 'C\est moche le noir', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://google.fr', label: 'Mauvaise couleur', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://zenika.com', label: 'C\est moche le noir', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://google.fr', label: 'Mauvaise couleur', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://zenika.com', label: 'C\est moche le noir', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://google.fr', label: 'Mauvaise couleur', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://zenika.com', label: 'C\est moche le noir', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://google.fr', label: 'Mauvaise couleur', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://zenika.com', label: 'C\est moche le noir', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://google.fr', label: 'Mauvaise couleur', description: 'blablablabla', publishedDate: new Date()},
    {id: uuidv4(), applicationUrl: 'http://zenika.com', label: 'C\est moche le noir', description: 'blablablabla', publishedDate: new Date()},
];

exports.getAll = function(page = 0, size){
    if(!size){
        return issues;
    }
    return issues.slice(page * size, (page + 1) * size);
}

exports.getById = function(id){
    return issues.find(issue => issue.id === id);
}

exports.update = function(id, issue){
    return issues = issues.map(i => i.id === id ? issue : i);
}

exports.save = function(issue){
    return issues.push(issue);
}

exports.delete = function(id){
    issues = issues.filter(issue => issue.id !== id)
    return issues;
}