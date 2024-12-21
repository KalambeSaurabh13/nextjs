"use client"
export default function ErrorBoundary({ error, reset }) {
    return <h1> {error.message} <button onClick={reset}>try again</button> </h1>
}