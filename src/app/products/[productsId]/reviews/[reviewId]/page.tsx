import {  redirect } from "next/navigation";
 
function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
  }


export default async function ReviewDetail({params, }:{params:Promise<{productId: string, reviewId: string}>}) {
    
    
    const{productId, reviewId} = await params;
    if(parseInt(reviewId)>1000){
        const random = getRandomInt(2);
        if (random === 1){
            throw new Error("error loading review");
        }
        // notFound();
        redirect("/products");
    }
    return(
        <h1>Review {reviewId} for product{productId}</h1>
    )
}

