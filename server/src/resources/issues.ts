import Issue from '../model/issue';

const uuidv4 = require("uuid/v4");

let issues: Issue[] = [
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

exports.getAll = function(page = 0, size: number){
    if(!size){
        return issues;
    }
    return issues.slice(page * size, (page + 1) * size);
}

exports.getById = function(id: string){
    return issues.find(issue => issue.id === id);
}

exports.update = function(id: string, issue: Issue){
    return issues = issues.map(i => i.id === id ? issue : i);
}

exports.save = function(issue: Issue){
    return issues.push(issue);
}

exports.delete = function(id: string){
    issues = issues.filter(issue => issue.id !== id)
    return issues;
}