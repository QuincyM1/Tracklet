import GoogleLoginButton from '../components/GoogleLoginButton';

export default function LoginPage(){
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
           <h1 className="text-3xl font-bold mb-6">Login to Dashboard</h1>
           <GoogleLoginButton />
           </div>
           );
       }
