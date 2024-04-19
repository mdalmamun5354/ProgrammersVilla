import './App.css'
import Footer from './comps/Footer'
import Header from './comps/Header'
import Hero from './comps/Hero'
import Pro from './comps/Pro'
import ProList from './comps/ProList'
import { useState } from 'react'

import image from './assets/img/pro_1.jpg'
import imgMdAlMamun from './assets/img/pros/Md. Al Mamun.jpg'
import imgDennisRitchie from './assets/img/pros/Dennis Ritchie.jpg'
import imgBjarneStroustrup from './assets/img/pros/Bjarne Stroustrup.jpg'
import imgJamesGosling from './assets/img/pros/James Gosling.jpg'
import imgDonaldKnuth from './assets/img/pros/Donald Knuth.jpg'
import imgGraceHopper from './assets/img/pros/Grace Hopper.jpg'
import imgAlanTuring from './assets/img/pros/Alan Turing.jpg'
import imgJohnMcCarthy from './assets/img/pros/John McCarthy.jpg'
import imgTimBernersLee from './assets/img/pros/Tim Berners-Lee.jpg'
import imgKenThompson from './assets/img/pros/Ken Thompson.jpg'
import imgMargaretHamilton from './assets/img/pros/Margaret Hamilton.jpg'
import imgJohnCarmack from './assets/img/pros/John Carmack.jpg'
import imgBrianKernighan from './assets/img/pros/Brian Kernighan.jpg'

function App() {

  const proList = [
    {
      name: 'Md. Al Mamun',
      about: "Md. Al Mamun is a passionate programmer from Naogaon, Bangladesh. Currently pursuing a Diploma in Computer Science at TMSS Institute of Science and ICT in Bogra, Bangladesh. Skilled in web design, web development, and proficient in various programming languages including Python, Java, C, C++, C#, PHP, and JavaScript. Continuously learning and striving for improvement with the guidance of Allah. Dedicated to his work, always eager to learn something new, and committed to self-improvement.",
      born: 'August 10, 2002',
      address: 'Naogaon, Bangladesh',
      parents: 'Md. Ab. Mannan and Miss. Aktar Banu',
      education: 'Studying in Diploma in Engineering College TMSS Institute of Science and ICT, Bogra, Bangladesh',
      awards: 'Turing Award, Japan Prize, MORE',
      img: imgMdAlMamun,
    },
    {
      name: 'Dennis Ritchie',
      about: 'Dennis MacAlistair Ritchie was an American computer scientist. He is best known for creating the C programming language and, with long-time colleague Ken Thompson, the Unix operating system and B programming language.',
      born: 'September 9, 1941',
      address: 'Bronxville, New York, United States',
      parents: 'Alistair E. Ritchie, Jean McGee Ritchie',
      died: 'October 12, 2011 (age 70 years), Berkeley Heights, New Jersey, United States',
      education: 'Harvard University, Harvard John A. Paulson School Of Engineering And Applied Sciences, Summit High School',
      awards: 'Turing Award, Japan Prize, MORE',
      img: imgDennisRitchie,
    },
    {
      name: 'Bjarne Stroustrup',
      about: 'Bjarne Stroustrup is a Danish computer scientist, most notable for the invention and development of the C++ programming language. Stroustrup served as a visiting professor of computer science at Columbia University beginning in 2014, where he has been a full professor since 2022',
      born: 'December 30, 1950',
      address: 'Aarhus, Denmark',
      parents: ' Vibeke Stroustrup and Erik Stroustrup',
      education: 'University of Cambridge (1979), Aarhus University (1969–1975), Churchill College, Computer Laboratory',
      awards: 'IEEE Computer Society Computer Pioneer Award',
      img: imgBjarneStroustrup,
    },
    {
      name: 'James Gosling',
      about: 'James Gosling OC is a Canadian computer scientist, best known as the founder and lead designer behind the Java programming language',
      born: 'May 19, 1955',
      address: 'Calgary, Canada',
      parents: 'Alistair E. Ritchie, Jean McGee Ritchie',
      died: 'October 12, 2011 (age 70 years), Berkeley Heights, New Jersey, United States',
      education: 'Harvard University, Harvard John A. Paulson School Of Engineering And Applied Sciences, Summit High School',
      awards: 'Turing Award, Japan Prize, MORE',
      img: imgJamesGosling,
    },
    {
      name: 'Donald Knuth',
      about: 'Donald Knuth is an American computer scientist, best known for his multi-volume work, "The Art of Computer Programming," and the creation of TeX typesetting system.',
      born: 'January 10, 1938',
      address: 'Milwaukee, Wisconsin, United States',
      parents: 'Ervin Henry Knuth and Louise Marie Bohning',
      education: 'Case Institute of Technology (B.S.), California Institute of Technology (Ph.D.)',
      awards: 'ACM Turing Award, National Medal of Science, Kyoto Prize, Turing Award',
      img: imgDonaldKnuth,
    },
    {
      name: 'Grace Hopper',
      about: 'Grace Hopper was an American computer scientist and United States Navy rear admiral. She was a pioneer in computer programming, most notably developing the first compiler for a programming language and coining the term "bug" in relation to computer glitches.',
      born: 'December 9, 1906 – January 1, 1992',
      address: 'New York, New York, United States',
      parents: 'Walter Fletcher Murray and Mary Campbell Van Horne',
      education: 'Vassar College (B.A.), Yale University (M.A., Ph.D.)',
      awards: 'National Medal of Technology, Presidential Medal of Freedom, IEEE Emanuel R. Piore Award',
      img: imgGraceHopper,
    },
    {
      name: 'Alan Turing',
      about: 'Alan Turing was a British mathematician, logician, and computer scientist. He is widely considered the father of theoretical computer science and artificial intelligence.',
      born: 'June 23, 1912 – June 7, 1954',
      address: 'Maida Vale, London, United Kingdom',
      parents: 'Julius Mathison Turing and Ethel Sara Stoney',
      education: "King's College, Cambridge (B.A., Ph.D.)",
      awards: "Order of the British Empire, Turing Award, Royal Society Royal Medal, Smith's Prize",
      img: imgAlanTuring,
    },
    {
      name: 'John McCarthy',
      about: 'John McCarthy was an American computer scientist and cognitive scientist who coined the term "artificial intelligence." He is known for his contributions to the development of Lisp programming language.',
      born: 'September 4, 1927 – October 24, 2011',
      address: 'Boston, Massachusetts, United States',
      parents: 'John Patrick McCarthy and Ida Glatt McCarthy',
      education: 'California Institute of Technology (B.S.), Princeton University (Ph.D.)',
      awards: 'Turing Award, Kyoto Prize, National Medal of Science, Computer Pioneer Award',
      img: imgJohnMcCarthy,
    },
    {
      name: 'Tim Berners-Lee',
      about: 'Tim Berners-Lee is a British computer scientist known for inventing the World Wide Web. He also developed the first web browser and web server software.',
      born: 'June 8, 1955',
      address: 'London, United Kingdom',
      parents: 'Mary Lee Woods and Conway Berners-Lee',
      education: "The Queen's College, Oxford (B.A.), The Queen's College, Oxford (Ph.D.)",
      awards: 'Turing Award, Order of Merit, Millennium Technology Prize, Queen Elizabeth Prize for Engineering',
      img: imgTimBernersLee,
    },
    {
      name: 'Ken Thompson',
      about: 'Ken Thompson is an American computer scientist who, along with Dennis Ritchie, created the Unix operating system and the B programming language, which later evolved into C.',
      born: 'February 4, 1943',
      address: 'New Orleans, Louisiana, United States',
      parents: 'Elizabeth Thompson and Chester Thompson',
      education: 'University of California, Berkeley (B.S., M.S.)',
      awards: 'Turing Award, National Medal of Technology',
      img: imgKenThompson,
    },
    {
      name: 'Margaret Hamilton',
      about: "Margaret Hamilton is an American computer scientist and systems engineer who led the team that developed the onboard flight software for NASA's Apollo missions.",
      born: 'August 17, 1936',
      address: 'Paoli, Indiana, United States',
      parents: 'Kenneth Heafield and Ruth Esther Heafield',
      education: 'Earlham College (B.A.), Brandeis University (M.A.)',
      awards: 'Presidential Medal of Freedom, NASA Exceptional Space Act Award',
      img: imgMargaretHamilton,
    },
    {
      name: 'John Carmack',
      about: 'John Carmack is an American game programmer and virtual reality engineer. He co-founded id Software and was the lead programmer of games like Doom and Quake.',
      born: 'August 20, 1970',
      address: 'Roeland Park, Kansas, United States',
      parents: 'Stanley Carmack and Shirley Carmack',
      education: 'University of Missouri–Kansas City',
      awards: 'BAFTA Fellowship, BAFTA Special Award, Technology & Engineering Emmy Award',
      img: imgJohnCarmack,
    },
    {
      name: 'Brian Kernighan',
      about: 'Brian Kernighan is a Canadian computer scientist known for his contributions to the development of the Unix operating system and the C programming language. He co-authored the book "The C Programming Language" with Dennis Ritchie.',
      born: 'January 1, 1942',
      address: 'Toronto, Canada',
      parents: 'Leonard Kernighan and Mary Wales Kernighan',
      education: 'University of Toronto (B.A.Sc., M.A.Sc., Ph.D.)',
      awards: 'ACM Software System Award, IEEE Richard W. Hamming Medal',
      img: imgBrianKernighan,
    }
  ]


  const [proInfo, setProInfo] = useState();

  return (
    <>
      <Header />
      {
        !proInfo ? (
          <>
            <Hero />
            <ProList
              proList={proList}
              setProInfo={setProInfo}
            />
          </>
        ) :
          <Pro pro={proInfo} setProInfo={setProInfo} />
      }
      <Footer />
    </>
  )
}

export default App
