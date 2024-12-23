import Header from "./_header/page";
import "./main.css"
export const metadata = {
  title:{
    // absolute:"", will ignore all include this in specific page where you want to ignore other default and template it has higher precedence
    default:"Next",
    template:"%s | NextJs"
  },
  description:"generated by next js"
}
export default function RootLayout({ children }) {
    return (
      <html >
        <body>
          <Header/>
          {children}</body>
      </html>
    )
  }