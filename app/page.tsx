import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
//import { useSession, signIn, signOut } from 'next-auth/react';


export default function Home() {
  //const { data, status } = useSession();
 // if (status === 'loading') return <h1> loading... please wait</h1>;
  {
    return (
      <div>
         <script src="https://accounts.google.com/gsi/client" async></script>
    <div id="g_id_onload"
        data-client_id="YOUR_GOOGLE_CLIENT_ID"
        data-login_uri="https://your.domain/your_login_endpoint"
        data-auto_prompt="false">
    </div>
    <div className="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left">
    </div>
        <h1> hi <script></script></h1>
        <button className="ASD">sign out</button>
      </div>
    );
  }
 
}
