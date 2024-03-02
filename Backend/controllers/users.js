import { auth, db } from "../firebase.js";
import { doc, setDoc } from "firebase/firestore";
import { Router } from 'express';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

export default class User{
    
    constructor(firstname, lastname, email, password, uni, faculty, program, course, year){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.uni = uni;
        this.faculty = faculty;
        this.program = program;
        this.course = course;
        this.year = year;
    }

    authenticateUser(){
        createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => { 
        const user = userCredential.user;
        console.log(user.uid);
        this.completeUserDataAddition(user.uid);
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

  });
    }

    async completeUserDataAddition(id) {
        console.log("hello2")
        var data = {
          firstname: this.firstname,
          lastname: this.lastname,
          uni: this.uni,
          faculty: this.faculty,
          program: this.program,
          course: this.course,
          year: this.year,
          uid: id // Add user's uid as a field in the document
        };
      
        console.log(data);
      
        try {
          const res = await setDoc(doc(db, 'users', id), data)
          console.log("Document successfully written!");
        } catch (error) {
          console.error("Error writing document: ", error);
        }
      }
      
    
}
