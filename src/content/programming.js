import React from "react";

const Programming = () =>
    <main className="programming">
        <img className="progam-img" src="https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg?itok=WTj9-yNz" alt="Logo" />
        <p>A programming language is mainly used to <b> develop desktop applications, websites, and mobile applications.</b></p>
        <div className="progrm-content" >
            <u><h3>Types of programming language</h3></u>
            <h3>1. Low-level programming language</h3>
            <p>Low-level language is <b> machine-dependent (0s and 1s) </b>programming language. The processor runs low- level programs directly without the need of a compiler or interpreter, so the programs written in low-level language can be run very fast.</p>
            <h3>i. Machine Language
            </h3>
            <p>Machine language is a type of low-level programming language. It is also called as<b> machine code or object code.</b> Machine language is easier to read because it is normally displayed in binary or hexadecimal form (base 16) form. It does not require a translator to convert the programs because computers directly understand the machine language programs.</p>
            <h3>ii. Assembly Language</h3>
            <p>Assembly language (ASM) is also a type of low-level programming language that is designed for specific processors. It represents the set of instructions in a<b> symbolic and human-understandable form.</b> It uses an assembler to convert the assembly language to machine language.</p>
            <p>The advantage of assembly language is that it requires less memory and less execution time to execute a program.</p>
            <h3>2. High-level programming language</h3>
            <p>High-level programming language (HLL) is<b> designed for developing user-friendly software programs and websites.</b> This programming language requires a compiler or interpreter to translate the program into machine language (execute the program).</p>
            <p>The main advantage of a high-level language is that it is<b> easy to read, write, and maintain.</b></p>
            <p>High-level programming language includes<b> Python, Java, JavaScript, PHP, C#, C++, Objective C, Cobol, Perl, Pascal, LISP, FORTRAN, and Swift programming language.</b>
            </p>
            <h3>3. Middle-level programming language
            </h3>
            <p>Middle-level programming language <b>lies between the low-level programming language and high-level programming language.</b> It is also known as the intermediate programming language and pseudo-language.</p>
            <p>A middle-level programming language's advantages are that it supports the features of high-level programming, it is a user-friendly language, and closely related to machine language and human language</p>     </div>
        <p><b>Example:</b> C, C++, language</p>
    </main >
export default Programming;