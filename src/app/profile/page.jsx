"use client";
export default function Profile () {
  function getRandomNumber(count){
    return Math.floor(Math.random() *count);
  }
  const random = getRandomNumber(2);
  if(random === 1){
    throw new Error("Error in Profile ");
  }
  return (
    <h1 >Profile </h1>
  )
}

 