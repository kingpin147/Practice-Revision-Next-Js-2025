import { Metadata } from "next";


export const metadata: Metadata = {
    title: {
        template: "%s | T & N Designs",
        default:"Next js Revision - T & N Designs",
        absolute:"Blog",
},
};

export default async function Blog() {
    await new Promise((resolve) => setTimeout(()=>{
        resolve("international delay");
    },
        
         2000));
    return (
        <div><h1>Blog</h1></div>
    );
            
    
}