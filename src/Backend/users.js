import { auth, db } from "./firebase.js";
import { addDoc } from "firebase/firestore";
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
        completeUserDataAddition(user.uid);
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

  });
    }

    async completeUserDataAddition(id) {
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
          await db.collection("users").doc(id).set(data);
          console.log("Document successfully written!");
        } catch (error) {
          console.error("Error writing document: ", error);
        }
      }
      
    
}
