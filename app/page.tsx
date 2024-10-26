import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
//import { useSession, signIn, signOut } from 'next-auth/react';


export default function Home() {
  //const { data, status } = useSession();
 // if (status === 'loading') return <h1> loading... please wait</h1>;
  {
    return (
      <div>
        <h1> hi <script></script></h1>
        <img src='SAD' alt="ADS" />
        <button className="ASD">sign out</button>
      </div>
    );
  }
  return (
    <div className="prose dark:prose-invert">
     Yo
     <button onClick={() => ('google')}>sign in with gooogle</button>
   
    </div>
  )
}
