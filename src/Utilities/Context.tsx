import { ChangeEvent, createContext, useState } from "react";

interface Context {
    children : React.ReactNode
}
interface ContextType {
    fullName: string ;
    email: string;
    github: string;
    image: string,
    showTicket: boolean;
    getName: string;
    getEmail: string;
    getImage: string;
    getGithub: string;
    disableShowTicket: ()=>void;
    onFullName: (e: ChangeEvent<HTMLInputElement>) => void;
    onEmail: (e: ChangeEvent<HTMLInputElement>) => void;
    onGithub: (e: ChangeEvent<HTMLInputElement>) => void;
    onImage: (e:ChangeEvent<HTMLInputElement>) => void;
    removeImg: ()=>void;
    handleSubmit: (e:React.FormEvent<HTMLFormElement>,email: string,github: string,image: string,name:string)=>void;
}
const initialState = {
    fullName: '' ,
    email: '',
    github: '',
    image: '',
    showTicket: false,
    getName: '',
    getEmail: '',
    getImage: '',
    getGithub: '',
    onFullName: ()=> null,
    onEmail: ()=> null,
    onGithub: ()=> null,
    onImage: ()=> null,
    removeImg: ()=>null,
    handleSubmit: ()=>null,
    disableShowTicket: ()=> null,
}
export const AppContext = createContext<ContextType>(initialState)
const Context = ({children}: Context) => {
    const [fullName,setFullName] = useState<string>('')
    const [getName,setGetName] = useState<string>('')
    const [getEmail,setGetEmail] = useState<string>('')
    const [getGithub,setGetGithub] = useState<string>('')
    const [getImage,setGetImage] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [github,setGithub] = useState<string>('')
    const [image,setImage] = useState<string>('')
    const [showTicket,setShowTicket] = useState<boolean>(false)
    const onFullName = (e: ChangeEvent<HTMLInputElement>)=>{
        setFullName(e.target.value)
    }
    const onEmail = (e: ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }
    const onGithub = (e: ChangeEvent<HTMLInputElement>)=>{
        setGithub(e.target.value)
    }
    const onImage = (e:ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files?.[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    }
    const removeImg = ()=>{
        setImage('')
    }
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>,email: string,github: string,image: string,name:string)=>{
        e.preventDefault();
        setGetEmail(email)
        setGetGithub(github)
        setGetImage(image)
        setGetName(name)
        setEmail('')
        setFullName('')
        setGithub('')
        setImage('')
        setShowTicket(true)
    }
    const disableShowTicket = ()=>{
        setShowTicket(false)
    }
    return ( 
        <AppContext.Provider value={{fullName,email,github,image,showTicket,getEmail,getGithub,getImage,getName,onFullName,onGithub,onEmail,onImage,removeImg,handleSubmit,disableShowTicket}} >
            {children}
        </AppContext.Provider>
     );
}
 
export default Context;