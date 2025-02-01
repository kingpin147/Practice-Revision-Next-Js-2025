"use client";

export default function ErrorBondary({error}:{error:Error}){
    return <div>{error.message}</div>;
}

// all functions works just show error in just one page