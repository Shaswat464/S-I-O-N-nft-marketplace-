/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-8">
        <p className="text-8xl font-bold">S I O N</p>
        <div className="flex mt-6">
          <Link href="/">
            <a className="mr-8 text-blue-500">
              Home
            </a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-8 text-green-700">
              Sell NFT
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-8 text-blue-500">
              My NFTs

              
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-8 text-green-700">
              Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp