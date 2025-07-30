import Image from "next/image";
import Header from './componen/header'
import Sidec from './componen/sidecard'
import Skill from './componen/skill'


import { Dancing_Script } from 'next/font/google';


const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400'], // Specify the weights you need
});

export default function Home() {
  return (
    <>


<Header/>
    <main className={dancingScript.className}>
<Sidec/>
    </main>
<Skill/>

    </>
  )
}
