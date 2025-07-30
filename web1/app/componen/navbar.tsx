import Link from 'next/link'
import s from '@/app/s/header.module.css'


const navBar = () => {
 return (
     <div className={s.navbar}>
   <header className="bg-brown text-soft-brown py-4 sticky top-0">
     <nav className="container mx-auto flex justify-between items-center">
       <Link href="/" className="text-2xl font-bold pr-5">
         Amba
       </Link>
       <ul className="flex space-x-4">
         <li>
           <Link href="/" className="hover:text-white">
             Home
           </Link>
         </li>
         <li>
           <Link href={"/portofolio"} className="hover:text-white">
             Portfolio
           </Link>
         </li>
         <li>
           <Link href={"/blog"} className="hover:text-white">
             Blog
           </Link>
         </li>
         <li>
           <Link href={"/btn"} className="hover:text-white">
             btn
           </Link>
         </li>
       </ul>
     </nav>
   </header>
     </div>
 );
};

export default  navBar 